//The user will enter a cocktail or drink type to the searchbar. Our program will fetch cocktail name, photo, instructions, and ingredients and place them the DOM.

document.querySelector('button').addEventListener('click', getDrink);
document.querySelector('button').addEventListener('click', displayDrinkModal);

function getDrink() {
    let drink = document.querySelector('input').value;

    const delay = (time) => {
        return new Promise ((resolve) => setTimeout(resolve,time));
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        console.log(data.drinks); //array of drinks in the category the user searches
            const renderDrinkInfo = async () => {
            //Loop through the drinks in the array at 5s intervals
                for (let i = 0; i < data.drinks.length; i++) {
                    document.querySelector('.drink-name').innerText = data.drinks[i].strDrink; 
                    document.querySelector('.instructions-text').innerText = data.drinks[i].strInstructions;
                    document.querySelector('.drink-img').src = data.drinks[i].strDrinkThumb;
                    
                    console.log(i, data.drinks[i]);
                    await delay(5000);
                }
            }
            renderDrinkInfo();
    })
}

function displayDrinkModal() {
    document.querySelector('#cocktail-modal').classList.remove('hidden');
}