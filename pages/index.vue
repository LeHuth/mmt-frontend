<!-- eslint-disable vue/html-indent -->

<template>
    <div>
        <!--<MMTMap/>-->
        <!--<EventResults class="p-5"/>-->
        <Header />
    </div>
    <MMTMap />
    <Header />
    <SeSection />
</template>

<script setup lang="ts">
import {config, Map, MapOptions, Marker} from '@maptiler/sdk';
import EventMapCard from '~/components/EventMapCard.vue';
import {useAuthStore} from '~/store/auth';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {useEventsStore} from '~/store/events';
import MMTMap from '~/components/MMT-Map.vue';
definePageMeta({
    title: 'Home',
});

const authStore = useAuthStore();
const eventStore = useEventsStore();
await eventStore.fetchEvents();

const previewImage = ref<File | null>(null);
const raw = ref<File | null>(null);
const liveURL = ref<string | null>(null);

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
            },
        ],
        name: 'General Admission',
        price: 20,
        available: 100,
    },
};
const uploadImage = (e) => {
    const image = e.target.files[0];
    raw.value = image;
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (e) => {
        previewImage.value = e.target.result;
        eventObj.image = previewImage;
        eventObj.imageName = image.name;
        //@ts-ignore
        useFetch('http://localhost:8080/events/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer ' +
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZjZkZGYyZmM4MmNlYmViM2NlZGQ5In0sImlhdCI6MTY4NDYwMTk3NSwiZXhwIjoxNjg0NjA1NTc1fQ.oMtdzQ3i5hx3EEJKO6P3Fhk_2-8nyrs22ww9x-npK7A',
            },
            body: eventObj,
        })
            .then((res) => {
                console.log(res.data._rawValue);
                liveURL.value = res.data._rawValue.publicUrl;
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const login = () => {
    authStore
        .login('admin@mail.de', 'admin')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};
</script>

<style>
body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: '1';
    color: #333;
    background: #333;
}

body::-webkit-scrollbar {
    width: 5px;
    display: none;
}

body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
    background-color: #fd0202;
    outline: 1px solid rgb(0, 0, 0);
}

#map {
    position: relative;
    width: 100%;
    height: 1000px;
}
</style>
