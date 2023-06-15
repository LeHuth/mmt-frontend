<template>
  <div>
    <nav class="menu">
      <div class="menu__item" v-if="!authStore.isLoggedIn">
        <a
          class="menu__item-link"
          :class="{ active: showLoginPopup }"
          @click="showPopUp('login')"
        >Anmelden</a>
      </div>
      <div class="menu__item" v-if="!authStore.isLoggedIn">
        <a
          class="menu__item-link"
          :class="{ active: showRegisterPopup }"
          @click="showPopUp('register')"
        >Registrieren</a>
      </div>
      <div class="menu__item">
        <a
          class="menu__item-link"
          :class="{ active: showCartPopup }"
          @click="showPopUp('cart')"
        >Warenkorb</a>
      </div>
    </nav>
    <div>
      <!-- Dein Navigations-Code... -->
      <login-popup v-if="showLoginPopup" @close="showLoginPopup = false"></login-popup>
      <register-popup v-if="showRegisterPopup" @close="showRegisterPopup = false"></register-popup>
      <cart v-if="showCartPopup" @close="showCartPopup = false" />
    </div>
  </div>
</template>


<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import LoginPopup from '~/components/LoginPopup.vue';
import RegisterPopup from '~/components/RegisterPopup.vue';
import { useAuthStore } from '~/store/auth';
import Cart from '~/components/cart/Cart.vue';

const authStore = useAuthStore();
const showLoginPopup = ref(false);
const showRegisterPopup = ref(false);
const showCartPopup = ref(false);

defineComponent({
  components: {
    LoginPopup,
    RegisterPopup,
    Cart,
  },
});

const showPopUp = (popuptype: string) => {
  if (popuptype === 'login') {
    showRegisterPopup.value = false;
    showLoginPopup.value = true;
    showCartPopup.value = false;
  } else if (popuptype === 'register') {
    showLoginPopup.value = false;
    showRegisterPopup.value = true;
    showCartPopup.value = false;
  } else if (popuptype === 'cart') {
    showLoginPopup.value = false;
    showRegisterPopup.value = false;
    showCartPopup.value = true;
  }
};
</script>

<style>
.menu__item {
  padding: 20px 6vw; /* Hinzugefügt: Vertikaler Abstand */
  margin-bottom: 30px; /* Hinzugefügt: Vertikaler Abstand */
  margin-top: 30px;
}

.menu__item-link {
  display: inline-block;
  cursor: pointer;
  position: relative;
  color: black;
  transition: transform 0.3s, color 0.3s; /* Hinzugefügt: Übergangseffekt */
}

.menu__item-link:hover {
  transform: translateY(-5px); /* Hinzugefügt: Erheben */
  color: white; /* Hinzugefügt: Farbe ändern */
  text-shadow: 0 0 7px black;
}

.menu__item-link::before {
  all: initial;
  font-family: sofia-pro, sans-serif;
  counter-increment: menu;
  position: absolute;
  bottom: 60%;
  left: 0;
  pointer-events: none;
}
.menu__item-link.active {
  transform: translateY(-5px);
  color: white;
  text-shadow: 0 0 7px black;
}

.menu__item {
  padding: 20px 6vw; /* Hinzugefügt: Vertikaler Abstand */
}

.menu {
  padding: 10vh 0 25vh;
  font-size: 7vw;
}
</style>
