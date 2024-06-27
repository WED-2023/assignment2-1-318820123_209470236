<template>
  <div class="background">
    <div class="container">
      <h1 class="title">Favorite Recipes</h1>
      <div class="recipes-list">
        <RecipePreview
          v-for="(recipe, index) in favoriteRecipes"
          :key="index"
          :recipe="recipe"
          @toggle-favorite="removeFromFavorites"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from '../components/RecipePreview.vue';

export default {
  name: 'FavoriteRecipesPage',
  components: {
    RecipePreview
  },
  data() {
    return {
      favoriteRecipes: []
    };
  },
  created() {
    this.loadFavoriteRecipes();
  },
  methods: {
    loadFavoriteRecipes() {
      this.favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    },
    removeFromFavorites(recipe) {
      this.favoriteRecipes = this.favoriteRecipes.filter(r => r.id !== recipe.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(this.favoriteRecipes));
    }
  }
};
</script>

<style scoped>


.container {
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%; /* Adjusts the width of the container */
  max-width: 1200px; /* Maximum width of the container */
  margin-top: 20px; /* Adjust the margin to move it closer to the top */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content horizontally */
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #685555;
  font-size: 2.5rem; /* Adjust the font size */
}

.recipes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Aligns the recipe previews to the center */
  width: 100%;
}

.recipe-preview {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 300px; /* Adjust the maximum width of the recipe previews */
}
</style>
