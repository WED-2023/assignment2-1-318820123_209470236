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
        <img v-if="recipe.vegetarian" src="@/assets/vegetarian.jpg" alt="Vegetarian" class="icon" />
        <img v-if="recipe.vegan" src="@/assets/vegan.jpg" alt="Vegan" class="icon" />
        <img v-if="recipe.glutenFree" src="@/assets/glutenfree.jpg" alt="Gluten Free" class="icon" />
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
    }
  },
  methods: {
    viewRecipe() {
      this.$router.push({ name: 'recipe', params: { id: this.recipe.id } });
    },
    toggleFavorite() {
      this.recipe.favorited = !this.recipe.favorited;
      this.updateFavorites();
      this.$emit('toggle-favorite', this.recipe);
    },
    updateFavorites() {
      let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      if (this.recipe.favorited) {
        if (!favorites.some(r => r.id === this.recipe.id)) {
          favorites.push(this.recipe);
        }
      } else {
        favorites = favorites.filter(r => r.id !== this.recipe.id);
      }
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
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
  max-width: 300px; /* Max width added */
}

.recipe-image-container {
  position: relative;
  cursor: pointer;
}

.recipe-image {
  width: 300px; /* Fixed width */
  height: 200px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
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
  font-size: 18px; /* Font size increased */
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.icons {
  margin-bottom: 10px;
}

.icon {
  width: 32px; /* Adjust the size of the icons */
  height: 32px;
  margin: 0 5px;
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
  width: 32px; /* Adjust the size of the favorite icon */
  height: 32px;
  cursor: pointer;
}

.favorite-icon:hover {
  opacity: 0.7;
}
</style>
