<template>
    <div v-if="false" class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="glitch">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li v-if="authStore.isLoggedIn" @click="authStore.logout()"><a>Logout</a></li>
                </ul>
            </div>
        </div>
        <div class="goo">
            <a @click="navigateTo('/')" class="btn btn-ghost normal-case text-xl">MapMyTickets</a>
        </div>
        <div class="navbar-end">
            <label v-if="!authStore.isLoggedIn" class="btn" @click="openPaymentModal">open modal</label>
            <div v-else>
                <button @click="navigateToRoute('/profile')" class="btn btn-ghost btn-sm rounded-btn">My Profile</button>
            </div>

        </div>
        <input type="checkbox" v-model="paymentModalInput" id="payment-modal" class="modal-toggle" />
        <MMTLoginModal @outside="closePaymentModal" id="my-modal-6"/>
        <CartDropdown tabindex="0" class="p-5"/>
    </div>
    <div class="whitespace-nowrap overflow-visible">
        <h1 @click="navigateTo('/')" :class="'huge -ml-4 inline-block w-fit overflow-hidden whitespace-nowrap ' + addOutline('/')">MAP</h1>
        <h1 @click="navigateTo('/login')" :class="'huge inline-block overflow-hidden whitespace-nowrap ' + addOutline('/login')">MY</h1>
        <h1 @click="navigateTo('/tickets')" :class="'huge inline-block overflow-hidden whitespace-nowrap ' + addOutline('/tickets')">TICKETS</h1>

        <div class="divider -mt-7 mb-0"></div>
    </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/auth";
import {useRouter} from "nuxt/app";

const router = useRouter()
const navigateToRoute = (path) => {
    router.push(path)
}
defineComponent({
    name: "MMT-Navbar",
    components: {
        MMTLoginModal
    }
})
import MMTLoginModal from "~/components/MMT-Login-Modal.vue";
import CartDropdown from "~/components/CartDropdown.vue";

const authStore = useAuthStore()
const paymentModalInput = ref()
const openPaymentModal = () => {
    paymentModalInput.value = true
}
const closePaymentModal = () => {
    paymentModalInput.value = false
}

const currentRoute = computed(() => {
    return router.currentRoute.value.path
})

const addOutline = (path) => {
    if (router.currentRoute.value.path != path) {
        return "text-shadow text-outline"
    }
    return ""
}

</script>


<style lang="scss" scoped>
$hue: #007fed;
$hue-light: lighten($hue, 40%);
$hue-dark: darken($hue, 30%);

body {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
  background: $hue-light;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 240px;
  text-align: center;
  color: $hue;
  text-shadow: 2px 2px 0 $hue-dark;
}

.goo {
  position: relative;
  top: 40%;
  width: 600px;
  margin: auto;
  transform: translateY(-60%);
  filter: url(#goo);
}

.drop {
  opacity: 0;
  width: 30px;
  height: 40px;
  background: adjust-hue($hue, -6deg);
  border-radius: 1000px;
  position: absolute;
  animation: drip 8s infinite;
  border: 2px solid $hue-dark;
  border-top: none;
  top: 170px;
  left: 70px;

  &:nth-child(2) {
    left: 130px;
    animation-delay: 3s;
  }

  &:nth-child(3) {
    left: 297px;
    animation-delay: 2s;
  }

  &:nth-child(4) {
    left: 203px;
    animation-delay: 4s;
  }

  &:nth-child(5) {
    left: 415px;
    animation-delay: 1.5s;
  }

  &:nth-child(6) {
    left: 509px;
    animation-delay: 5s;
  }
}

@keyframes drip {
  0% {
    opacity: 0;
    transform: translateY(0);
  }

  35% {
    opacity: 1;
    transform: translateY(30px);
  }

  50% {
    transform: translateY(110vh);
  }

  100% {
    transform: translateY(110vh);
  }
}


</style>
