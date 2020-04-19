var shoppingListObject = {
    ingredients: [
        {
            name: "Nudeln",
            amount: 500,
            unit: "g",
        },
        {
            name: "passierte Tomaten",
            amount: 500,
            unit: "ml"
        },
        {
            name: "Parmesan",
            amount: 50,
            unit: "g"
        },
        {
            name: "Zwiebel(n)",
            amount: 0.5,
            unit: "Stk."
        }
    ],
    seasons: ["Salz", "Pfeffer", "Oregano", "Thymian", "Knoblauchpulver"]
}

// --------------------------------

var shoppingListReference;

window.addEventListener('DOMContentLoaded', (event) => {
    shoppingListReference = document.getElementById("shoppingList");
    shoppingListReference.innerHTML = buildShoppingListTable(shoppingListObject);

});

function buildShoppingListTable(shoppingListObject) {
    var shoppingListTable = "";

    for (var i = 0; i < shoppingListObject.ingredients.length; i++) {
        var currentIngredient = shoppingListObject.ingredients[i];

        shoppingListTable += "<tr>" +
            "<td id='amount" + i + "'>" + currentIngredient.amount + "</td>" +
            "<td id='unit" + i + "'>" + currentIngredient.unit + "</td>" +
            "<td id=" + i + "'singleIngredient'>" + currentIngredient.name + "</td>" +
            "</tr>";
    }

    for (i = 0; i < shoppingListObject.ingredients.length; i++) {
        var currentSeason = shoppingListObject.seasons[i];
        shoppingListTable += "<tr>" +
            "<td></td><td></td><td id='seasons'>" + currentSeason + "</td>" +
        "</tr>"
    }
    return shoppingListTable;
}