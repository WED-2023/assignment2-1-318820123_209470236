<template>
  <div id="app">
    <div id="nav" class="d-flex justify-content-between align-items-center nav-custom">
      <!-- Navigation links -->
      <b-nav pills class="flex-grow-1 nav-links">
        <b-nav-item :to="{ name: 'main' }">Vue Recipes</b-nav-item>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        <!-- Show Register/Login if user is not logged in -->
        <template v-if="!$root.store.username">
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
        </template>
        <!-- Show Add New Recipe and Personal Area dropdown if user is logged in -->
        <template v-else>
          <b-nav-item :to="{ name: 'addNewRecipes' }">Add new recipe</b-nav-item>
          <b-nav-item-dropdown text="Personal Area" right>
            <b-dropdown-item :to="{ name: 'favorites' }">My favorite recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'myRecipes' }">My recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'familyRecipes' }">My family recipes</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-nav>
      <!-- User greeting and logout button -->
      <div class="nav-user d-flex align-items-center">
        <!-- Show "Hello Guest!" if user is not logged in -->
        <template v-if="!$root.store.username">
          <span>Hello Guest!</span>
        </template>
        <!-- Show logout button and username if user is logged in -->
        <template v-else>
          <b-nav-item @click="Logout" class="nav-link logout-button">Logout</b-nav-item>
          <span class="separator"></span>
          <span>{{ $root.store.username }}</span>
        </template>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // Logout method
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

/* Main app styling */
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  min-height: 100vh;
}

/* Navigation bar styling */
#nav {
  padding: 30px;
  background-color: rgb(85, 73, 48); /* Background color for the navigation bar */
}

/* Navigation links and user info styling */
#nav a, 
#nav .nav-user span, 
#nav .nav-links .nav-link {
  font-weight: bold;
  color: #f3eada; /* Uniform text color */
}

#nav a.router-link-exact-active {
  color: #f3eada; /* Active link color */
}

/* Custom styles for the navigation bar */
.nav-custom {
  background-color: rgb(85, 73, 48); /* Background color for the navigation bar */
}

/* Navigation links styling */
.nav-links .nav-link {
  color: #f3ebda !important; /* Uniform text color for nav links */
}

/* User info styling */
.nav-user span {
  color: #13bde3; /* Uniform text color for username/guest */
}

/* Dropdown menu styling */
.nav-custom .dropdown-menu {
  background-color: rgb(85, 73, 48); /* Background color for the dropdown menu */
  border: 3px solid #f3ebda; /* White border for the dropdown menu */
}

/* Dropdown items styling */
.nav-custom .dropdown-item {
  color: #f3eada; /* Uniform text color for dropdown items */
}

/* Dropdown items hover effect */
.nav-custom .dropdown-item:hover {
  background-color: rgb(158, 122, 75); /* Slightly darker color on hover */
}

/* Navigation links hover effect */
.nav-links .nav-link:hover {
  background-color: #f8dec0ce; /* Hover background color */
  color: #000000 !important; /* Hover text color */
}

/* Logout button styling */
.logout-button {
  color: #f3eada !important;
  cursor: pointer;
  margin-right: -30px; /* Space between logout button and separator */
}

/* Separator styling */
.separator {
  border-left: 1px solid #f3eada; /* Separator line */
  height: 30px; /* Height of the separator line */
  margin: 0 20px; /* Equal margin on both sides of the separator line */
  display: inline-block;
  vertical-align: middle;
}
</style>
