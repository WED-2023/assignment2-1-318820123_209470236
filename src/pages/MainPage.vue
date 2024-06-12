<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="columns">
      <div class="left-column">
        <h2>Explore this recipes</h2>
        <RecipePreview
          v-for="(recipe, index) in randomRecipes"
          :key="index"
          :recipe="recipe"
        />
        <button @click="fetchRandomRecipes" class="get-recipes-button">Get New Recipes</button>
      </div>
      <div class="right-column">
        <!-- תוכן נוסף לעמודה הימנית יטופל בהמשך -->
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
</template>

<script>
import RecipePreview from "../components/RecipePreview";
import RecipePreviewList from "../components/RecipePreviewList";

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
    async fetchRandomRecipes() {
      try {
        const response = await fetch('https://www.mako.co.il/food-recipes/recipes_column-bake-off-israel-recipes?Partner=blockscomp');
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const recipes = Array.from(doc.querySelectorAll('.recipe-item')).map(recipe => ({
          title: recipe.querySelector('.recipe-title').textContent.trim(),
          url: recipe.querySelector('.recipe-title a').href,
          image: recipe.querySelector('img').src,
          description: recipe.querySelector('.recipe-description').textContent.trim(),
          time: recipe.querySelector('.recipe-time').textContent.trim(),
          popularity: recipe.querySelector('.recipe-popularity').textContent.trim(),
          ingredients: Array.from(recipe.querySelectorAll('.recipe-ingredients li')).map(li => li.textContent.trim())
        }));
        this.randomRecipes = this.getRandomRecipes(recipes, 3);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    },
    getRandomRecipes(recipes, count) {
      const shuffled = recipes.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
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
}

.left-column, .right-column {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
