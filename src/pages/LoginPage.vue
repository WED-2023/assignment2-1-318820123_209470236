<template>
  <div class="background">
    <div class="container custom-font">
      <h1 class="title">Login</h1>
      <b-form @submit.prevent="onLogin">
        <b-form-group
          id="input-group-Username"
          label-cols-sm="3"
          label="Username:"
          label-for="Username"
          class="form-group-custom"
        >
          <b-form-input
            id="Username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
            class="form-input-custom"
          ></b-form-input>
          <b-form-invalid-feedback>
            Username is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-Password"
          label-cols-sm="3"
          label="Password:"
          label-for="Password"
          class="form-group-custom"
        >
          <b-form-input
            id="Password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            class="form-input-custom"
          ></b-form-input>
          <b-form-invalid-feedback>
            Password is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          class="mx-auto w-100 form-button-custom"
          >Login</b-button
        >
        <div class="mt-2">
          Do not have an account yet?
          <router-link to="register"> Register in here</router-link>
        </div>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Login failed: {{ form.submitError }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mockLogin } from "../services/auth.js";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        // const response = await this.axios.post(
        //   this.$root.store.server_domain +"/Login",

        //   {
        //     username: this.form.username,
        //     password: this.form.password
        //   }
        // );

        const success = true; // modify this to test the error handling
        const response = mockLogin(this.form.username, this.form.password, "success");

        // console.log(response);
        // this.$root.loggedIn = true;
        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  background-image: url('https://static.vecteezy.com/system/resources/thumbnails/008/660/558/small_2x/organic-food-background-hand-drawn-concept-free-vector.jpg ');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 700px; /* Width of the container */
  height: 400px; /* Height of the container */
  background: rgb(168, 153, 121); /* Pink and red gradient background */
  padding: 40px; /* Increase padding */
  border-radius: 25px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.55rem; /* Increase font size */
}

.custom-font {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  margin-bottom: 30px; /* Increase bottom margin */
  font-size: 2.85rem; /* Increase title font size */
  // font-weight: bold;
}

.form-group-custom {
  font-size: 1.55rem; /* Increase form group font size */
}

.form-input-custom {
  font-size: 1.55rem; /* Increase input font size */
  padding: 10px; /* Increase padding */
}

.form-button-custom {
  font-size: 1.55rem; /* Increase button font size */
  padding: 10px 20px; /* Increase padding */
}

</style>
