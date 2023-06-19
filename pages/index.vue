<template>
    <div>
        <client-only>
            <MMTMap/>
            <SeSection/>
        </client-only>

    </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from '~/store/auth';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {useEventsStore} from '~/store/events';
import MMTMap from '~/components/MMT-Map.vue';

definePageMeta({
    title: 'Home',
    pageTransition: {
        name: 'slide-right',
        mode: 'default'
    },
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

<style scoped>

#map {
    position: relative;
    width: 100%;
    height: 1000px;
}
</style>

<style scoped>
.slide-right-enter-from {
    opacity: 0;
    transform: translate(-150px, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate(-150px, 0);
}
</style>
