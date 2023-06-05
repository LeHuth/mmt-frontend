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
import {ref} from 'vue';
import Popup from '~/components/Popup.vue';
import {config, Map, MapOptions, Marker} from '@maptiler/sdk';
import EventMapCard from '~/components/EventMapCard.vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

defineComponent({
    name: 'MMT-Map',
    components: {
        EventMapCard,
    },
});
const mapZoom = ref(10);
let mapOptions: MapOptions;
let myMap: Map;
let marker: Marker;

const showPopup = ref(false);
const showPopup1 = ref(false);
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
});

onMounted(() => {
    config.apiKey = 'tQT7W72zRJXId5YzduvP';
    let options: MapOptions = {
        container: document.getElementById('map') as HTMLElement, // container's id or the HTML element in which SDK will render the map
        style: 'https://api.maptiler.com/maps/00c8e802-dfa6-432b-bac2-d329360d33e2/style.json',
        center: [13.4, 52.5],
        pitch: 85,
        zoom: 12,
    };
    myMap = new Map(options);
    myMap.on('zoom', logZoom);

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
}

#map {
    flex: 2;
    height: 100%;
}

.btn {
    display: inline-block;
    margin-bottom: 10px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
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
</style>
