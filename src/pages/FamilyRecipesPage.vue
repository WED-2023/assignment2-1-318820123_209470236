<template>
  <div class="background">
    <div class="container">
      <h1 class="title">My Family Recipes</h1>
      <div class="recipes-list">
        <FullRecipe
          v-for="(recipe, index) in familyRecipes"
          :key="index"
          :recipe="recipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FullRecipe from '../components/FullRecipe.vue';

export default {
  name: 'FamilyRecipesPage',
  components: {
    FullRecipe
  },
  data() {
    return {
      familyRecipes: [
        {
          title: "Kahi (קאאי)",
          image: require('@/assets/kahi.jpg'),
          ingredients: [
            "1 kg flour",
            "5 tablespoons oil",
            "1/4 teaspoon salt",
            "500 ml water",
            "1/4 teaspoon yeast"
          ],
          instructions: [
            "Mix all the ingredients in a large bowl until you get a uniform mixture.",
            "Form dough balls and roll each piece thinly.",
            "Spread butter on each dough piece and fold until you achieve a square of desired size, typically the size of the pan.",
            "Heat butter in a pan over medium heat.",
            "Fry the dough until golden brown on both sides.",
            "Remove from the pan onto a plate and serve with sugar sprinkled on top."
          ],
          servings: 9
        },
        {
          title: "Beef Patties with Potatoes",
          ingredients: [
            "500g ground beef",
            "1 large onion, chopped",
            "2 medium potatoes, grated",
            "2 eggs",
            "3 tablespoons breadcrumbs",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "1 teaspoon cumin"
          ],
          instructions: [
            "Mix all the ingredients in a large bowl until you get a uniform mixture.",
            "Form small patties with your hands.",
            "Heat olive oil in a large skillet and fry the patties on both sides until golden and cooked through.",
            "Serve hot with a side of potatoes or vegetable salad."
          ],
          servings: 4
        },
        {
          title: "Pasta with Tomato and Basil Sauce",
          ingredients: [
            "500g penne pasta",
            "2 tablespoons olive oil",
            "3 garlic cloves, chopped",
            "5 tomatoes, grated",
            "1 tablespoon tomato paste",
            "A handful of fresh basil leaves",
            "Salt and pepper to taste",
            "1/2 cup grated Parmesan cheese"
          ],
          instructions: [
            "Cook the pasta according to the package instructions and drain.",
            "Heat olive oil in a large skillet and sauté the chopped garlic until golden.",
            "Add the grated tomatoes and tomato paste and cook over medium heat for 10 minutes.",
            "Add the basil leaves, salt, and pepper, and cook for another 2 minutes.",
            "Mix the sauce with the cooked pasta and sprinkle the grated Parmesan cheese on top.",
            "Serve hot."
          ],
          servings: 4
        },
        {
          title: "Baked Cheesecake",
          ingredients: [
            "500g cream cheese",
            "1 cup sugar",
            "4 eggs",
            "1 teaspoon vanilla extract",
            "1 tablespoon flour",
            "1/2 cup heavy cream",
            "1/2 cup biscuit crumbs"
          ],
          instructions: [
            "Preheat the oven to 180°C (350°F).",
            "In a large bowl, mix the cream cheese with the sugar until smooth.",
            "Add the eggs one at a time, mixing well after each addition.",
            "Add the vanilla extract and flour and mix well.",
            "Add the heavy cream and mix until everything is well combined.",
            "Spread the biscuit crumbs at the bottom of a baking pan and pour the cheese mixture on top.",
            "Bake in the preheated oven for 50-60 minutes until the cake is set and golden.",
            "Let cool before serving."
          ],
          servings: 8
        }
      ]
    };
  }
};
</script>

<style scoped>
.background {
  background-image: url("~@/assets/backGround.jpg");
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
  width: 100%;
}

.title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color: #981a51;
  margin-bottom: 20px;
  text-align: center;
}

.recipes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
