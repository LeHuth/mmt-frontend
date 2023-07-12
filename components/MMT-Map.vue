<template>
  <div class="max-w-[1475px] ml-auto mr-auto my-6">
    <div class="grid gap-3" style="grid-template-columns: 980px 480px">
      <div class="map-and-popup max-w-[980px] border border-black">
        <div id="map" ref="map" />
      </div>
      <div id="event-scoll" class="max-w-[480px] overflow-y-scroll">
        <transition-scale v-for="(event,index) in filteredEvents">
          <Card :key="index + rerender_hack" :event-data="event" />
        </transition-scale>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from 'vue'
import { config, Map, MapOptions, Marker } from '@maptiler/sdk'
import EventMapCard from '~/components/EventMapCard.vue'
import '@maptiler/sdk/dist/maptiler-sdk.css'
import { useEventsStore } from '~/store/events'

const eventStore = useEventsStore()
eventStore.fetchEvents()
const events = eventStore.getEvents
const filteredEvents = ref([])
// eslint-disable-next-line camelcase
const runtime_config = useRuntimeConfig()
const eventLocations = ref([])

defineComponent({
  name: 'MMTMap',
  components: {
    EventMapCard
  }
})

const mapZoom = ref(10)
let mapOptions: MapOptions
let myMap: Map
let marker: Marker
const bounds = ref()
const rerender_hack = ref(0)

const filterEventsOnBounds = () => {
  filteredEvents.value = events.filter((event: any) => {
    const eventLocation = event.happenings[0].place.location
    // @ts-ignore
    const test = bounds.value.contains([eventLocation.longitude, eventLocation.latitude])

    return !!test
  })
} // Adjust the delay as needed

watch(filteredEvents, (value, oldValue, onCleanup) => {
  if (value.length !== oldValue.length) {
    rerender_hack.value = rerender_hack.value + 1
  }
})

onMounted(async () => {
  let myMap: Map
  config.apiKey = 'tQT7W72zRJXId5YzduvP'
  const options: MapOptions = {
    container: document.getElementById('map') as HTMLElement, // container's id or the HTML element in which SDK will render the map
    /* style: 'https://api.maptiler.com/maps/backdrop/style.json?key=tQT7W72zRJXId5YzduvP', */
    center: [13.4, 52.5],
    pitch: 0,
    zoom: 12
  }
  myMap = new Map(options)
  // myMap.on('zoom', logZoom)
  const response = await fetch(`${runtime_config.public.baseUrl}/event-locations`)
  eventLocations.value = await response.json()
  eventLocations.value.forEach((location: any) => {
    const marker = new Marker({
      color: '#fc1414',
      draggable: false,
      element: document.getElementById('map-tip')
    })
      .setLngLat([location.location.longitude, location.location.latitude])
      .addTo(myMap)
  })
  bounds.value = myMap.getBounds()
  myMap.on('dragend', (e) => {
    bounds.value = myMap.getBounds()
    filterEventsOnBounds()
  })

  myMap.on('zoomend', (e) => {
    bounds.value = myMap.getBounds()
    filterEventsOnBounds()
  })
  filteredEvents.value = events
})

</script>

<style scoped>
.map-and-popup {
    display: flex;
    box-shadow: 0 2px 4px rgb(255, 255, 255);
}

.drawer, .drawer-content {
    max-height: calc(100vh - 240px);;
}

.menu {
    background-color: white;
}

#map, #event-scoll {
    flex: 2;
    height: calc(100vh - 240px);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
