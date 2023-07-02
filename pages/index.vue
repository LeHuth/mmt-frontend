<template>
  <div :style="{ background: background, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
    <client-only>
      <MMTMap />
    </client-only>
    <button @click="changeBackground">Change Background</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
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

// inject changeBackground method from parent
const changeBackgroundMethod = inject('changeBackground');

// Background
const background = ref('white');

// Change background
function changeBackground() {
  background.value = background.value === 'white' ? 'url(/artifact.gif)' : 'white';
  if (changeBackgroundMethod) {
    changeBackgroundMethod(background.value);
  }
}
</script>

<style >
#map {
    position: relative;
    width: 100%;
    height: 1000px;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translate(-150px, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(-150px, 0);
}
</style>
