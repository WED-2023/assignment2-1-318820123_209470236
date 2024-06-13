<template>
  <div class="background">
    <div class="container">
      <div class="left-side-container">
        <div class="left-side">
          <RecipePreviewList title="Random Recipes" :recipes="randomRecipes" :amountToShow="numRandomRecipes" />
          <button @click="fetchRandomRecipes" class="form-button-custom">Get New Recipes</button>
        </div>
      </div>
      <div class="right-side-container">
        <div class="right-side">
          <template v-if="!$root.store.username">
            <div class="guest-section">
              <button @click="goToLogin" class="login">Click To Login</button>
              <button @click="goToRegister" class="register">Click To Register</button>
            </div>
          </template>

          <template v-else>
            <div class="user-section">
              <RecipePreviewList title="Last Viewed Recipes" :recipes="lastViewedRecipes" :amountToShow="numLastViewedRecipes" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockGetLastViewedRecipes, mockGetRecipesPreview } from "@/services/recipes";
import RecipePreviewList from "@/components/RecipePreviewList.vue";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      lastViewedRecipes: [],
      randomRecipes: [],
      numRandomRecipes: 3,
      numLastViewedRecipes: 5
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToRegister() {
      this.$router.push({ name: 'register' });
    },
    fetchLastViewedRecipes() {
      if (this.$root.store.username) {
        const response = mockGetLastViewedRecipes();
        this.lastViewedRecipes = response.data.recipes;
      }
    },
    fetchRandomRecipes() {
      const response = mockGetRecipesPreview(3);
      this.randomRecipes = response.data.recipes;
    }
  },
  mounted() {
    this.fetchLastViewedRecipes();
    this.fetchRandomRecipes(); // Load initial random recipes
  }
}
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
  align-items: center;
  padding: 20px;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 20px; /* Added gap for better spacing */
  flex-wrap: nowrap; /* Ensure no wrapping */
}
.left-side-container, .right-side-container {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1 1 auto; /* Flexible width with a base of 48% */
  max-width: 60%;
}
.left-side, .right-side {
  padding: 20px;
}
.guest-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.login, .register {
  display: inline-block;
  padding: 20px 40px; /* Increased padding for bigger buttons */
  background-color: #c8a65d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 20px; /* Increased font size */
  text-align: center;
}
.form-button-custom {
  font-size: 1.55rem;
  padding: 10px 20px;
  border-radius: 11px;
  background-color: #dbcbb3;
  border: 3px solid #6c4e3c;
  color: #6c4e3c;
}
</style>
