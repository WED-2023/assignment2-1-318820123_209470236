// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";



import axios from 'axios';

const API_URL = 'http://localhost:80';


export async function fetchRandomRecipesFromServer() {
  try {
    const response = await axios.get(`${API_URL}/recipes/recipe/random`, {
      params: { number: 3 },
      withCredentials: true
    });
    return { data: { recipes: response.data } };
  } catch (error) {
    console.error('Error fetching random recipes:', error);
    return { data: { recipes: [] } };
  }
}


export async function getRecipeById(recipeId) {
  try {
    const response = await axios.get(`${API_URL}/recipes/${recipeId}`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    throw error;
  }
}


export function mockGetRecipesPreview(amount = 2) {
  // Check if the requested amount is greater than the available recipes
  let actualAmount = Math.min(amount, recipe_preview.length);
  
  // Select the specified number of recipes from the array
  let selectedRecipes = recipe_preview.slice(0, actualAmount);
  
  return { data: { recipes: selectedRecipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return { data: { recipe: recipe_full_view } };
}

export function mockGetLastViewedRecipes(amount = 3) {
  // Mocked response for the last viewed recipes
  let actualAmount = Math.min(amount, recipe_preview.length);
  let lastViewedRecipes = recipe_preview.slice(0, actualAmount);
  return { data: { recipes: lastViewedRecipes } };
}



export function mockSearchRecipes(amount = 5) {
  // Check if the requested amount is greater than the available recipes
  let actualAmount = Math.min(amount, recipe_preview.length);
  
  // Select the specified number of recipes from the array
  let selectedRecipes = recipe_preview.slice(0, actualAmount);
  
  return { data: { recipes: selectedRecipes } };
}