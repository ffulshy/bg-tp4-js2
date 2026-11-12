"use strict"; // (slide 51)

/*
 Fonction avec paramètres (slide 45)
 */
function doInsertRowTable(num, nom, prenom, points) {

    // querySelector (slide 76 
    const table = document.querySelector("table");

    // createElement (slide 104)
    const row = document.createElement("tr");

    // setAttribute (slide 107)
    row.setAttribute("class", "row");

    // (colonnes du tableau) (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    //innerText (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // checkbox (slide 104)
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

    //  table (slide 98)
    table.append(row);
}
