<template>
  <StripeElements
          v-if="stripeLoaded"
          v-slot="{ elements, instance }"
          ref="elms"
          :stripe-key="stripeKey"

  />
</template>

<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js'

const stripeKey= 'pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF'
const stripeLoaded = ref(false)
onBeforeMount(() => {
    const stripePromise = loadStripe('pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF')
    stripePromise.then(() => {
        stripeLoaded.value = true
    })
})
</script>

<style scoped>

</style>