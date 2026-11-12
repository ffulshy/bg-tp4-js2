"use strict"; // (slide 51)

// let, slide 51)
let lignes = 0;

// (tableaux et objets slides 38, 39 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// appel de fonction, slide 45)
init();

/*
 fonction, slide 45)
 */
function init() {
    // Boucle for (slide 44)
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

/*
 * doInsert() (fonction, slide 45)
 */
function doInsert(nom, prenom, points) {
    // (opérateur ++, slide 41)
    lignes++;
    const num = lignes;

    
    doInsertRowTable(num, nom, prenom, points);
}

/*
 (fonction, slide 45)
 */
function doInsertRowTable(num, nom, prenom, points) {

    // querySelector (slide 76)
    const table = document.querySelector("table");

    // createElement (slide 104)
    const row = document.createElement("tr");

    // setAttribute (slide 107)
    row.setAttribute("class", "row");

    // (slide 104)
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

    //  checkbox (slide 104)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // setAttribute (slide 107)
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
  (fonction, slide 45)
 */
function consoleTableau() {
    // console.log (slide 36)
    console.log(persons);
}
