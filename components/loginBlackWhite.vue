<template>
    <div class="popup-container">
      <div class="popup">
        <form v-if="!authStore.isLoggedIn" @submit.prevent="login" class="flex flex-col">
          <div class="form-control">
            <label class="popup-label" for="email">
              <h1 class="popup-label-text">E-MAIL</h1>
            </label>
            <input
              required
              class="input input-bordered bg-white text-black custom-input-width"
              type="email"
              id="email"
              v-model="email"
            />
          </div>
          <div class="form-control">
            <label class="popup-label" for="password">
              <h1 class="popup-label-text">PASSWORD</h1>
            </label>
            <input
              required
              class="input input-bordered bg-white text-black w-full"
              type="password"
              id="password"
              v-model="password"
            />
          </div>
          <button class="forgot-password-button" @click="forgotPassword">Passwort vergessen</button>
          <div class="form-control center">
            <button class="btn">Login</button>
          </div>
        </form>
        <div v-else>
          <h1 class="popup-logged-in">LOGGED IN</h1>
          <button v-if="authStore.isLoggedIn" class="btn" @click="authStore.logout()">
            Logout
          </button>
        </div>
  
        <button class="popup-close-button" @click="hide">
          <span class="close-icon">X</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useAuthStore } from '~/store/auth';
  defineComponent({
      props: {
          visible: {
              type: Boolean,
              default: false,
          },
      },
      emits: ['update:visible'],
  });
  const email = ref<string>('');
  const password = ref<string>('');
  const authStore = useAuthStore();
  const emits = defineEmits(['update:visible','close']);
  const props = defineProps(['visible']);
  const hide = () => {
      emits('close'); // Das Popup-Fenster ausblenden
  };
  const login = async () => {
      authStore
        .login(email.value, password.value)
        .then((res) => {
            console.log(res);
            hide()
        })
        .catch((err) => {
            console.log(err);
        });
  };
  </script>

  
  <style scoped>
  .popup-container {
    position: fixed;
    width: calc(400px + 400px);
    top: 300px;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .popup {
    width: calc(400px + 400px);
    height: 593px;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .popup-title {
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .popup-label {
    color: #000;
    margin-bottom: 10px;
  }
  
  .popup-label-text {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }
  
  .input {
    color: #000;
    border-color: #000;
  }
  
  .custom-input-width {
    width: 400px;
  }
  
  .popup-close-button {
    position: absolute;
    top: -50px;
    right: 150px;
    left: 100;
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 28px;
    cursor: pointer;
  }
  
  .btn {
    background-color: #000;
    color: #fff;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 30px;
  }
  
  .close-icon {
    font-size: 24px;
    top: -50px;
    right: 150px;
    font-size: 28px;
  }
  
  .popup-logged-in {
    color: #000;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .forgot-password-button {
    text-decoration: underline;
    cursor: pointer;
    align-self: flex-start; /* Ausrichtung des Buttons am linken Rand */
    margin-top: 10px; /* Abstand nach oben anpassen */
  }
  
  .forgot-password-button:hover {
    text-decoration: underline;
  }
  </style>
  