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
      <a :href="recipe.url" target="_blank" class="recipe-link">View Recipe</a>
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
  max-width: 200px; /* הוספנו הגבלה לרוחב */
}

.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 100px; /* הוספנו הגבלה לגובה */
}

.recipe-content {
  padding: 5px;
  text-align: center;
}

.recipe-title {
  font-size: 16px; /* הקטנו את הגופן */
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.recipe-description {
  font-size: 12px; /* הקטנו את הגופן */
  color: #555;
  margin-bottom: 5px;
}

.recipe-meta {
  font-size: 10px; /* הקטנו את הגופן */
  color: #777;
  margin-bottom: 5px;
}

.recipe-link {
  display: inline-block;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 12px; /* הקטנו את הגופן */
}

.recipe-link:hover {
  background-color: #0056b3;
}
</style>
