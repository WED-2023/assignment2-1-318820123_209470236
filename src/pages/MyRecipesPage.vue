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
          <button @click="deleteRecipe(recipe)" class="delete-button">&times;</button>
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

.container {
  /* padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; */

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #981a51;
}

.recipes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Centers the recipe previews */
  width: 100%;
}

.recipe-wrapper {
  position: relative;
  width: 300px; /* Set a fixed width for the recipe preview */
}

.delete-button {
  position: absolute;
  top: 10px;
  right: 265px;
  background-color: transparent;
  color: #463333;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.delete-button:hover {
  color:  #aaa;
}
</style>
