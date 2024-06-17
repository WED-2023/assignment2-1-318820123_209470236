// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


export function mockGetRecipesPreview(amount = 2) {
  // Check if the requested amount is greater than the available recipes
  let actualAmount = Math.min(amount, recipe_preview.length);
  
  // Select the specified number of recipes from the array
  let selectedRecipes = recipe_preview.slice(0, actualAmount);
  
  return { data: { recipes: selectedRecipes } };
}


// export function mockGetRecipesPreview(amount = 2) {
//   let recipes = [];
//   for(let i = 0; i < amount; i++){
//     recipes.push(recipe_preview);
//   }
//   return { data: { recipes: recipes } };
// }

export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view } } ;
  }
  
  export function mockGetLastViewedRecipes(amount = 3) {
    // Mocked response for the last viewed recipes
    let actualAmount = Math.min(amount, recipe_preview.length);
    let lastViewedRecipes = recipe_preview.slice(0, actualAmount);
    return { data: { recipes: lastViewedRecipes } };
  }

  export function mockGetRandomRecipes(amount = 3) {
    // Mocked response for random recipes
    let actualAmount = Math.min(amount, recipe_preview.length);
    
    // Shuffle the array to get random elements
    let shuffledRecipes = recipe_preview.sort(() => 0.5 - Math.random());
    
    // Get the first n elements after shuffling
    let randomRecipes = shuffledRecipes.slice(0, actualAmount);
    
    return { data: { recipes: randomRecipes } };
  }
  