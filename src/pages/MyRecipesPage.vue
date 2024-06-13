
<template>
    <div class="container">
      <h1 class="title">My Recipes</h1>
      <div class="recipes-list">
        <RecipePreview
          v-for="(recipe, index) in recipes"
          :key="index"
          :recipe="recipe"
          :showDeleteButton="true"
          @delete-recipe="deleteRecipe"
        />
      </div>
    </div>
  </template>
  
  <script>
  import RecipePreview from '../components/RecipePreview.vue';
  
  export default {
    name: 'MyRecipesPage',
    components: {
      RecipePreview
    },
    data() {
      return {
        recipes: []
      };
    },
    created() {
      this.loadRecipes();
    },
    methods: {
      loadRecipes() {
        this.recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      },
      deleteRecipe(recipe) {
        this.recipes = this.recipes.filter(r => r !== recipe);
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .recipes-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  