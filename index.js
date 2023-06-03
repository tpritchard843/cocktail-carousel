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
        console.log(data.drinks);

        if (data.drinks.length < 2) {
            document.querySelector('.drink-name').innerText = data.drinks[0].strDrink; 
            document.querySelector('.instructions-text').innerText = data.drinks[0].strInstructions;
            document.querySelector('.drink-img').src = data.drinks[0].strDrinkThumb;
        } else{
            const renderDrinkInfo = async () => {
                //high level stuff gets executed synchronously
                //Render first cocktail card to the DOM
                document.querySelector('.drink-name').innerText = data.drinks[0].strDrink; 
                document.querySelector('.instructions-text').innerText = data.drinks[0].strInstructions;
                document.querySelector('.drink-img').src = data.drinks[0].strDrinkThumb;

                //Loop through the remaining drinks in the array at 5s intervals
                for (let i = 1; i < data.drinks.length; i++) {
                    await delay(3000);

                    document.querySelector('.drink-name').innerText = data.drinks[i].strDrink; 
                    document.querySelector('.instructions-text').innerText = data.drinks[i].strInstructions;
                    document.querySelector('.drink-img').src = data.drinks[i].strDrinkThumb;
    
                    console.log(i, data.drinks[i]);
                }
            }
            renderDrinkInfo();
        } 
    })
}

function displayDrinkModal() {
    document.querySelector('#cocktail-modal').classList.remove('hidden');
}