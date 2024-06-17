<template>
    <div class="recipe">
      <div class="recipe-content">
        <div class="recipe-details">
          <h2>{{ recipe.title }}</h2>
          <h3>Ingredients:</h3>
          <ul>
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
          </ul>
          <h3>Instructions:</h3>
          <ol>
            <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
          </ol>
          <p>number of dishes: {{ recipe.servings }}</p>
        </div>
        <img :src="recipe.image" class="recipe-image"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FullRecipe',
    props: {
      recipe: Object
    }
  }
  </script>
  
  <style scoped>
  .recipe {
    background: rgba(255, 255, 255, 0.8); /* לבן שקוף */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .recipe-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
  
  .recipe-details {
    flex: 1;
  }
  
  .recipe-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-left: 20px;
  }
  </style>
  