<template>
  <div
    class="card-container"
    @mouseenter="showCartButton = !showCartButton"
    @mouseleave="showCartButton = !showCartButton"
  >
    <div class="p-3">
      <nuxt-img :src="props.eventData?.images[0]" format="webp" quality="10" />
    </div>
    <div class="px-3 my-3">
      <div class="flex justify-between align-middle text-center">
        <h5>{{ props.eventData?.name }}</h5>
        <span class="self-center">
          {{ props.eventData?.price }}$
        </span>
      </div>
      <p class="mt-3">
        Event Category
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IEvent } from '~/types'
import { useCartStore } from '~/store/cart'

defineComponent({
  name: 'Card',
  props: {
    eventData: {
      type: Object as PropType<IEvent>,
      required: true
    }
  }
})

const props = defineProps({
  eventData: {
    type: Object as PropType<IEvent>,
    required: true
  }
})

const showCartButton = ref(false)
const cartStore = useCartStore()

</script>

<style scoped>
button {
    transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out, display 0.2s ease-in-out;
}

.card-container button {
    left: calc(50% - 63px);
}
</style>
