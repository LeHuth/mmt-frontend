<template>
  <div class="my-6 max-w-[1475px] ml-auto mr-auto" style="min-height: calc(-424px + 100vh)">
    <div class="flex justify-between mb-12 ">
      <h1>Checkout</h1>
      <button
        class="btn bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-none w-[48px]"
        @click="$refs.dialog.showModal()"
      >
        X
      </button>
    </div>
    <dialog ref="dialog">
      <h2>Are you sure you want to leave?</h2>
      <button @click="router.back()">
        Yes
      </button>
      <button>No</button>
    </dialog>
    <div class="grid gap-6" style="grid-template-columns: 480px 972px">
      <div class="max-w-[480px]">
        <div class="form-control mb-6">
          <label class="label">
            <div class="flex gap-3 align-baseline">
              <span class="label-text self-center">Card</span>
              <input checked class="radio" name="radio-10" type="radio">
            </div>
            <div class="flex gap-3 align-baseline">
              <span class="label-text">Paypal</span>
              <input class="radio" disabled name="radio-10" type="radio">
            </div>
            <div class="flex gap-3 align-baseline">
              <span class="label-text">Klarna</span>
              <input class="radio" disabled name="radio-10" type="radio">
            </div>

          </label>
        </div>
        <client-only>
          <CardElement :client-secret="clientSecret" />
        </client-only>
      </div>
      <div class="max-w-[984px] pt-[11px]">
        <Cart :show-amount-changer="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~/store/auth'
import { useCartStore } from '~/store/cart'

definePageMeta({
  title: 'Checkout',
  ssr: false,
  description: 'Checkout page',
  middleware: ['checkout']

})
const config = useRuntimeConfig()
const cartStore = useCartStore()
const backendCart = ref({})
const authStore = useAuthStore()
const clientSecret = ref('')
const router = useRouter()
const sendPaymentIntent = async () => {
  console.log('sendPaymentIntent')
  // @ts-ignore
  const { data } = await useFetch(`${config.public.baseUrl}/payment/create-payment-intent/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authStore.token}`
    }
  })
  clientSecret.value = data.value.clientSecret
  return data
}

const fetchCart = async () => {
  backendCart.value = await cartStore.fetchCart(authStore.token) as object
}
fetchCart()
sendPaymentIntent()
</script>

<style scoped>

</style>
