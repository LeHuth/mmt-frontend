<template>
  <div
    class="grid grid-cols-2 gap-3 py-10 ml-auto mr-auto w-fit"
    style="grid-template-columns: 480px 984px; min-height: calc(100vh - 376px)"
  >
    <div class="border-l border-black flex flex-col gap-6">
      <div v-if="!isLoggedIn">
        <h1
          :class="{ active: showLoginPopup }"
          class="menu__item-link cursor-pointer pl-3"
          @click="showPopUp('login')"
        >
          Anmelden
        </h1>
      </div>

      <div v-if="!isLoggedIn">
        <h1
          :class="{ active: showRegisterPopup }"
          class="menu__item-link"
          @click="showPopUp('register')"
        >
          Registrieren
        </h1>
      </div>
      <div>
        <h1
          :class="{ active: showCartPopup }"
          class="menu__item-link pl-3"
          @click="showPopUp('cart')"
        >
          Warenkorb
        </h1>
      </div>
      <div v-if="isLoggedIn">
        <h1
          :class="{ active: showOrderHistoryPopup }"
          class="menu__item-link cursor-pointer pl-3"
          @click="showPopUp('order-history')"
        >
          Tickets
        </h1>
      </div>
      <div v-if="isLoggedIn">
        <h1
          class="menu__item-link cursor-pointer pl-3"
          @click="authStore.logout()"
        >
          Profile
        </h1>
      </div>
      <div v-if="isLoggedIn">
        <h1
          class="menu__item-link cursor-pointer pl-3"
          @click="authStore.logout()"
        >
          Abmelden
        </h1>
      </div>
    </div>
    <div>
      <login-black-white
        v-if="showLoginPopup"
        class="mr-auto ml-auto"
        @close="showLoginPopup = false"
      />
      <signup-form-blackwhite
        v-if="showRegisterPopup"
        class="mr-auto ml-auto"
        @close="showRegisterPopup = false"
        @hide="showRegisterPopup = false"
      />
      <cart v-if="showCartPopup" @close="showCartPopup = false" />
      <order-history v-if="showOrderHistoryPopup" @close="showOrderHistoryPopup = false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import Cart from '~/components/cart/Cart.vue'

const authStore = useAuthStore()
const showLoginPopup = ref(false)
const showRegisterPopup = ref(false)
const showCartPopup = ref(false)
const showOrderHistoryPopup = ref(false)
console.log('login status ', authStore.verifyToken())
const isLoggedIn = ref(false)

authStore.verifyToken().then((res) => {
  isLoggedIn.value = res
})
// todo: this is stupid and should be done differently
const showPopUp = (popuptype: string) => {
  if (popuptype === 'login') {
    showRegisterPopup.value = false
    showLoginPopup.value = true
    showCartPopup.value = false
    showOrderHistoryPopup.value = false
  } else if (popuptype === 'register') {
    showLoginPopup.value = false
    showRegisterPopup.value = true
    showCartPopup.value = false
    showOrderHistoryPopup.value = false
  } else if (popuptype === 'cart') {
    showLoginPopup.value = false
    showRegisterPopup.value = false
    showCartPopup.value = true
    showOrderHistoryPopup.value = false
  } else if (popuptype === 'order-history') {
    showLoginPopup.value = false
    showRegisterPopup.value = false
    showCartPopup.value = false
    showOrderHistoryPopup.value = true
  }
}
</script>

<style scoped>
h1 {
    transition: border 0.1s ease-in-out, scale 0.1s ease-in-out;
}

.active {
    color: #000000;
    border-left: 4px solid black;
    scale: none !important;
}

.menu__item-link:hover {
    border-left: 4px solid black;
}
</style>
