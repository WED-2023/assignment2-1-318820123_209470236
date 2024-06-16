<template>
  <div class="background">
    <div class="container">
      <h1 class="title">My Recipes</h1>
      <div class="recipes-list">
        <div class="recipe-wrapper" v-for="(recipe, index) in recipes" :key="index">
          <RecipePreview
            :recipe="recipe"
            @toggle-favorite="toggleFavorite"
          />
          <button @click="deleteRecipe(recipe)" class="delete-button">Delete</button>
        </div>
      </div>
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
      this.updateFavorites();
    },
    toggleFavorite(recipe) {
      recipe.favorited = !recipe.favorited;
      this.updateFavorites();
    },
    updateFavorites() {
      let favorites = this.recipes.filter(r => r.favorited);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/008/660/558/small_2x/organic-food-background-hand-drawn-concept-free-vector.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligns the container to the top */
  padding: 20px;
}

.container {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%; /* Adjusts the width of the container */
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
}

.recipes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start; /* Aligns the recipe previews to the left */
  width: 100%;
}

.recipe-wrapper {
  position: relative;
}

.delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
