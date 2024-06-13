<template>
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Submit Your Recipe</h2>
        <form @submit.prevent="submitRecipe">
          <div class="form-group">
            <label for="recipe-name">שם המתכון</label>
            <input type="text" id="recipe-name" v-model="recipeName" required>
          </div>
          <div class="form-group">
            <label for="ingredients">רשימת מרכיבים וכמות</label>
            <textarea id="ingredients" v-model="ingredients" required></textarea>
          </div>
          <div class="form-group">
            <label for="servings">מספר מנות</label>
            <input type="text" id="servings" v-model="servings" required>
          </div>
          <div class="modal-buttons">
            <button type="button" @click="closeModal">Cancel</button>
            <button type="submit">OK</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewRecipe',
    data() {
      return {
        recipeName: '',
        ingredients: '',
        servings: '',
        visible: true
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      submitRecipe() {
        alert(`Recipe submitted: ${this.recipeName}, ${this.ingredients}, ${this.servings}`);
        this.closeModal();
      }
    },
    mounted() {
      this.visible = true;
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    direction: rtl; /* Right-to-Left direction for Hebrew */
  }
  
  .close {
    color: #aaa;
    float: left; /* Change to left for RTL */
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .form-group {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .form-group label {
    margin-left: 10px; /* Space between label and input */
    white-space: nowrap; /* Prevent label from breaking into multiple lines */
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%; /* Ensure all inputs are the same width */
    padding: 8px;
    box-sizing: border-box;
  }
  
  .form-group textarea {
    height: 100px; /* Increase height for textarea */
  }
  
  .modal-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  </style>
  