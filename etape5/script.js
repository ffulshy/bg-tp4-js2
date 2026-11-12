"use strict"; // Mode strict (slide 51)

// let, slide 51)
let lignes = 0;

// (slide 51)
let total_points = 0;

// tableaux et objets, slides 38, 39 et 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// appel de fonction, slide 45)
init();

/*
 (fonction, slide 45)
 */
function init() {
    // Boucle for..(slide 44)
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
    //  getElementById (slide 61)
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

    // querySelector (slide 76)
    const table = document.querySelector("table");

    // Créer un élément tr avec createElement (slide 104)
    const row = document.createElement("tr");

    // setAttribute (slide 107)
    row.setAttribute("class", "row");

    // Créer les 5 colonnes td (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // innerText (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // checkbox (slide 104)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    //  setAttribute (slide 107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // append() (slide 98)
    row.append(col1, col2, col3, col4, col5);

    // (slide 98)
    table.append(row);
}

/*
fonction, slide 45)
 */
function consoleTableau() {
    // console.log (slide 36)
    console.log(persons);
}

/*
 (fonction, slide 45)
 */
function doNewData() {
    //  getElementById (slide 61)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // value de chaque champ (slide 93)
    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    // Condition if :(slide 42)
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
