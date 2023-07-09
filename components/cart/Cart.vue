<template>
  <div>
    <div v-if="showCartPopup" class="overlay">
      <div class="cart-popup">
        <div class="cart-popup-content">
          <div class="grid pl-3" style="grid-template-columns: 70px 300px 100px 100px 100px">
            <p class="">
              Product
            </p>
            <div />
            <p>Price</p>
            <p>Amount</p>
            <p>Subtotal</p>
            <p />
          </div>
          <div v-if="showBackendCart">
            <CartItem
              v-for="item in backendCart.shoppingCart.items"
              :key="item"
              :amount="item.amount"
              :event="eventStore.getEventById(item.event_id)"
              :show-amount-changer="props.showAmountChanger"
              @update-amount="value => updateItemInCart(value.event_id, value.amount)"
            />
            <div class="mt-6 flex">
              <h5 class="inline-block self-center">
                Total: <span class="pl-3 font-bold">{{ backendCart.shoppingCart.totalPrice }}$</span>
              </h5>
              <div v-if="props.showAmountChanger">
                <button
                  v-if="authStore.verifyToken()"
                  class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none ml-auto"
                  @click="navigateTo('/checkout')"
                >
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
            </div>
          </div>
          <div v-else>
            <p class="empty-message">
              Dein Warenkorb ist leer
            </p>
          </div>
        </div>
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

defineComponent({
  name: 'Cart',
  components: {
    CartItem
  },
  props: {
    showAmountChanger: {
      type: Boolean,
      default: true
    }
  }
})

const props = defineProps({
  showAmountChanger: {
    type: Boolean,
    default: true
  }
})

const authStore = useAuthStore()
const cartStore = useCartStore()
const eventStore = useEventsStore()
eventStore.fetchEvents()
const backendCart = ref({})
const showBackendCart = ref(false)

const cart = computed(() => {
  return cartStore.getCart.map((id) => {
    if (!eventStore.getEvents) {
      return []
    }
    return eventStore.getEvents.find(event => event._id === id)
  })
})

const fetchCart = async () => {
  backendCart.value = await cartStore.fetchCart(authStore.getUserId) as object
  showBackendCart.value = true
}

// eslint-disable-next-line camelcase
const updateItemInCart = async (event_id: string, amount: number) => {
  backendCart.value = await cartStore.updateItem(event_id, amount) as object
}

const showCartPopup = ref(true)

fetchCart()
</script>

<style scoped>
</style>
