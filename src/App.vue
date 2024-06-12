<template>
  <div id="app">
    <div id="nav" class="d-flex justify-content-between align-items-center nav-custom">
      <b-nav pills class="flex-grow-1 nav-links">
        <b-nav-item :to="{ name: 'main' }">Vue Recipes</b-nav-item>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        <template v-if="!$root.store.username">
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item-dropdown text="Personal Area" right>
            <b-dropdown-item :to="{ name: 'favorites' }">My favorite recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'myRecipes' }">My recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'familyRecipes' }">My family recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'addNewRecipes' }">Add new recipes</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="Logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-nav>
      <div class="nav-user">
        <template v-if="!$root.store.username">
          <span>Hello Guest!</span>
        </template>
        <template v-else>
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

#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  background-color: rgb(85, 73, 48); /* Background color for the navigation bar */
}

#nav a, 
#nav .nav-user span, 
#nav .nav-links .nav-link {
  font-weight: bold;
  color: #f3eada; /* Uniform text color */
}

#nav a.router-link-exact-active {
  color: #f3eada; /* Active link color */
}

.nav-custom {
  background-color: rgb(85, 73, 48); /* Background color for the navigation bar */
}

.nav-links .nav-link {
  color: #f3ebda !important; /* Uniform text color for nav links */
}

.nav-user span {
  color: #13bde3; /* Uniform text color for username/guest */
}

.nav-custom .dropdown-menu {
  background-color: rgb(85, 73, 48); /* Background color for the dropdown menu */
  border: 3px solid #f3ebda; /* White border for the dropdown menu */
}

.nav-custom .dropdown-item {
  color: #f3eada; /* Uniform text color for dropdown items */
}

.nav-custom .dropdown-item:hover {
  background-color: rgb(158, 122, 75); /* Slightly darker color on hover */
}

.nav-links .nav-link:hover {
  background-color: #f8dec0ce; /* Hover background color */
  color: #000000 !important; /* Hover text color */
}
</style>