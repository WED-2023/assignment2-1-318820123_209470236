<template>
  <div>
    <div class="right-column">
      <template v-if="!$root.store.username">
        <div class="guest-section">
        </div>
      </template>
      <template v-else>
        <!-- {{ $root.store.username }}: <button @click="Logout">Logout</button>| -->
      </template>
    </div>
    <div class="container">
      <h1 class="title">Main Page</h1>
      <template v-if="!$root.store.username">
        <div class="guest-section">

          <router-link :to="{ name: 'register' }" style="margin-top: 200px; margin-right: 840px;">Register</router-link>
          <router-link :to="{ name: 'login' }" style="margin-top: 10px; margin-right: 850px;">Login</router-link>
        </div>
      </template>
      <template v-else>
        <!-- {{ $root.store.username }}: <button @click="Logout">Logout</button>| -->
      </template>
      <div class="columns">
        <div class="left-column">
          <h2 class="explore-title">Explore these recipes</h2>
          <div class="recipes-row">
            <RecipePreview
              v-for="(recipe, index) in randomRecipes"
              :key="index"
              :recipe="recipe"
            />
          </div>
          <button @click="fetchRandomRecipes" class="get-recipes-button">Get New Recipes</button>
        </div>
      </div>
      <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
      {{ !$root.store.username }}
      <RecipePreviewList
        title="Last Viewed Recipes"
        :class="{
          RandomRecipes: true,
          blur: !$root.store.username,
          center: true
        }"
        disabled
      ></RecipePreviewList>
    </div>
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import RecipePreviewList from "../components/RecipePreviewList";
import { mockGetRecipesPreview } from "../services/recipes";

export default {
  components: {
    RecipePreview,
    RecipePreviewList
  },
  data() {
    return {
      randomRecipes: []
    };
  },
  methods: {
    fetchRandomRecipes() {
      console.log('Fetching new recipes...');
      const response = mockGetRecipesPreview(3);
      console.log('Received recipes:', response.data.recipes);
      const recipes = response.data.recipes.map(recipe => ({
        title: recipe.title,
        description: recipe.description,
        date: recipe.date,
        time: recipe.time,
        image: recipe.image,
        url: recipe.url
      }));
      this.randomRecipes = recipes;
      console.log('Updated randomRecipes:', this.randomRecipes);
    }
  },
  mounted() {
    this.fetchRandomRecipes();
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;
}

.left-column, .right-column {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.right-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.guest-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
}

.register-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 300px;
  margin-right: 850px;
  font-size: 16px;
  text-align: center;
}


.login-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  margin-right: 860px;
}

.register-button:hover, .login-button:hover {
  background-color: #0056b3;
}

.recipes-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.explore-title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-left: 20px;
}

.get-recipes-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.get-recipes-button:hover {
  background-color: #0056b3;
}
</style>
