<template>
    <div>
        <div id="map-btn">
            <button class="btn rounded-none" @click="showImageOnMap">
                EVENT
            </button>
        </div>
        <div ref="map" id="map"></div>
        <div class="map-text-box">
            <h1 class="video-h1">Vllt direkt zum Shop?</h1>
            <nuxt-link to="/shop" class="main-video-text-btm">Shop</nuxt-link>
        </div>
        <div class="scroll__down">
            <span class="scroll__mouse">
                <span class="scroll__wheel"></span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {config, Map, MapOptions, Marker, Popup} from '@maptiler/sdk';
import EventMapCard from '~/components/EventMapCard.vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {ref, onMounted, onUnmounted} from 'vue';

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
let popup = ref<Popup>();
let isPopupVisible = ref(false);

const logZoom = () => {
    mapZoom.value = myMap.getZoom() || 10;
};

const readZoom = computed(() => {
    try {
        return myMap.getZoom();
    } catch (e) {
        return 10;
    }
});

const showImageOnMap = () => {
    if (isPopupVisible.value) {
        // wenn Popup sichtbar ist, dann schließen
        if (popup.value) {
            popup.value.remove();
            popup.value = undefined;
        }
        isPopupVisible.value = false;
    } else {
        // wenn Popup nicht sichtbar ist, dann öffnen
        // Erstellt ein neues Popup und fügt das Bild hinzu.
        popup.value = new Popup()
            .setLngLat([13.4, 52.5])
            .setHTML(
                "<img src='konzertTicket1.jpeg' alt='Event Bild' style='width:100px;height:100px;'/>",
            )
            .addTo(myMap);

        const MMT_Final = new Marker({
            color: '#fc1414',
            draggable: false,
            element: document.getElementById('MMT_Final'),
            scale: 2,
        })
            .setLngLat([13.4, 52.5])
            .addTo(myMap);

        isPopupVisible.value = true;
    }
};

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
#map {
    position: relative;
    width: 100%;
    height: 900;
}

.map-text-box {
    position: absolute;
    font-family: '1';
    text-transform: uppercase;
    z-index: 3;
    top: auto;
    bottom: 0;
    padding: 1000px 10px 75px 6.6%;
    text-align: left;
    color: #000000;
}

.main-video-text-btm {
    font-family: '2';
    text-transform: uppercase;
    margin-top: 10px;
    display: inline-block;
    padding: 14px 34px;
    font-size: 16px;
    border: 2px solid #fd0202;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    transition: background 0.2s ease-in-out;
}

.main-video-text-btm:hover {
    background: #fd0202;
}

@keyframes scrollDown {
    0% {
        top: 14px;
        opacity: 0;
    }

    15% {
        top: 14px;
        opacity: 1;
    }

    30% {
        top: 14px;
        opacity: 1;
    }

    45% {
        top: 34px;
        opacity: 1;
    }

    100% {
        top: 34px;
        opacity: 0;
    }
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    background-color: #000000;
}

.scroll__down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}

.scroll__mouse {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 54px;
    border: 2px solid #000000;
    border-radius: 20px;
}

.scroll__wheel {
    position: absolute;
    top: 14px;
    left: 13px;
    width: 4px;
    height: 4px;
    background-color: #000000;
    border-radius: 50%;
    animation: scrollDown 2.5s infinite;
}
</style>
