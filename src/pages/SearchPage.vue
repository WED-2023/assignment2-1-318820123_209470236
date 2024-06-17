<template>
  <div class="background">
  <div class="search-page">
    <h1 class="title">Search Recipes</h1>
    <div class="search-bar">
      <input v-model="query" @input="searchRecipes" placeholder="Search for recipes..." />
      <select v-model="resultsLimit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
    <div class="filters">
      <select v-model="selectedCuisine">
        <option value="">All Cuisines</option>
        <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
      </select>
      <select v-model="selectedDiet">
        <option value="">All Diets</option>
        <option v-for="diet in diets" :key="diet" :value="diet">{{ diet }}</option>
      </select>
      <select v-model="selectedIntolerance">
        <option value="">All Intolerances</option>
        <option v-for="intolerance in intolerances" :key="intolerance" :value="intolerance">{{ intolerance }}</option>
      </select>
    </div>
    <div class="results">
      <p v-if="recipes.length === 0">No results found.</p>
      <RecipePreviewList v-else :title="'Search Results'" :recipes="recipes" :amountToShow="resultsLimit" />
    </div>
  </div>
</div>
</template>

<script>
import RecipePreviewList from '@/components/RecipePreviewList.vue';
import { mockGetRecipesPreview, mockGetLastViewedRecipes } from '../services/recipes';

export default {
  name: 'RecipeSearchPage',
  components: {
    RecipePreviewList
  },
  data() {
    return {
      query: '',
      resultsLimit: 5,
      selectedCuisine: '',
      selectedDiet: '',
      selectedIntolerance: '',
      recipes: [],
      cuisines: ['Italian', 'Chinese', 'American', 'Mexican'],
      diets: ['Vegetarian', 'Vegan', 'Gluten Free', 'Ketogenic'],
      intolerances: ['Dairy', 'Egg', 'Gluten', 'Peanut']
    };
  },
  methods: {
    searchRecipes() {
      // Use the mock function to get recipes
      const response = mockGetRecipesPreview(this.resultsLimit);
      this.recipes = response.data.recipes;
    }
  },
  created() {
    const response = mockGetLastViewedRecipes();
    this.recipes = response.data.recipes;
  }
};
</script>

<style scoped>

.search-page {
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar input {
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
}

.search-bar select {
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
}

.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filters select {
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
