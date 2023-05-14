<template>

</template>

<script setup lang="ts">
defineComponent({
    name: "EventResults",
})

const response = useFetch(`http://localhost:8080/events/getAll`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
})

</script>

<style scoped>

</style>