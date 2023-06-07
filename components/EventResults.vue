<template>
    <div class="scroll-container" @mouseleave="startScroll()" @mouseenter="stopScroll()" style="max-height: calc(100dvh - 230px); overflow-y: scroll; scroll-snap-type: y mandatory;">
        <Card style="scroll-snap-align: start" v-for="event in eventStore.getEvents" :event="event"/>
    </div>
</template>

<script lang="ts" setup>
import {useEventsStore} from "~/store/events";
import {useCartStore} from "~/store/cart";

defineComponent({
    name: "EventResults",
})
const counter = ref(0)
const eventStore = useEventsStore()

const determineScrollDirection = () => {
    const scrollContainer = document.querySelector('.scroll-container')
    const scrollDirection = scrollContainer.scrollTop > 0 ? 'up' : 'down'
    console.log(scrollDirection)
    return scrollDirection
}

const scrollfn = () => {
    const scrollContainer = document.querySelector('.scroll-container')
    console.log(scrollContainer.scrollTop, scrollContainer.scrollHeight)
    if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        scrollContainer.scrollTop = 0
    }
    scrollContainer.scrollBy({
        top: 100,
        behavior: 'smooth'
    })
}



let scrollInterval = null

const startScroll = () => {
    scrollInterval = setInterval(scrollfn, 1000)
}

const stopScroll = () => {
    clearInterval(scrollInterval)
}

onMounted(() => {
    startScroll()
})

</script>

<style scoped>

</style>