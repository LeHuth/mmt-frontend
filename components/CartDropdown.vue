<template>
    <div  class="dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn">Dropdown</label>
        <div class="dropdown-content card card-compact p-2 shadow bg-primary text-primary-content" tabindex="0">
            <div class="card-body">
                <div class="flex flex-col">
                    <div class="flex justify-between">
                        <h1 class="font-bold text-3xl mb-5">Cart</h1>
                        <div class="badge badge-primary">{{ cartStore.getCart.length }}</div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div v-for="item in cartStore.getCart" class="flex justify-between">
                            <div class="flex gap-3">
                                <div class="avatar">
                                    <div class="w-24 rounded">
                                        <img src="https://picsum.photos/200"/>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="font-bold text-xl">{{ eventStore.getEventName(item) }}</h2>
                                    <h2 class="font-bold text-xl mb-2">{{ item.price }}</h2>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <button class="btn btn-primary" @click="cartStore.removeFromCart('',item, true)">
                                    Remove from
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useCartStore} from "~/store/cart";
import {useEventsStore} from "~/store/events";

const cartStore = useCartStore()
const eventStore = useEventsStore()
const openCart = ref(false)
const getEventNameById = computed((id) => {

})
</script>

<style scoped>

</style>