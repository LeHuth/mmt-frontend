<template>
  <div class="registration-page">
    <div class="registration-container">
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
      // Fügen Sie hier den Registrierungscode hinzu
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
.registration-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.registration-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #dddddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
