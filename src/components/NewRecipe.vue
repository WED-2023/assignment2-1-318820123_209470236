<template>
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Submit Your Name</h2>
        <form @submit.prevent="submitName">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required>
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
        name: '',
        visible: true
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      submitName() {
        alert(`Name submitted: ${this.name}`);
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
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  </style>
  