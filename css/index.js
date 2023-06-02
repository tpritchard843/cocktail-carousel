//The user will enter a coktail. Our program will fetch cocktail name, photo, instructions, and ingredients and place them the DOM.

document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks);
    })
}