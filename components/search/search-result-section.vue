<template>
  <div class="border-x border-b w-full min-h-16 bg-transparent border-black rounded-none">
    <ul class="w-full">
      <li
        v-for="event in props.events"
        class="cursor-pointer border-b border-gray-300"
        @click="$emit('select', event)"
      >
        {{ event.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// todo: rename events/ event to items/ item
defineComponent({
  name: 'SearchResultSection',
  props: {
    events: Array
  }
})

const props = defineProps({
  events: Array
})
</script>

<style scoped>

</style>
