// var mealObject = {
//     id: 1,
//     headline: "Spaghetti",
//     image: "./images/foodpictures/noodles.png",
//     ingredients: ["Nudeln", "passierte Tomaten", "Parmesan", "Zwiebel(n)"],
//     amount: [500, 500, 50, 0.5],
//     unit: ["g", "ml", "g", "Stk."],
//     seasons: ["Salz", "Pfeffer", "Oregano", "Thymian", "Knoblauchpulver"],
//     steps: ["1. Schritt", "Wasser kochen", "2. Schritt", "Nudeln reinwerfen", "3. Schritt", "Wenn Nudeln gar -> abschütten", "4. Schritt", "Mampf"]
// };
var mealObject = {
    id: 1,
    headline: "Spaghetti",
    image: "./images/foodpictures/noodles.png",
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
        },
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
    seasons: ["Salz", "Pfeffer", "Oregano", "Thymian", "Knoblauchpulver"],
    steps: ["Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen Wasser kochen ", "Nudeln reinwerfen Nudeln reinwerfen Nudeln reinwerfen Nudeln reinwerfen Nudeln reinwerfen ", "Wenn Nudeln gar -> abschütten", "Mampf"]
}
// ----------------------------


var numberOfPersonsReference = 1;
var ingredientReference;
var ingredientsTableReference;
var instructionsListReference;
var seasonsListReference;

window.addEventListener('DOMContentLoaded', (event) => {
    ingredientsTableReference = document.getElementById("ingredientsTable");
    instructionsListReference = document.getElementById("instructions");
    seasonsListReference = document.getElementById("seasonsList");

    ingredientReference = document.getElementsByClassName("ingredient");
    numberOfPersonsReference = document.getElementById("numberOfPersons");
    ingredientsTableReference.innerHTML = buildIngredientsTable(mealObject);
    instructionsListReference.innerHTML = buildInstructionsTable(mealObject);
    seasonsListReference.innerHTML = buildSeasonsList(mealObject);
});

function calculateAmount() {

    for (var i = 0; i < mealObject.ingredients.length; i++) {
        var numberOfPersonsValue = numberOfPersonsReference.value;
        var amountReference = document.getElementById("amount" + i);
        var ingredientObject = mealObject.ingredients[i];

        amountReference.innerHTML = (ingredientObject.amount * numberOfPersonsValue).toString();
    }
}

function addIngredientsToShoppingList() {

}

// --------------------------------------------
/*
fetch('',
    {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Beispielprojekt',
            url: 'http://www.example.com',
        })
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });
    */

function buildIngredientsTable(mealObject) {
    var ingredientsTable = "";

    for (i = 0; i < mealObject.ingredients.length; i++) {
        var currentIngredient = mealObject.ingredients[i];
        ingredientsTable += "<tr>" +
            "<td id='amount" + i + "'>" + currentIngredient.amount + "</td>" +
            "<td id='unit" + i + "'>" + currentIngredient.unit + "</td>" +
            "<td id=" + i + "'singleIngredient'>" + currentIngredient.name + "</td>" +
            "</tr>";
    }

    return ingredientsTable; // sonst kommt nichts zurück :)
}

function buildInstructionsTable(mealObject) {
    var instructionsList = "";

    instructionsList += "<ol>";

    for (var i = 0; i < mealObject.steps.length; i++) {
        var currentStep = mealObject.steps[i];
        instructionsList +=
            "<li>" +
            "<ul>" + currentStep + "</ul>";
    }
    instructionsList += "</ol>";
    return instructionsList;
}

function buildSeasonsList(mealObject) {
    var seasonsList = "";

    for (var i = 0; i < mealObject.seasons.length; i++) {
        var currentSeason = mealObject.seasons[i];
        if (i === mealObject.seasons.length - 1) {
            seasonsList += currentSeason;
        } else {
            seasonsList += currentSeason + ", ";
        }
    }
    return seasonsList;
}