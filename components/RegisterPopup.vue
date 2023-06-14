<template>
    <div class="popup-container">
      <div class="popup">
        <h2>Registrierung</h2>
        <signup-form/>
        <button class="btn" @click="hide">Schließen</button>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useAuthStore } from '~/store/auth';

  export default defineComponent({
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { emit }) {
      const email = ref<string>('');
      const password = ref<string>('');
      const authStore = useAuthStore();

      const register = async () => {
        authStore

      };

      const hide = () => {
        emit('close', false);
      };

      return {
        email,
        password,
        register,
        hide,
      };
    },
  });
  </script>
<style scoped>

.popup-container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1200px; /* Neue Breite des Popups */
    height: 900px;
    align-items: center; /* Setzt das Element vertikal in der Mitte */
    z-index: 999;
}

.popup {
    background-color: white;
    padding: 60px;
    margin-bottom: 20px;
    margin-right: 20px; /* Abstand zum rechten Rand */
    width: 80%; /* Neue Breite des Popups */
    height: 70%;


    /* Animation style */
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #b921ff02 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
    animation: morphing 10s infinite;
}

@keyframes morphing {
    0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
    }
    25% {
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
        box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
    }
    75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
}
</style>
