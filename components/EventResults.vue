<template>
  <div class="flex flex-wrap justify-between">
        <div v-for="event in eventStore.getEvents" class="card w-96 bg-accent-focus/40 shadow-xl mb-10">
            <div class="rounded-lg"><img class="object-cover w-full max-h-72 rounded-lg" src="https://picsum.photos/200" alt="EventTIle" /></div>
            <div class="card-body">
                <h2 class="card-title">{{ event.title }}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button v-if="ItemIsNotInCart(event._id)" @click="cartStore.addToCart('',event._id,true)" class="btn btn-primary">Add to Cart</button>
                    <button v-else @click="cartStore.removeFromCart('',event._id, true)" class="btn btn-primary">Remove from Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useEventsStore} from "~/store/events";
import {useCartStore} from "~/store/cart";

defineComponent({
    name: "EventResults",
})

const eventStore = useEventsStore()
const cartStore = useCartStore()

const isId = (id) => {
    return
}
const ItemIsNotInCart = (id) => {
    return !cartStore.getCart.includes(id)
}

</script>

<style scoped>

</style>