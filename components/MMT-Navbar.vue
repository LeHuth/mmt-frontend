<template>
    <div class="whitespace-nowrap flex justify-center overflow-visible">
        <h1 @click="navigateTo('/')" :class="'huge -ml-4 inline-block w-fit overflow-hidden whitespace-nowrap ' + addOutline('/')">MAP</h1>
        <h1 @click="navigateTo('/login/')" :class="'huge inline-block overflow-hidden whitespace-nowrap ' + addOutline('/login')">MY</h1>
        <h1 @click="navigateTo('/tickets/')" :class="'huge inline-block overflow-hidden whitespace-nowrap ' + addOutline('/tickets')">TICKETS</h1>
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

const authStore = useAuthStore()

const addOutline = (path) => {
    if (router.currentRoute.value.path != path) {
        return "text-shadow text-outline"
    }
    return ""
}

</script>

<style scoped>
</style>
