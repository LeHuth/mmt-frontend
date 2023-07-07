<template>
  <StripeElements
    v-if="stripeLoaded"
    ref="elms"
    v-slot="{ elements, instance }"
    :elements-options="elementsOptions"
    :instance-options="instanceOptions"
    stripe-key="pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF"
  >
    <StripeElement
      ref="card"
      :elements="elements"
      :options="cardOptions"
    />
  </StripeElements>
  <button type="button" @click="pay">
    Pay
  </button>
</template>

<script lang="ts" setup>
import { StripeElement, StripeElements } from 'vue-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

defineComponent({
  name: 'CardOnly',
  components: {
    StripeElements,
    StripeElement
  },
  props: {
    clientSecret: {
      type: String,
      required: true
    }
  }
})
const props = defineProps({
  clientSecret: {
    type: String,
    required: true
  }
})
const stripeKey = 'pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF'
const instanceOptions = ref({
  // https://stripe.com/docs/js/initializing#init_stripe_js-options
})
const elementsOptions = ref({
  // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
})
const cardOptions = ref({
  // https://stripe.com/docs/stripe.js#element-options
  value: {
    postalCode: '12345'
  }
})
const stripeLoaded = ref(false)
const card = ref()
const elms = ref()
const stripeInstance = ref()
let stripe// = await loadStripe('pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF')
onMounted(() => {
  const stripePromise = loadStripe('pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF')
  stripePromise.then(() => {
    stripeLoaded.value = true
  })
})

const pay = () => {
  const cardElement = card.value.stripeElement

  elms.value.instance.confirmCardPayment(props.clientSecret, {
    payment_method: {
      card: cardElement,
      billing_details: {
        name: 'Your Customer Name'
      }
    }
  }).then((result) => {
    if (result.error) {
      console.log(result.error)
    } else {
      console.log(result.paymentIntent)
    }
  })
}

</script>
