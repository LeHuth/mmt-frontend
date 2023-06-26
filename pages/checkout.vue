<template>
  <div>
    <h1>Checkout</h1>
    <div v-for="item in cart.events" v-if="loading" :key="item._id">
      <p>{{ item.name }} x {{ item.amount }}</p>
    </div>
    <button class="btn " @click="placeOrder">
      Place Order
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth'

definePageMeta({
  title: 'Checkout',
  description: 'Checkout page',
  middleware: ['checkout']

})
const loading = ref(false)
const cart = ref([])
const authStore = useAuthStore()
const config = useRuntimeConfig()
const fetchCart = async () => {

}
  const { data } = await useFetch(`${config.public.jwtSecret}/payment/prepare-checkout/`, {

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authStore.getToken}`
    }
  })
  cart.value = data.value
  loading.value = true
}

const placeOrder = async () => {
  const { data } = await useFetch(`${config.public.jwtSecret}/payment/checkout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authStore.getToken}`
    }
  })
  console.log(data)
}

fetchCart()
</script>

<style scoped>

</style>
