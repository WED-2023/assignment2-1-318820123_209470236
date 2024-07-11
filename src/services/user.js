// // src/services/user.js
import axios from 'axios';

const API_URL = 'http://localhost:80'; // Adjust the URL according to your backend server configuration

export async function addFavorite(recipeId) {
  try {
    const response = await axios.post(`${API_URL}/users/favorites`, 
      { recipeId },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

export async function removeFavorite(recipeId) {
  try {
    const response = await axios.delete(`${API_URL}/users/favorites`, 
      { 
        data: { recipeId },
        withCredentials: true
      }
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

export async function getFavoriteRecipes() {
  try {
    const response = await axios.get(`${API_URL}/users/favorites`, 
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

export async function createRecipe(recipeData) {
  try {
    const response = await axios.post(`${API_URL}/users/createARecipe`, recipeData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}