<template>
    <div>
        <div class="map-and-popup">
            <div ref="map" id="map"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineComponent, onMounted, ref} from 'vue';
import {config, Map, MapOptions, Marker} from '@maptiler/sdk';
import EventMapCard from '~/components/EventMapCard.vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {useEventsStore} from "~/store/events";
import markers from "~/assets/markers.json";

const eventStore = useEventsStore()
eventStore.fetchEvents()
const events = eventStore.getEvents

const selectedEvent = ref({})

defineComponent({
    name: 'MMT-Map',
    components: {
        EventMapCard,
    },
});

const setEvent = (event: any) => {
    selectedEvent.value = event
    console.log(selectedEvent.value)
}

onMounted(() => {
    config.apiKey = 'tQT7W72zRJXId5YzduvP';
    let options: MapOptions = {
        container: document.getElementById('map') as HTMLElement,
        style: 'https://api.maptiler.com/maps/16709723-1898-467b-bc2b-083dbe94dcfa/style.json?key=luHiVJHYFAkokuoL2QwT',
        center: [13.4, 52.5],
        pitch: 85,
        zoom: 12,
    };
    let myMap = new Map(options);

    markers.features.forEach((marker: any) => { // iterate over the markers
        const { coordinates } = marker.geometry;
        const newMarker = new Marker({
            color: '#fc1414',
            draggable: false,
            scale: 2,
        })
            .setLngLat(coordinates)
            .addTo(myMap);

        newMarker.getElement().addEventListener('click', () => {
            setEvent(marker.properties);
        });
    });
});
</script>

<style scoped>

  .map-and-popup {
    display: flex;
    height: 800px;
    box-shadow: 0 2px 4px rgb(255, 255, 255);
  }

  #map {
    flex: 2;
    height: 100%;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    animation: morphing 10s infinite;
    overflow: hidden;
  }

  .btn {
    display: inline-block;
    margin-bottom: 10px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    padding: 10px;
    cursor: pointer;
    animation: morphing 10s infinite;
  }

  .btn:hover {
    animation-play-state: paused;
  }

  .btn-e1 {
    background-color: #ff01f2;
  }

  .btn-e2 {
    background-color: #00aaff;
  }

  .btn-e3 {
    background-color: #ff7700;
  }

  @keyframes morphing {
    0% {
      border-radius: 70% 70% 70% 70% / 70% 70% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    }
    25% {
      border-radius: 80% 70% 90% 80% / 80% 70% 90% 80%;
    }
    50% {
      border-radius: 80% 70% 90% 80% / 80% 70% 90% 80%;
      box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
    }
    75% {
      border-radius: 80% 70% 90% 80% / 80% 70% 90% 80%;
    }
  }
  </style>
