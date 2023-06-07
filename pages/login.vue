<template>
    <div>
      <nav class="menu">
        <div class="menu__item" v-if="!authStore.isLoggedIn">
          <a class="menu__item-link" @click="showPopUp('login')">Anmelden</a>
          <img
            class="menu__item-img"
            src="https://images.unsplash.com/photo-1572883475077-fb5aca766ace?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"
          />
          <div class="marquee">
            <div class="marquee__inner">
              <span>Anmelden</span>
              <span>Anmelden</span>
              <span>Anmelden</span>
              <span>Anmelden</span>
            </div>
          </div>
        </div>
        <div class="menu__item" v-if="!authStore.isLoggedIn">
          <a class="menu__item-link" @click="showPopUp('register')">Registrieren</a>
          <img
            class="menu__item-img"
            src="https://images.unsplash.com/photo-1550605355-e83808a20860?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"
          />
          <div class="marquee">
            <div class="marquee__inner">
              <span>Registrieren</span>
              <span>Registrieren</span>
              <span>Registrieren</span>
              <span>Registrieren</span>
            </div>
          </div>
        </div>
            <!-- ... Weitere Menüpunkte ... -->
            <div class="menu__item">
                <a class="menu__item-link" @click="showPopUp('cart')">Warenkorb</a>
                <img class="menu__item-img" src="https://images.unsplash.com/photo-1550605355-e83808a20860?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"/>
                <div class="marquee">
                    <div class="marquee__inner">
                        <span>Warenkorb</span>
                        <span>Warenkorb</span>
                        <span>Warenkorb</span>
                        <span>Warenkorb</span>
                    </div>
                </div>
            </div>

            <div v-if="authStore.isLoggedIn" class="menu__item">
                <a class="menu__item-link" @click="authStore.logout()">Logout</a>
                <img class="menu__item-img" src="https://images.unsplash.com/photo-1550605355-e83808a20860?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=668&q=80"/>
                <div class="marquee">
                    <div class="marquee__inner">
                        <span>Logout</span>
                        <span>Logout</span>
                        <span>Logout</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <!-- Dein Navigations-Code... -->
            <login-popup v-if="showLoginPopup" @close="showLoginPopup = false"></login-popup>
      <register-popup v-if="showRegisterPopup" @close="showRegisterPopup=false"></register-popup>
      <cart v-if="showCartPopup" @close="showCartPopup = false"/>
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
    position: relative;
    padding: 0 6vw;
}

.menu__item-link {
    display: inline-block;
    cursor: pointer;
    position: relative;
    -webkit-text-stroke: 1.5px #ffff;
    -webkit-text-fill-color: transparent;
    color: transparent;
    transition: opacity 0.4s;
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

.menu__item-link:hover {
    transition-duration: 0.1s;
    opacity: 0;
}

.menu__item-img {
    pointer-events: none;
    position: absolute;
    height: 50vh;
    max-height: 400px;
    opacity: 0;
    left: 100%;
    top: 50%;
    transform: translate3d(calc(-100% - 6vw), -30%, 0) translate3d(0, 20px, 0);
}

.menu__item-link:hover + .menu__item-img {
    opacity: 1;
    transform: translate3d(calc(-100% - 6vw), -30%, 0) rotate3d(0, 0, 1, 4deg);
    transition: all 0.4s;
}

.menu {
    padding: 10vh 0 25vh;
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
    font-size: 7vw;
}

.marquee {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #fff;
    pointer-events: none;
    mix-blend-mode: difference;
}

.marquee__inner {
    width: fit-content;
    display: flex;
    position: relative;
    animation: marquee 5s linear infinite;
    animation-play-state: paused;
    opacity: 0;
    transition: opacity 0.1s;
}

.menu__item-link:hover ~ .marquee .marquee__inner {
    animation-play-state: running;
    opacity: 1;
    transition-duration: 0.4s;
}

.menu__item-link,
.marquee span {
    white-space: nowrap;
    font-size: 7vw;
    padding: 0 1vw;
    font-weight: 900;
    line-height: 1.15;
}

.marquee span {
    font-style: italic;
}

@keyframes marquee {
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
}

.popup-container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center; /* Setzt das Element vertikal in der Mitte */
    z-index: 999;
}

.popup {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 20px; /* Abstand zum rechten Rand */
    max-width: 400px; /* Maximale Breite des Popups */
}
</style>
