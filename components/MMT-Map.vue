<template>
  <div class="max-w-[1475px] ml-auto mr-auto my-6">
    <div class="map-buttons">
      <div id="map-btn">
        <div id="drawbtn1">
          <label class="drawer-button btn btn-primary" for="my-drawer-4" @click="setEvent(events[0])">{{
            events[0].title
          }}</label>
        </div>
      </div>
      <div id="map1-btn">
        <div id="drawbtn">
          <label class="drawer-button btn btn-primary" for="my-drawer-4" @click="setEvent(events[1])">{{
            events[1].title
          }}</label>
        </div>
      </div>
      <div id="map2-btn">
        <div id="drawbtn2">
          <label class="drawer-button btn btn-primary" for="my-drawer-4" @click="setEvent(events[2])">{{
            events[2].title
          }}</label>
        </div>
      </div>
    </div>
    <div class="grid gap-3" style="grid-template-columns: 980px 480px">
      <div class="map-and-popup max-w-[980px] border border-black">
        <div id="map" ref="map" />
      </div>
      <div id="event-scoll" class="max-w-[480px] overflow-y-scroll">
        <Card v-for="event in events" :event-data="event" />
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

const selectedEvent = ref({})

defineComponent({
  name: 'MMTMap',
  components: {
    EventMapCard
  }
})

const setEvent = (event: any) => {
  selectedEvent.value = event
  console.log(selectedEvent.value)
}

const showPopup = ref(false)
const showPopup1 = ref(false)

const mapZoom = ref(10)
let mapOptions: MapOptions
let myMap: Map
let marker: Marker
/*
const logZoom = () => {
    //console.log(Math.floor(myMap.getZoom()))
    mapZoom.value = myMap.getZoom() || 10;
    //marker._element.style.transform = `transform(scale(${myMap.getZoom() / 10}))`
};

const readZoom = computed(() => {
    try {
        return myMap.getZoom();
    } catch (e) {
        return 10;
    }
})
*/
onMounted(() => {
  let myMap: Map
  config.apiKey = 'tQT7W72zRJXId5YzduvP'
  const options: MapOptions = {
    container: document.getElementById('map') as HTMLElement, // container's id or the HTML element in which SDK will render the map
    style: 'https://api.maptiler.com/maps/backdrop/style.json?key=tQT7W72zRJXId5YzduvP',
    center: [13.4, 52.5],
    pitch: 85,
    zoom: 12
  }
  myMap = new Map(options)
  // myMap.on('zoom', logZoom)
  const marker3 = new Marker({
    color: '#fc1414',
    draggable: false,
    element: document.getElementById('drawbtn'),
    scale: 2
  })
    .setLngLat([13.4, 52.6])
    .addTo(myMap)

  const marker4 = new Marker({
    color: '#fc1414',
    draggable: false,
    element: document.getElementById('drawbtn1'),
    scale: 2
  })
    .setLngLat([13.3, 52.4])
    .addTo(myMap)

  const marker5 = new Marker({
    color: '#fc1414',
    draggable: false,
    element: document.getElementById('drawbtn2'),
    scale: 2
  })
    .setLngLat([13.4, 52.5])
    .addTo(myMap)

  const marker2 = new Marker({
    color: '#fc1414',
    draggable: false,
    element: document.getElementById('map-tip')
  })
    .setLngLat([13.3, 52.5])
    .addTo(myMap)
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
</style>
