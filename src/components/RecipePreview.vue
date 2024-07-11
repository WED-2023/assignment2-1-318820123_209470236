<template>
  <div class="recipe-preview">
    <div 
      class="recipe-image-container"
      @click="viewRecipe"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
      <div v-if="hover" class="overlay">
        <span>Click to view</span>
      </div>
    </div>
    <div class="recipe-content">
      <h3 class="recipe-title">{{ recipe.title }}</h3>
      <div class="icons">
        <img v-if="recipe.vegetarian" 
             src="@/assets/vegetarian.jpg" 
             alt="Vegetarian" 
             class="icon" 
             v-b-tooltip="'Vegetarian'" />
        <img v-if="recipe.vegan" 
             src="@/assets/vegan.jpg" 
             alt="Vegan" 
             class="icon" 
             v-b-tooltip="'Vegan'" />
        <img v-if="recipe.glutenFree" 
             src="@/assets/glutenfree.jpg" 
             alt="Gluten Free" 
             class="icon" 
             v-b-tooltip="'Gluten Free'" />
      </div>
      <p class="recipe-meta">
        <strong>Preparation time:</strong> {{ recipe.readyInMinutes }} minutes<br>
        <strong>Likes:</strong> {{ recipe.aggregateLikes }}
      </p>
      <div class="status">
        <span v-if="recipe.viewed" class="viewed">Viewed</span>
        <img 
          :src="favoriteIcon" 
          alt="Favorite" 
          class="favorite-icon" 
          @click="toggleFavorite" 
          @mouseover="favoriteHover = true"
          @mouseleave="favoriteHover = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { addFavorite, removeFavorite } from '../services/user.js';

export default {
  name: "RecipePreview",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
      favoriteHover: false
    };
  },
  computed: {
    favoriteIcon() {
      if (this.favoriteHover || this.recipe.favorited) {
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
    viewRecipe() {
      this.$router.push({ name: 'recipe', params: { id: this.recipe.id } });
    },
    async toggleFavorite() {
      if (!this.isLoggedIn) {
        alert('Please log in to add favorites');
        return;
      }
      
      this.recipe.favorited = !this.recipe.favorited;
      try {
        if (this.recipe.favorited) {
          await addFavorite(this.recipe.id);
        } else {
          await removeFavorite(this.recipe.id);
        }
        this.$emit('toggle-favorite', this.recipe);
      } catch (err) {
        console.error("Failed to toggle favorite:", err);
        alert("Failed to toggle favorite. Please try again.");
      }
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  max-width: 300px;
}

.recipe-image-container {
  position: relative;
  cursor: pointer;
}

.recipe-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.recipe-content {
  padding: 10px;
  text-align: center;
}

.recipe-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
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

.recipe-meta {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

.status {
  margin-bottom: 10px;
}

.viewed {
  display: block;
  color: green;
  font-size: 14px;
  margin-bottom: 5px;
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
