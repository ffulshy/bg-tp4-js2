"use strict"; 

// let, slide 51)
let lignes = 0;

// (slide 51)
let total_points = 0;

// (tableaux et objets, slides 38 39 , 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

//(appel de fonction, slide 45)
init();

/*fonction, slide 45)
 */
function init() {
    // boucle for (slide 44)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

/*
 doInsertRowTable(). (fonction, slide 45)
 */
function doInsert(nom, prenom, points) {
    // (opérateur ++, slide 41)
    lignes++;
    const num = lignes;

    doInsertRowTable(num, nom, prenom, points);

    // (opérateur +=, slide 41)
    total_points += points;

    update_summary();
}

/*
  (fonction, slide 45)
 */
function update_summary() {
    // getElementById (slide 61)
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // (slide 91)
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

/*
  (fonction, slide 45)
 */
function doInsertRowTable(num, nom, prenom, points) {

    //querySelector (slide 76)
    const table = document.querySelector("table");

    // createElement (slide 104)
    const row = document.createElement("tr");

    // AsetAttribute (slide 107)
    row.setAttribute("class", "row");

    // colonnes td (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    //  innerText (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // checkbox (slide 104)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Affectation des classes avec setAttribute (slide 107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    //  append() (slide 98)
    row.append(col1, col2, col3, col4, col5);

    // A(slide 98)
    table.append(row);
}

/*
  (fonction, slide 45)
 */
function consoleTableau() {
    // console.log (slide 36)
    console.log(persons);
}

/* (fonction, slide 45) */
function doNewData() {
    // getElementById (slide 61)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Lire l'attribut value de chaque champ (slide 93)
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // Condition if  (slide 42)
    if (nom.trim() === "" || prenom.trim() === "" || Number.isNaN(points)) {
        // alert de window pour afficher un message (slide 116)
        alert("Formulaire incomplet !");
    } else {
        doInsert(nom, prenom, points);

        //  push (slide 38)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // (slide 93)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

/*
 (fonction, slide 45)
 */
function deleteRow() {
    // (condition if, slide 42)
    if (lignes === 0) {
        alert("Le tableau est vide !");
        return;
    }

    // querySelector() et querySelectorAll() (slide 76)
    const table = document.querySelector("table");
    const checked = table.querySelectorAll("tr.row .col_chkbox input:checked");

    if (checked.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    if (!confirm("Voulez-vous vraiment supprimer " + checked.length + " ligne(s) ?")) {
        return;
    }

    const rows = Array.from(table.querySelectorAll("tr.row"));

    // (boucle for, slide 44)
    for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        const checkbox = row.querySelector(".col_chkbox input");

        // condition if, slide 42)
        if (checkbox.checked) {
            // (slide 89 
            const points = parseInt(row.cells[3].innerText);

            total_points -= points;

            lignes--;

            // remove() (slide 100)
            row.remove();

            persons.splice(i, 1);
        }
    }

    renumber();

    document.getElementById("select_all").checked = false;

    alert("Suppression effectuée avec succès !");
    update_summary();
}

/*
(fonction, slide 45)
 */
function renumber() {
    const rows = document.querySelectorAll("tr.row");
    // forEach (slides 44 et 46)
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1;
    });
}



/*
 * addEventListener slide 136)
 */
document.getElementById("select_all").addEventListener("change", function () {
    const boxes = document.querySelectorAll("tr.row .col_chkbox input");
    // this.checked  slide 46)
    boxes.forEach((box) => {
        box.checked = this.checked;
    });
});

/*
 (slide 139)
 */
document.getElementById("form_container").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        doNewData();
    }
});

/*
 (slides 136 et 139)
 */
document.querySelector("table").addEventListener("dblclick", function (event) {
    const cell = event.target.closest("td");

    if (cell === null || !cell.parentElement.classList.contains("row")) return;
    if (cell.cellIndex < 1 || cell.cellIndex > 3) return;

    if (cell.querySelector("input") !== null) return;

    startEdit(cell);
});

function startEdit(cell) {
    const oldValue = cell.innerText;

    //  (createElement, slide 104)
    const input = document.createElement("input");
    input.setAttribute("type", cell.cellIndex === 3 ? "number" : "text");
    input.setAttribute("class", "edit_field");
    input.value = oldValue;
    cell.innerText = "";
    cell.append(input);
    input.focus();

    let finished = false;

    function finish(save) {
        if (finished) return;
        finished = true;

        const newValue = input.value.trim();
        const valid = cell.cellIndex === 3
            ? !Number.isNaN(parseInt(newValue))
            : newValue !== "";

        if (!save || !valid) {
            cell.innerText = oldValue;
            return;
        }

        const rows = Array.from(document.querySelectorAll("tr.row"));
        const index = rows.indexOf(cell.parentElement);
        const person = persons[index];

        if (cell.cellIndex === 1) {
            person.nom = newValue;
            cell.innerText = newValue;
        } else if (cell.cellIndex === 2) {
            person.prenom = newValue;
            cell.innerText = newValue;
        } else {
            // (slide 41)
            const newPoints = parseInt(newValue);
            total_points += newPoints - person.points;
            person.points = newPoints;
            cell.innerText = newPoints;
            update_summary();
        }
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") finish(true);
        if (event.key === "Escape") finish(false);
    });
    input.addEventListener("blur", function () {
        finish(true);
    });
}
