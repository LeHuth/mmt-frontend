<template>
  <div :class="{ dark: darkMode }">
    <div class="wrap-2"><canvas id="liquid"></canvas></div>
      <client-only>
              <MMTMap />
          <SeSection />
      </client-only>

      <!-- Schaltfläche zum Umschalten des Dunkelmodus -->
      <button class="dark-mode-toggle" @click="darkMode = !darkMode">
          Switch to {{ darkMode ? 'Light' : 'Dark' }} Mode
      </button>
  </div>
</template>


<script setup lang="ts">

import {useAuthStore} from '~/store/auth';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {useEventsStore} from '~/store/events';
import MMTMap from '~/components/MMT-Map.vue';
definePageMeta({
    title: 'Home',
    keepalive: true,
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
// Dark Mode Zustand
const darkMode = ref(false);
</script>

<style>
body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-image: url('~/tickets/Hintergrund.png');
    background-size: 100%; /* Damit das Bild den gesamten Bereich abdeckt */
    background-repeat: no-repeat; /* Damit das Bild nicht wiederholt wird */
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

/* Stil für Dunkelmodus */
.dark {
    background: #333;
    color: #fff;
}
.dark::v-deep {
    background: #333;
    color: #fff;
}

/* Schaltfläche zum Umschalten des Dunkelmodus */
.dark-mode-toggle {
    position: absolute;
    bottom: 20px;
    right: 20px;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translate(-150px, 0);
}
.slide-right-leave-to {
    opacity: 0;
    transform: translate(-150px, 0);
}
</style>
