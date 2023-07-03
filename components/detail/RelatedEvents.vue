<template>
  <div>
    <h4 class="mb-3">
      Related Events
    </h4>
    <div class="max-w-[1475px] flex gap-12">
      <div v-for="event in props.events" :key="event._id" class="card-elem mb-[12px]">
        <Card :event-data="event" class="card-component" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'RelatedEvents',
  props: {
    events: Array
  }
})

const props = defineProps({
  events: Array
})

</script>

<style scoped>
.card-elem {
    transition: translate 0.1s ease-in-out, border-bottom 0.1s ease-in-out, box-shadow-color 0.1s ease-in-out, transform 0.1s ease-in-out;
}

.card-elem:hover {
    transform: scale(1.01);
    margin-bottom: 0px;
}

.card-component:hover {
    border-bottom: 4px solid greenyellow;
    transition: border-bottom 0.1s ease-in-out;
}
</style>
