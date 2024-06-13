<template>
  <div class="background">
    <div class="container">
      <h1 class="title">My Family Recipes</h1>
      <div class="recipes-list">
        <RecipePreview
          v-for="(recipe, index) in familyRecipes"
          :key="index"
          :recipe="recipe"
        />
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import RecipePreview from '../components/RecipePreview.vue';
  
  export default {
    name: 'FamilyRecipes',
    components: {
      RecipePreview
    },
    data() {
      return {
        familyRecipes: []
      };
    },
    created() {
      this.loadFamilyRecipes();
    },
    methods: {
      loadFamilyRecipes() {
        this.familyRecipes = JSON.parse(localStorage.getItem('familyRecipes')) || [];
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .title {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 500px;
  }
  .recipes-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .background {
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/008/660/558/small_2x/organic-food-background-hand-drawn-concept-free-vector.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
  </style>
  