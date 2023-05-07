<template>
    <div v-bind:ch class="modal" @click:.self="">
        <div class="modal-box">
            <div class="form-control">

                <label class="input-group input-group-vertical mb-6">
                    <span>Email</span>
                    <input v-model="email" type="email" required placeholder="info@site.com" class="input input-bordered" />
                </label>

                <label class="input-group input-group-vertical mb-6">
                    <span>Password</span>
                    <input v-model="password" type="password" required placeholder="your password here" :class="'input input-bordered ' + (password.length > 3 ? '' : 'input-error')" />
                </label>

                <button @click="login" :disabled="!isValid" class="btn btn-ghost">Login</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const email = ref<string>('')
const password = ref<string>('')
let isModalOpen = ref<boolean>(false)
/*
const computeEmail = computed({
    get: () => email.value,
    set: (value) => {
        email.value = value
    }
})
*/


const updateEmail = (e) => {
    email.value = e.target.value
}

const isValid = computed(() => {
    let email_length = email.value.length
    let password_length = password.value.length
    return email_length > 0 && password_length > 0
})
import {useAuthStore} from "~/store/auth";
const login = async () => {
    // @ts-ignore
    useFetch('http://localhost:8080/users/user/login', {
        method: 'POST',
        body:{
            email: email.value,
            password: password.value
        }
    }).then((res) => {
        console.log(res.data.value.token)
        const cookie = useCookie<string>('token')
        cookie.value = res.data.value.token
        const authStore = useAuthStore()
        authStore.token = cookie.value
        console.log(authStore.token, 'store token')

    }).catch((err) => {
        console.log('herherher')
        console.log(err)
    })
}
</script>
<script lang="ts">
export default {
    name: "MMT-Login-Modal"
}
</script>

<style scoped>

</style>