<template>
  <div class="grid grid-cols-2 p-10 h-fit">
    <div>
      <div v-if="!authStore.isLoggedIn">
        <h1
          :class="{ active: showLoginPopup }"
          class="menu__item-link cursor-pointer"
          @click="showPopUp('login')"
        >
          Anmelden
        </h1>
      </div>

      <div v-if="!authStore.isLoggedIn">
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
          class="menu__item-link"
          @click="showPopUp('cart')"
        >
          Warenkorb
        </h1>
      </div>
      <div v-if="authStore.isLoggedIn">
        <h1
          class="menu__item-link cursor-pointer"
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

const showPopUp = (popuptype: string) => {
  if (popuptype === 'login') {
    showRegisterPopup.value = false
    showLoginPopup.value = true
    showCartPopup.value = false
  } else if (popuptype === 'register') {
    showLoginPopup.value = false
    showRegisterPopup.value = true
    showCartPopup.value = false
  } else if (popuptype === 'cart') {
    showLoginPopup.value = false
    showRegisterPopup.value = false
    showCartPopup.value = true
  }
}
</script>

<style scoped>
</style>
