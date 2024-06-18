<template>
  <div class="background">
    <div class="container">
      <div v-if="recipe">
        <div class="recipe-header mt-3 mb-4">
          <h1 class="title">{{ recipe.title }}</h1>
          <img :src="recipe.image" class="center" />
        </div>
        <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped">
              <div class="mb-3">
                <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
                <div>Likes: {{ recipe.aggregateLikes }} likes</div>
                <div class="icons">
                  <img v-if="recipe.vegetarian" src="@/assets/vegetarian.jpg" alt="Vegetarian" class="icon" v-b-tooltip="'Vegetarian'" />
                  <img v-if="recipe.vegan" src="@/assets/vegan.jpg" alt="Vegan" class="icon" v-b-tooltip="'Vegan'" />
                  <img v-if="recipe.glutenFree" src="@/assets/glutenfree.jpg" alt="Gluten Free" class="icon" v-b-tooltip="'Gluten Free'" />
                </div>
              </div>
              Ingredients:
              <ul>
                <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                  {{ r.original }}
                </li>
              </ul>
            </div>
            <div class="wrapped">
              Instructions:
              <ol>
                <li v-for="s in recipe._instructions" :key="s.number">
                  {{ s.step }}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="status">
          <img :src="favoriteIcon" alt="Favorite" class="favorite-icon" @click="toggleFavorite" @mouseover="favoriteHover = true" @mouseleave="favoriteHover = false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";

export default {
  data() {
    return {
      recipe: null,
      favoriteHover: false
    };
  },
  computed: {
    favoriteIcon() {
      if (this.favoriteHover || (this.recipe && this.recipe.favorited)) {
        return require('@/assets/heart_filled.png');
      } else {
        return require('@/assets/heart_empty.png');
      }
    },
    isLoggedIn() {
      return this.$root.store.username;
    }
  },
  methods: {
    toggleFavorite() {
      if (!this.isLoggedIn) {
        alert('Please log in to add favorites');
        return;
      }
      
      this.recipe.favorited = !this.recipe.favorited;
      this.updateFavorites();
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
          });
        }
      } else {
        favorites = favorites.filter(r => r.id !== this.recipe.id);
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
  },
  async created() {
    try {
      const recipeId = this.$route.params.id;
      const response = await mockGetRecipeFullDetails(recipeId);

      const { analyzedInstructions, instructions, extendedIngredients, aggregateLikes, readyInMinutes, image, title, vegetarian, vegan, glutenFree } = response.data.recipe;

      const _instructions = analyzedInstructions
        .map(fstep => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      this.recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        vegetarian,
        vegan,
        glutenFree
      };

      // Load favorite status from local storage
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      this.recipe.favorited = favorites.some(r => r.id === this.recipe.id);

    } catch (error) {
      console.log(error);
      this.$router.replace("/NotFound");
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url('https://static.vecteezy.com/system/resources/thumbnails/008/660/558/small_2x/organic-food-background-hand-drawn-concept-free-vector.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
} 
.container {
  max-width: 1500px;
  margin: auto;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #685555;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left; /* Ensure the container text is left-aligned */
}

.title {
  text-align: center;
  font-size: 2.5em; /* Increase the title size */
  margin-bottom: 20px; /* Add some space below the title */
}

.recipe-body {
  font-size: 1.2em; /* Increase the body text size */
}

.wrapper {
  display: flex;
}

.wrapped {
  width: 50%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
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

.status {
  margin-top: 20px;
  text-align: center;
}
</style>
