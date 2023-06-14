<!-- LoginPopup.vue -->
<template>
    <div class="popup-container">
        <div class="popup">
            <h2 class="popup-title">Anmeldung</h2>
            <form v-if="!authStore.isLoggedIn" @submit.prevent="login" class="flex flex-col">
                <label class="popup-label" for="email">
                    <h1 class="popup-label-text">E-MAIL</h1>
                </label>
                <input
                    required
                    class="input input-bordered bg-black text-white w-full"
                    type="email"
                    id="email"
                    v-model="email"
                />
                <label class="popup-label" for="password">
                    <h1 class="popup-label-text">PASSWORD</h1>
                </label>
                <input
                    required
                    class="input input-bordered bg-black text-white w-full"
                    type="password"
                    id="password"
                    v-model="password"
                />
                <button type="submit" class="popup-button">
                    <h1 class="popup-button-text">LOGIN</h1>
                </button>
            </form>
            <div v-else>
                <h1 class="popup-logged-in">LOGGED IN</h1>
                <button
                  v-if="authStore.isLoggedIn"
                  class="btn"
                  @click="authStore.logout()"
                >
                    Logout
                </button>
            </div>

            <button class="popup-close-button" @click="hide">
                <span class="close-icon">X Close X</span>
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
    top: 0;
    bottom: 0;
    right: 0;
    width: 1200px;
    height: 900px;
    align-items: center;
    z-index: 999;
}

.popup {
    background-color: #000;
    padding: 60px;
    margin-bottom: 20px;
    margin-right: 20px;
    width: 80%;
    height: 70%;

    /* Animation style */
    animation: morphing 10s infinite;
}

.popup-title {
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
}

.popup-label {
    color: #fff;
    margin-bottom: 10px;
}

.popup-label-text {
    font-size: 20px;
}

.input {
    color: #fff;
    border-color: #fff;
}

.popup-button {
    background-color: #fff;
    color: #000;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
}

.close-icon {
    margin-right: 5px;
    font-size: 18px;
}
.popup-close-button {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}

</style>
