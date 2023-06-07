<template>
    <div v-if="showLogin" class="popup-container">
      <div class="popup">
        <h2>Login</h2>
        <form @submit="submitForm">
          <input v-model="username" type="text" placeholder="Username" required/>
          <input v-model="password" type="password" placeholder="Password" required/>
          <button type="submit">Login</button>
        </form>
        <button @click="closeLogin">Close</button>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';

  // Data
  const showLogin = ref(false);
  const username = ref('');
  const password = ref('');

  // Methods
  const closeLogin = () => {
    showLogin.value = false;
  };

  const submitForm = (event) => {
    event.preventDefault();

    // Hier sollte die Logik zur Überprüfung der Anmeldedaten hinzugefügt werden

    console.log(username.value, password.value);

    closeLogin();
  };
  </script>

  <style scoped>
  .popup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .popup {
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
  }
  </style>
