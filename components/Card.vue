<template>
  <div>
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
      <a class="mt-3 block">
        Event Category
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IEvent } from '~/types'

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
</script>

<style scoped>
</style>
