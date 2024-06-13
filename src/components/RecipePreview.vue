<template>
  <div class="recipe-preview">
    <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
    <div class="recipe-content">
      <h3 class="recipe-title">{{ recipe.title }}</h3>
      <p class="recipe-description">{{ recipe.description }}</p>
      <p class="recipe-meta">
        <strong>Published on:</strong> {{ recipe.date }}<br>
        <strong>Time:</strong> {{ recipe.time }}
      </p>
      <button @click="viewRecipe" class="recipe-button">View Recipe</button>
      <button v-if="showDeleteButton" @click="deleteRecipe" class="delete-button">Delete</button>
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
    },
    showDeleteButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    viewRecipe() {
      this.$router.push({ name: 'recipe', params: { id: this.recipe.id } });
    },
    deleteRecipe() {
      this.$emit('delete-recipe', this.recipe);
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
  max-width: 200px; /* Max width added */
  max-width: 200px; /* Max width added */
}

.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 22px;
  max-height: 100px; /* Max height added */
  border-radius: 22px;
  max-height: 100px; /* Max height added */
}

.recipe-content {
  padding: 5px;
  text-align: center;
}

.recipe-title {
  font-size: 16px; /* Font size reduced */
  font-size: 16px; /* Font size reduced */
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.recipe-description {
  font-size: 12px; /* Font size reduced */
  font-size: 12px; /* Font size reduced */
  color: #555;
  margin-bottom: 5px;
}

.recipe-meta {
  font-size: 10px; /* Font size reduced */
  font-size: 10px; /* Font size reduced */
  color: #777;
  margin-bottom: 5px;
}


.recipe-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #c8a65d;
  padding: 10px 20px;
  background-color: #c8a65d;
  color: white;
  text-decoration: none;
  border-radius: 22px;
  font-size: 15px; /* Font size reduced */
  border: 2px solid white; /* To make it more button-like */
}

.recipe-button:hover {
  background-color: #c8a65d;
  color: white;
}

.delete-button {
  display: inline-block;
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>