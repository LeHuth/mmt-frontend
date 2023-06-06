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

        <div id="order-hisory">
            <h1 class="semi-huge">Order History</h1>
            <div v-if="prod.products" v-for="item in prod.products">
              <h2>{{item.name}}</h2>
              <h2>{{item.description}}</h2>
                <img v-for="img in item.images" :src="img" width="200" height="200" alt="">
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import {loadStripe} from "@stripe/stripe-js";

definePageMeta({
    title: "My Events",
})

// @ts-ignore
import {useCartStore} from "~/store/cart";
import {useAuthStore} from "~/store/auth";
import {useEventsStore} from "~/store/events";

const cartStore = useCartStore()
const authStore = useAuthStore()
const eventStore = useEventsStore()
const email = ref<string>('')
const password = ref<string>('')
const prod = reactive({
    products: null
})

const getOrderHistory = async () => {
    const userId = authStore.getUserId
    const url = `http://localhost:8080/users/get-order-history/${userId}`
    const {data} = await useFetch(url)
    prod.products = data.value.products
}

const login = async () => {
    // @ts-ignore
    const authStore = useAuthStore()
    authStore.login(email.value, password.value).then(res => {
        console.log(res)
        getOrderHistory()
    }).catch(err => {
        console.log(err)
    })
}
getOrderHistory()
const removeFromCart = (id) => {
    cartStore.removeFromCart('', id, true)
}

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

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.2s;
}
.slide-left-enter-from {
    opacity: 0;
    transform: translate(50px, 0);
}
.slide-left-leave-to {
    opacity: 0;
    transform: translate(50px, 0);
}
.slide-right-enter-from {
    opacity: 0;
    transform: translate(-50px, 0);
}
.slide-right-leave-to {
    opacity: 0;
    transform: translate(-50px, 0);
}
</style>