<template>
  <div class="top-bottom-outline flex p-2">
    <div class="flex">
      <img
        :src="props.event?.images[0]"
        alt="event image"
        height="200"
        style="width: 100px; height: 100px; object-fit: cover"
        width="200"
      >
      <div>
        <h3>{{ props.event.name }}</h3>
        <h3>{{ props.event.price }}$</h3>
      </div>
    </div>
    <button class="ml-auto self-end" @click="cartStore.removeFromCart('',props.event?._id, true)">
      <span>REMOVE</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Event } from '~/types'
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()
defineComponent({
  name: 'CartItem',
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true
    }
  }
}
)

const props = defineProps({
  event: {
    type: Object as PropType<Event>,
    required: true
  }
})
</script>

<style scoped>
.top-bottom-outline {
    border-bottom: black 1px solid;
}
</style>
