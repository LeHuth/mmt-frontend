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
            <Popup
    v-if="showPopup"
    :show="showPopup"
    image="/tickets/fusion-festival-20131.jpg"
    imageAlt="Popup Image"
    description="Fusion: 07-07 bis 11-07"
    @close="showPopup = false"
/>
<Popup
    v-if="showPopup1"
    :show="showPopup1"
    image="/tickets/peter-fox-tickets-poster.jpg"
    imageAlt="Popup Image"
    description="Fusion: 07-07 bis 11-07"
    @close="showPopup = false"
/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

import { ref, onMounted, computed, defineComponent } from 'vue';
import Popup from '~/components/Popup.vue';
import { config, Map, MapOptions, Marker } from '@maptiler/sdk';
import EventMapCard from '~/components/EventMapCard.vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

defineComponent({
    name: 'MMT-Map',
    components: {
        EventMapCard,
    },
});

const showPopup = ref(false);
const showPopup1 = ref(false);

const mapZoom = ref(10);
let mapOptions: MapOptions;
let myMap: Map;
let marker: Marker;
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
    let myMap : Map;
    config.apiKey = 'tQT7W72zRJXId5YzduvP';
    let options: MapOptions = {
        container: document.getElementById('map') as HTMLElement, // container's id or the HTML element in which SDK will render the map
        style: 'https://api.maptiler.com/maps/16709723-1898-467b-bc2b-083dbe94dcfa/style.json?key=luHiVJHYFAkokuoL2QwT',
        center: [13.4, 52.5],
        pitch: 85,
        zoom: 12,
    };
    myMap = new Map(options);
    //myMap.on('zoom', logZoom)
    const marker3 = new Marker({
        color: '#fc1414',
        draggable: false,
        element: document.getElementById('map-btn'),
        scale: 2,
    })
        .setLngLat([13.4, 52.6])
        .addTo(myMap);

    const marker4 = new Marker({
        color: '#fc1414',
        draggable: false,
        element: document.getElementById('map1-btn'),
        scale: 2,
    })
        .setLngLat([13.3, 52.4])
        .addTo(myMap);

    const marker5 = new Marker({
        color: '#fc1414',
        draggable: false,
        element: document.getElementById('map2-btn'),
        scale: 2,
    })
        .setLngLat([13.4, 52.5])
        .addTo(myMap);

    const marker2 = new Marker({
        color: '#fc1414',
        draggable: false,
        element: document.getElementById('map-tip'),
    })
        .setLngLat([13.3, 52.5])
        .addTo(myMap);
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
        box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
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
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
        }
        25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
        }
        50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
            box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
        }
        75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
        }
    }
</style>
