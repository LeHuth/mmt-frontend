<template>
  <div class="border-x border-b w-full min-h-16 bg-white border-black rounded-none">
      <ul class="w-full">
          <li class="cursor-pointer border-b border-gray-300" @click="navigateTo('/detail/1')" v-for="event in props.events">{{event.name}}</li>
      </ul>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
    name: "SearchResultSection",
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