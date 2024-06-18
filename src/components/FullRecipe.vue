<template>
  <div class="recipe">
    <div class="favorite-icon-container">
      <img :src="favoriteIcon" alt="Favorite" class="favorite-icon" @click="toggleFavorite" @mouseover="favoriteHover = true" @mouseleave="favoriteHover = false"/>
    </div>
    <div class="recipe-content">
      <div class="recipe-details">
        <h2>{{ recipe.title }}</h2>
        <div class="icons">
          <img v-if="recipe.vegetarian" src="@/assets/vegetarian.jpg" alt="Vegetarian" class="icon" v-b-tooltip="'Vegetarian'" />
          <img v-if="recipe.vegan" src="@/assets/vegan.jpg" alt="Vegan" class="icon" v-b-tooltip="'Vegan'" />
          <img v-if="recipe.glutenFree" src="@/assets/glutenfree.jpg" alt="Gluten Free" class="icon" v-b-tooltip="'Gluten Free'" />
        </div>
        <h3>Ingredients:</h3>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
        </ol>
        <p>Number of dishes: {{ recipe.servings }}</p>
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
  },
  data() {
    return {
      isLoggedIn: false,
      favoriteHover: false,
    };
  },
  computed: {
    favoriteIcon() {
      if (this.favoriteHover || this.recipe.favorited) {
        return require('@/assets/heart_filled.png');
      } else {
        return require('@/assets/heart_empty.png');
      }
    }
  },
  methods: {
    toggleFavorite() {
      if (!this.isLoggedIn) return; // Prevent non-logged in users from toggling favorites
      this.recipe.favorited = !this.recipe.favorited;
      this.updateFavorites();
      this.$emit('toggle-favorite', this.recipe);
    },
    updateFavorites() {
      let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      if (this.recipe.favorited) {
        if (!favorites.some(r => r.id === this.recipe.id)) {
          favorites.push({
            id: this.recipe.id,
            title: this.recipe.title,
            image: this.recipe.image,
            vegetarian: this.recipe.vegetarian,
            vegan: this.recipe.vegan,
            glutenFree: this.recipe.glutenFree,
            readyInMinutes: this.recipe.readyInMinutes,
            aggregateLikes: this.recipe.aggregateLikes,
            servings: this.recipe.servings
          });
        }
      } else {
        favorites = favorites.filter(r => r.id !== this.recipe.id);
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
  },
  created() {
    // Check if user is logged in (example implementation)
    this.isLoggedIn = !!localStorage.getItem('userToken'); // Replace with actual login check
  }
};
</script>

<style scoped>
.recipe {
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.favorite-icon-container {
  position: absolute;
  top: 20px;
  left: 20px;
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

.icons {
  margin-bottom: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 0 5px;
  cursor: pointer;
}

.favorite-icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.favorite-icon:hover {
  opacity: 0.7;
}
</style>
