<template>
  <div>
    <h1>Order History</h1>
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
    <div class="max-h-[665px] overflow-y-scroll">
      <div v-for="item in order.orders" v-if="!loading" :key="item._id">
        <cart-item
          :amount="item.amount"
          :event="eventStore.getEventById(item.event_id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { useEventsStore } from '~/store/events'

defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible']
})
const authStore = useAuthStore()
const eventStore = useEventsStore()
eventStore.fetchEvents()
const order = ref([])
const loading = ref(false)

const loadOrder = async () => {
  loading.value = true
  const config = useRuntimeConfig()
  const { data } = await useFetch(`${config.public.baseUrl}/users/my/orders/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authStore.getToken}`
    }
  })
  order.value = data.value
  loading.value = false
}

loadOrder()
</script>

<style scoped>

</style>
