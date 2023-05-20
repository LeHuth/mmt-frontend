<template>
    <div>

        <!--<MMTMap/>-->
        <!--<EventResults class="p-5"/>-->


        <h1>Index</h1>
        <event-results/>
        <button class="btn" @click="login">Login</button>
        <!--<input @change="uploadImage" type="file">
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
import {useAuthStore} from "~/store/auth";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import {useEventsStore} from "~/store/events";
import MMTMap from "~/components/MMT-Map.vue";
definePageMeta({
    title: "Home",
})

const authStore = useAuthStore()
const eventStore = useEventsStore()
await eventStore.fetchEvents()

const previewImage = ref<File | null>(null)
const raw = ref<File | null>(null)
const liveURL = ref<string | null>(null)

const eventObj = {
    title: 'Brutalismus 3000',
    description: 'Nu gabber post techno punk from berlin with love',
    date: new Date(),
    time: '23:00',
    location: 'Test Location',
    category: 'TestCategory',
    tags: ['tag1', 'tag2'],
    organizer: '645f6ddf2fc82cebeb3cedd9',
    image: null,
    imageName: null,
    ticketInfo: {
        ticketTypes: [
            {
                name: 'General Admission',
            }
        ],
        name: 'General Admission',
        price: 20,
        available: 100,
    }
}
const uploadImage = (e) => {
    const image = e.target.files[0];
    raw.value = image;
    const reader = new FileReader();
    reader.readAsDataURL(image);


    reader.onload = e =>{
        previewImage.value = e.target.result;
        eventObj.image = previewImage;
        eventObj.imageName = image.name;
        //@ts-ignore
        useFetch('http://localhost:8080/events/create', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZjZkZGYyZmM4MmNlYmViM2NlZGQ5In0sImlhdCI6MTY4NDYwMTk3NSwiZXhwIjoxNjg0NjA1NTc1fQ.oMtdzQ3i5hx3EEJKO6P3Fhk_2-8nyrs22ww9x-npK7A'
              },
              body:eventObj
          }).then(res => {
              console.log(res.data._rawValue)
              liveURL.value = res.data._rawValue.publicUrl
          }).catch(err => {
              console.log(err)
          })
    }
}

const login = () => {
    authStore.login('admin@mail.de','admin').then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
</script>

<style scoped>

#map { position: relative; width: 100%; height: 700px}
</style>