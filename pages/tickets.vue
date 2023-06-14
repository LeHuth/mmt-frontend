<template>
    <div>

    <SearchBar :events="events"/>

    <div class="grid grid-cols-4 border-l border-black">
        <div class="border-solid border-r border-b border-black pb-10 flex flex-col justify-between" v-for="event in events">
            <img class="w-full p-20 object-cover aspect-square" :src="event.image">
            <div>
                <h4 class="text-center">{{event.title}}</h4>
                <h5 class="text-center">{{event.ticketInfo.price}}$</h5>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts" setup>

import SearchBar from "~/components/search/searchbar.vue";

definePageMeta({
    title: 'Tickets',
    description: 'Tickets',

})

import {useEventsStore} from "~/store/events";
const eventStore = useEventsStore();
eventStore.fetchEvents();
const events = eventStore.getEvents


</script>


<style scoped>

</style>
