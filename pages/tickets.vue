<template>
    <event-results/>
</template>

<script setup lang="ts">
import {useEventsStore} from "~/store/events";

definePageMeta(
    {
        title: "Tickets",
    }
)
const eventStore = useEventsStore()
eventStore.fetchEvents()
</script>

<style scoped>

</style>