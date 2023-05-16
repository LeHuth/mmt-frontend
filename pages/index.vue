<template>
    <div>

        <MMTMap/>
        <!--<EventResults class="p-5"/>-->


        <!--<h1>Index</h1>
        <input @change="uploadImage" type="file">
        <img height="200" :src="previewImage">
        <img height="200" :src="liveURL" >
        <div class="p-4">
            <button class="btn">Hello daisyUI</button>
        </div>-->
    </div>
</template>

<script setup lang="ts">
import { config, Map, MapOptions, Marker } from '@maptiler/sdk';
import EventMapCard from "~/components/EventMapCard.vue";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import {useEventsStore} from "~/store/events";
import MMTMap from "~/components/MMT-Map.vue";
definePageMeta({
    title: "Home",
})


const eventStore = useEventsStore()
await eventStore.fetchEvents()

const previewImage = ref<File | null>(null)
const raw = ref<File | null>(null)
const liveURL = ref<string | null>(null)
const uploadImage = (e) => {
    const image = e.target.files[0];
    raw.value = image;
    const reader = new FileReader();
    reader.readAsDataURL(image);


    reader.onload = e =>{
        previewImage.value = e.target.result;
        //@ts-ignore
        useFetch('http://localhost:8080/api/upload', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body:{
                  imageName: image.name,
                  image: previewImage
              }
          }).then(res => {
              console.log(res.data._rawValue)
              liveURL.value = res.data._rawValue.publicUrl
          }).catch(err => {
              console.log(err)
          })
    }
}
</script>

<style scoped>

#map { position: relative; width: 100%; height: 700px}
</style>