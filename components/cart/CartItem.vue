<template>
  <div class="top-bottom-outline flex p-3">
    <div class="grid w-full" style="grid-template-columns: 70px 300px 100px 100px 100px">
      <img
        :src="props.event?.images[0]"
        alt="event image"
        height="60"
        style="width: 70px; height: 70px; object-fit: cover"
        width="60"
      >
      <h4 class="self-center pl-3">
        {{ props.event.name }}
      </h4>
      <p class="self-center">
        {{ props.event.price }}$
      </p>
      <div class="flex gap-3">
        <p class="self-center">
          {{ props.amount }}
        </p>
        <div v-if="props.showAmountChanger" class="flex align-middle flex-col justify-center">
          <button
            class="btn btn-xs rounded-none border-black"
            @click="$emit('updateAmount', {'amount':amount+1, event_id: props.event?._id})"
          >
            +
          </button>
          <button
            class="btn btn-xs rounded-none"
            @click="$emit('updateAmount', {'amount':amount-1, event_id: props.event?._id})"
          >
            -
          </button>
        </div>
      </div>
      <p class="self-center">
        {{ props.event.price * props.amount }}$
      </p>
    </div>
    <button
      v-if="props.showAmountChanger"
      class="ml-auto self-end"
      @click="cartStore.removeFromCart('',props.event?._id, true)"
    >
      <span class="link">REMOVE</span>
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
    },
    amount: {
      type: Number,
      default: 1
    },
    showAmountChanger: {
      type: Boolean,
      default: true
    }
  }
})

const props = defineProps({
  event: {
    type: Object as PropType<Event>,
    required: true
  },
  amount: {
    type: Number,
    default: 1
  },
  showAmountChanger: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['updateAmount'])
</script>

<style scoped>
.top-bottom-outline {
    border-bottom: black 1px solid;
}
</style>
