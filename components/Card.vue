<template>
    <div  class="card w-96 bg-accent-focus/40 shadow-xl mb-10">
        <div class="rounded-lg"><img :src="props.event.image == 'test-image-url' ? 'https://picsum.photos/200' : props.event.image"
                                     alt="EventTIle"
                                     class="object-cover w-full max-h-72 rounded-lg"/></div>
        <div class="card-body">
            <h2 class="card-title">{{ props.event.title }}</h2>
            <p>{{ props.event.description }}</p>
            <div class="card-actions justify-end">
                <button v-if="ItemIsNotInCart(props.event?._id)" class="btn btn-primary"
                        @click="cartStore.addToCart('',props.event._id,true)">Add to Cart
                </button>
                <button v-else class="btn btn-primary" @click="cartStore.removeFromCart('',props.event._id, true)">Remove
                    from Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Event} from "~/types";
import {PropType} from "@vue/runtime-core";
defineComponent({
    name: "Card",
    props: {
        event: {
            type: Object as PropType<Event>,
            required: true
        }
    }
})

const props = defineProps({
    event: {
        type: Object as PropType<Event>,
        required: true
    }
})

import {useCartStore} from "~/store/cart";
import {useEventsStore} from "~/store/events";

const cartStore = useCartStore()
const eventStore = useEventsStore()

const ItemIsNotInCart = (id) => {
    return !cartStore.getCart.includes(id)
}
</script>

<style scoped>

</style>