<template>
    <div>
      <div class="map-buttons">
        <div id="map-btn">
          <button class="btn btn-e1" @click="showPopup = true">E1</button>
        </div>
        <div id="map1-btn">
          <button class="btn btn-e2" @click="showPopup1 = true">E2</button>
        </div>
        <div id="map2-btn">
          <button class="btn btn-e3">E2</button>
        </div>
      </div>
      <div class="map-and-popup">
        <div ref="map" id="map"></div>
        <Popup v-if="showPopup" :show="showPopup" image="/tickets/fusion-festival-20131.jpg" imageAlt="Popup Image"
          description="Fusion: 07-07 bis 11-07" @close="showPopup = false" />
        <Popup v-if="showPopup1" :show="showPopup1" image="/tickets/peter-fox-tickets-poster.jpg"
          imageAlt="Popup Image" description="Fusion: 07-07 bis 11-07" @close="showPopup1 = false" />
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Popup from '~/components/Popup.vue';
import { config, Map, MapOptions, Marker } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const showPopup = ref(false);
const showPopup1 = ref(false);

onMounted(async () => {
  config.apiKey = 'tQT7W72zRJXId5YzduvP';
  const options: MapOptions = {
    container: document.getElementById('map') as HTMLElement,
    style: 'https://api.maptiler.com/maps/04bc556e-f94b-4d84-9756-95b3d862dc15/style.json?key=luHiVJHYFAkokuoL2QwT',
    center: [13.4, 52.5],
    pitch: 85,
    zoom: 12,
  };
  const myMap = new Map(options);

  const response = await fetch('/path/to/markers.json');
  const markers = await response.json();

  markers.forEach(markerData => {
    const marker = new Marker({
      color: '#fc1414',
      draggable: false,
      element: document.getElementById(markerData.id),
      scale: 2,
    });
    marker.setLngLat(markerData.lngLat);
    marker.addTo(myMap);
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
