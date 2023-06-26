<template>
  <div>
    <client-only>
      <MMTMap />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import '@maptiler/sdk/dist/maptiler-sdk.css'
import { useEventsStore } from '~/store/events'
import MMTMap from '~/components/MMT-Map.vue'

definePageMeta({
  title: 'Home',
  pageTransition: {
    name: 'slide-right',
    mode: 'default'
  }
})
const authStore = useAuthStore()
const eventStore = useEventsStore()
await eventStore.fetchEvents()

</script>

<style scoped>

#map {
    position: relative;
    width: 100%;
    height: 1000px;
}
</style>

<style scoped>
.slide-right-enter-from {
    opacity: 0;
    transform: translate(-150px, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(-150px, 0);
}
</style>
