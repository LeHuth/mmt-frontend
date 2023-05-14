<template>
    <div class="p-5">
        <h1 class="font-bold text-3xl mb-5">Profile</h1>
        <div class="flex gap-3">
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://picsum.photos/200" />
                </div>
            </div>
            <div>
                <h2 class="font-bold text-xl">{{ user.username }}</h2>
                <h2 class="font-bold text-xl mb-2">{{ user.email }}</h2>
                <div v-if="user.isAdmin" class="badge badge-primary mr-3">Organizer</div>
                <div v-if="user.isOrganizer" class="badge badge-secondary mr-3">Admin</div>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from "~/store/auth";

definePageMeta({
    title: "Profile",
    middleware: "auth"
})
const authStore = useAuthStore()
//fetch user data
// @ts-ignore
const response = useFetch(`http://localhost:8080/users/user/get/${authStore.user.id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authStore.token}`
    }
})

const user = ref(response.data)

</script>

<style scoped>

</style>