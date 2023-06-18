<template>
    <div>

        <SearchBar :results-are-hyper-links="true" :show-result-count="true" :events="events"/>

        <div class="grid grid-cols-4 border-l border-black">

            <div v-for="event in events"
                 class="card-elem border-solid border-r border-b border-black pb-10 flex flex-col justify-between hover:border-l-8 hover:border-b-8">
                <nuxt-link :to="'/detail/'+event._id">
                    <img :src="event.images[0]" class="w-full p-20 object-cover aspect-square">
                    <div>
                        <h4 class="text-center">{{ event.name }}</h4>
                        <h5 class="text-center">{{ event.price }}$</h5>
                    </div>
                </nuxt-link>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>

import SearchBar from "~/components/search/searchbar.vue";
import {useEventsStore} from "~/store/events";

definePageMeta({
    title: 'Tickets',
    description: 'Tickets',

})

const eventStore = useEventsStore();
eventStore.fetchEvents();
const events = eventStore.getEvents


</script>


<style scoped>
.card-elem {
    transition: border 0.1s ease-in-out;
}

.card-elem:hover {
    border-bottom-color: greenyellow;
}
</style>
