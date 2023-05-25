<template>
    <div class="">
        <h1 class="text-end h1-no-line-height">CART</h1>
        <div  v-if="cartStore.getCart.length > 0">
            <CartItem v-for="item in cart" :key="item._id" :event="item"></CartItem>
            <h3>Total: {{cartTotal}}</h3>
            <button v-if="authStore.isLoggedIn" @click="cartStore.checkout('')">Checkout</button>
            <div v-else class="flex">
                <div>
                    <h1 class="border-b-red-500">&#8612;</h1>
                    <h1>&#8612;</h1>
                </div>

                <h1 class="semi-huge text-red-500 outline text-shadow outline-with-1px inline-block">LOGIN TO CHECKOUT</h1>
            </div>
        </div>
        <div v-else>
            <h1 class="semi-huge text-red-500 outline outline-with-1px rotate-90 spin-animation inline-block">EMPTY :[</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useCartStore} from "~/store/cart";
import {useAuthStore} from "~/store/auth";
import CartItem from "~/components/cart/CartItem.vue";
import {computed} from "vue";
import {useEventsStore} from "~/store/events";
const authStore = useAuthStore()
const cartStore = useCartStore()
const eventStore = useEventsStore()
eventStore.fetchEvents()
const cart = computed(() => {
    return cartStore.getCart.map((id) => {
        if(!eventStore.getEvents) return []
        return eventStore.getEvents.find((event) => event._id === id)
    })
})

const cartTotal = computed(() => {
    if (!cart.value) return 0
    console.log(cart)
    console.log(cartStore.getCart)
    let sum = 0
    try{
        cart.value.forEach((item) => {
            if ("ticketInfo" in item) {
                sum += item.ticketInfo.price
            }
        })
        return sum
    }catch (e) {
        console.log(e)
        return sum
    }
})
</script>

<style scoped>

</style>