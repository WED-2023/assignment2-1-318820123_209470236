const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./pages/MainPage"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },

  {
    path: "/my-recipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipesPage.vue"),
  }, 
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("./pages/AboutPage"),
  // },

  {
    path: "/recipe",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component:  () => import("./pages/NotFoundPage"),
  },

  
];

export default routes;