<template>
  <div>
    <div v-if="showCartPopup" class="overlay">
      <div class="cart-popup">
        <div class="cart-popup-content">
          <div v-if="cartStore.getCart.length > 0">
            <CartItem
              v-for="item in cartStore.getCart"
              :key="item"
              :event="eventStore.getEventById(item)"
            />
            <button v-if="authStore.isLoggedIn" @click="cartStore.checkout('')">
              Checkout
            </button>
            <div v-else class="flex">
              <div>
                <h1>&#8612;</h1>
                <h1>&#8612;</h1>
              </div>
              <h1 class="inline-block">
                LOGIN TO CHECKOUT
              </h1>
            </div>
          </div>
          <div v-else>
            <p class="empty-message">
              Dein Warenkorb ist leer
            </p>
          </div>
        </div>
        <button class="close-button" @click="$emit('close')">
          X
        </button>
        <button class="bottom-button">
          Tickets finden
        </button> <!-- Neuer Button am unteren Rand -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useCartStore } from '~/store/cart'
import { useAuthStore } from '~/store/auth'
import CartItem from '~/components/cart/CartItem.vue'
import { useEventsStore } from '~/store/events'

const authStore = useAuthStore()
const cartStore = useCartStore()
const eventStore = useEventsStore()
eventStore.fetchEvents()

const cart = computed(() => {
  return cartStore.getCart.map((id) => {
    if (!eventStore.getEvents) {
      return []
    }
    return eventStore.getEvents.find(event => event._id === id)
  })
})

const cartTotal = computed(() => {
  if (!cart.value) {
    return 0
  }
  let sum = 0
  try {
    cartStore.getCart.forEach((id) => {
      sum += eventStore.getEventPrice(id)
    })
    return sum
  } catch (e) {
    console.log(e)
    return sum
  }
})

const showCartPopup = ref(true)
</script>

<style scoped>
</style>
