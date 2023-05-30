<template>
    <div class="grid grid-cols-2">
        <div class="mmt-outline">

            <form v-if="!authStore.isLoggedIn" class="flex flex-col" @submit.prevent="login">
                <div class="z-10">
                    <label class="" for="email"><h1 class="h1-no-line-height">E-MAIL</h1></label>
                    <input required class="input input-bordered rounded-none bg-black text-white w-full " type="email" id="email" v-model="email">
                </div>
                <div class="z-10">
                    <label class="" for="password"><h1 class="h1-no-line-height">PASSWORD</h1></label>
                    <input required class=" z-10 input input-bordered rounded-none bg-black text-white w-full" type="password" id="password" v-model="password">
                </div>
                <button type="submit"><h1 class="huge text-outline text-shadow -mt-20">LOGIN</h1></button>
            </form>
            <div v-else>
                <h1 class="semi-huge">LOGGED IN </h1>
                <button class="btn" v-if="authStore.isLoggedIn" @click="authStore.logout()">Logout</button>
            </div>
        </div>
        <client-only>
            <Cart class="mmt-outline"/>
        </client-only>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    title: "My Events",
})

import {useCartStore} from "~/store/cart";
import {useAuthStore} from "~/store/auth";
import {useEventsStore} from "~/store/events";

const cartStore = useCartStore()
const authStore = useAuthStore()
const eventStore = useEventsStore()
const email = ref<string>('')
const password = ref<string>('')
eventStore.fetchEvents()
const cart = computed(() => {
    return cartStore.getCart.map((id) => {
        return eventStore.getEvents.find((event) => event._id === id)
    })
})

const login = async () => {
    // @ts-ignore
    const authStore = useAuthStore()
    authStore.login(email.value, password.value).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

const removeFromCart = (id) => {
    cartStore.removeFromCart('', id, true)
}
/*
const cartTotal = computed(() => {
    return cart.value.reduce((acc, item) => {
        return acc + item.ticketInfo.price
    }, 0)
})


 */

onMounted(()=>{
    console.log(window.location.host)
})
</script>

<style scoped>


.h1-no-line-height{
    line-height: 31px;
}
.semi-huge {
    font-size: 100px;
}

.rotation-animation{
    animation: rotation 2s linear infinite;
}

.spin-animation{
    animation: spin 5s linear infinite;
}
.outline-with-1px{
    outline: 1px solid black;
}
</style>