//The user will enter a coktail. Our program will fetch cocktail name, photo, instructions, and ingredients and place them the DOM.

document.querySelector('button').addEventListener('click', getDrink);

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
                for (let i = 0; i < data.drinks.length; i++) {
                    document.querySelector('.drink-name').innerText = data.drinks[i].strDrink; 
                    document.querySelector('.instructions-text').innerText = data.drinks[i].strInstructions;
                    document.querySelector('.drink-img').src = data.drinks[i].strDrinkThumb;
                    
                    await delay(5000);
    
                    document.querySelector('.drink-name').innerText = data.drinks[i].strDrink; 
                    document.querySelector('.instructions-text').innerText = data.drinks[i].strInstructions;
                    document.querySelector('.drink-img').src = data.drinks[i].strDrinkThumb;
    
                    console.log(data.drinks[i]);
                }
            }
            renderDrinkInfo();
        } 
    })
}