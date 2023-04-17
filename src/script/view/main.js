import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('#mealList');

  const onButtonSearchClicked = () => {
    DataSource.searchMeal(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = results => {
    mealListElement.innerHTML = '';
    results.forEach( (meal) => {
      const name = meal.strMeal;
      const country = meal.strArea;
      const category = meal.strCategory;
      const tag = meal.strTags;
      const Picture = meal.strMealThumb;
      const instruction = meal.strInstructions;

      const {strIngredient1, 
        strIngredient2, 
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10 } = meal;
      

      const mealElement = document.createElement('div');
      mealElement.setAttribute('class', 'content');

      mealElement.innerHTML = mealElement.innerHTML = `
        <div class="card">
          <img class="card-img" src="${Picture}" alt="Meal Pic">
          <div class="meal-info">
              <h2>${name}</h2>
              <hr>
                <p>
                Category :${category}<br>
                Country :${country}<br>
                Tags :${tag}
                </p>
          </div>
          <button id="get-recipe">Get Recipe</button>
        </div>
      `;

      const getRecipeButton = mealElement.querySelector('#get-recipe');
      getRecipeButton.addEventListener('click', () => {
        showModal(instruction, name, 
          strIngredient1, 
          strIngredient2, 
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10);
      });

      mealListElement.appendChild(mealElement);
    });

  };

  const showModal = (instruction, name, 
    strIngredient1,
    strIngredient2, 
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10) => {
    
    const modalElement = document.createElement('div');
    modalElement.setAttribute('class', 'modal');

   
    const modalContent = `
      <div class="modal-header">
        <button class="close">X</button>
      </div>
      <div class="modal-body">
      <h3>${name}</h3>
      <hr>
      <h4>Ingredients :</h4>
      <ol>
      <li>${strIngredient1}</li>
      <li>${strIngredient2}</li>
      <li>${strIngredient3}</li>
      <li>${strIngredient4}</li>
      <li>${strIngredient5}</li>
      <li>${strIngredient6}</li>
      <li>${strIngredient7}</li>
      <li>${strIngredient8}</li>
      <li>${strIngredient9}</li>
      <li>${strIngredient10}</li>
      </ol>
      <p></p>
      <h4>instruction :</h4>  
      <p>${instruction}</p>
      </div>
    `;

    
    modalElement.innerHTML = modalContent;

    
    document.body.appendChild(modalElement);

    
    const closeButton = modalElement.querySelector('.close');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modalElement);
    });
  };

  const fallbackResult = message => {
    mealListElement.innerHTML = '';
    mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;