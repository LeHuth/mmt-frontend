<template>
    <div>
        <div id="map-btn" >
            <button class="btn rounded-none">EVENT</button>
        </div>
        <div id="map-tip" class="tooltip tooltip-left" data-tip="hello">
            <button class="btn">Left</button>
        </div>
        <div ref="map" id="map"></div>
    </div>
</template>

<script setup lang="ts">
import { config, Map, MapOptions, Marker } from '@maptiler/sdk';
import EventMapCard from "~/components/EventMapCard.vue";
import "@maptiler/sdk/dist/maptiler-sdk.css";

defineComponent({
    name: "MMT-Map",
    components: {
        EventMapCard
    }
})
const mapZoom = ref(10)
let mapOptions : MapOptions;

let marker : Marker;
/*
const logZoom = () => {
    //console.log(Math.floor(myMap.getZoom()))
    mapZoom.value = myMap.getZoom() || 10
    //marker._element.style.transform = `transform(scale(${myMap.getZoom() / 10}))`
}

const readZoom = computed( () => {

    try{
        return myMap.getZoom()
    }catch (e){
        return 10
    }
})
*/
onMounted(() => {
    let myMap : Map;
    config.apiKey = 'tQT7W72zRJXId5YzduvP';
    let options : MapOptions = {
        container: document.getElementById("map") as HTMLElement, // container's id or the HTML element in which SDK will render the map
        style: 'https://api.maptiler.com/maps/00c8e802-dfa6-432b-bac2-d329360d33e2/style.json',
        center: [13.4,52.5],
        pitch: 85,
        zoom: 12,
    }
    myMap = new Map(options);
    //myMap.on('zoom', logZoom)
    const marker3 = new Marker({
        color: "#fc1414",
        draggable: false,
        element: document.getElementById('map-btn'),
        scale: 2
    }).setLngLat([ 13.4,52.5])
        .addTo(myMap);
    const marker2 = new Marker({
        color: "#fc1414",
        draggable: false,
        element: document.getElementById('map-tip'),
    }).setLngLat([13.3,52.5])
      .addTo(myMap);

})


</script>

<style scoped>
#map { position: relative; width: 100%; height: 700px}
</style>