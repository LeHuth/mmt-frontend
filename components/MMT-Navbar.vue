<template>
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li v-if="authStore.isLoggedIn" @click="authStore.logout()"><a>Logout</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a @click="navigateTo('/')" class="btn btn-ghost normal-case text-xl">MapMyTickets</a>
        </div>
        <div class="navbar-end">
            <label v-if="!authStore.isLoggedIn" class="btn" @click="openPaymentModal">open modal</label>
            <div v-else>
                <button @click="navigateTo('/profile')" class="btn btn-ghost btn-sm rounded-btn">My Profile</button>
            </div>

        </div>
        <input type="checkbox" v-model="paymentModalInput" id="payment-modal" class="modal-toggle" />
        <MMTLoginModal @outside="closePaymentModal" id="my-modal-6"/>
    </div>

</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/auth";

defineComponent({
    name: "MMT-Navbar",
    components: {
        MMTLoginModal
    }
})
import MMTLoginModal from "~/components/MMT-Login-Modal.vue";

const authStore = useAuthStore()
const paymentModalInput = ref()
const openPaymentModal = () => {
    paymentModalInput.value = true
}
const closePaymentModal = () => {
    paymentModalInput.value = false
}

</script>

<style scoped>

</style>