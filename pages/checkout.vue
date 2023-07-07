<template>
  <div>
    <client-only>
      <CardElement :client-secret="clientSecret" />
    </client-only>
  </div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~/store/auth'

definePageMeta({
  title: 'Checkout',
  ssr: false,
  description: 'Checkout page',
  middleware: ['checkout']

})
const config = useRuntimeConfig()
const authStore = useAuthStore()
const clientSecret = ref('')
const sendPaymentIntent = async () => {
  // @ts-ignore
  const { data } = await useFetch(`${config.public.baseUrl}/payment/create-payment-intent/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authStore.token}`
    }
  })
  console.log(data)
  clientSecret.value = data.value.clientSecret
  return data
}
sendPaymentIntent()
</script>

<style scoped>

</style>
