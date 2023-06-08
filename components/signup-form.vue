<template>
  <!-- create form to sign up for service -->
    <div class="form-container">
        <form class="form" @submit.prevent="signup">
            <div class="form-control gap-1">
                <div>
                    <label for="email">Email</label>
                    <input id="email" v-model="email" placeholder="Enter email" required type="email"/>
                </div>
                <div>
                    <label for="first-name">First Name</label>
                    <input id="first-name" v-model="firstName" placeholder="Enter fist name" required type="text"/>
                </div>

                <div>
                    <label for="last-name">Last Name</label>
                    <input id="last-name" v-model="lastName" placeholder="Enter last name" required type="text"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input id="password" v-model="password" placeholder="Enter password" required type="password"/>
                </div>

                <div>
                    <label for="password2">Confirm Password</label>
                    <input id="password2" v-model="password2" placeholder="Confirm password" required type="password"/>
                </div>
            </div>
            <button class="btn">Sign Up</button>
            {{backend_message}}
        </form>
    </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from "~/store/auth";

defineComponent({
    name: "SignupForm",
})

const authStore = useAuthStore()
const email = ref<string>('')
const password = ref<string>('')
const firstName = ref<string>('')
const lastName = ref<string>('')
const isOrganizer = ref<boolean>(false)
const password2 = ref<string>('')
const backend_message = ref<string>('')


const checkIfPassowordsMatch = () => {
    return password.value === password2.value
}
const signup = () => {

    if (!checkIfPassowordsMatch()) {
        console.log("Passwords do not match")
        return
    }
    authStore.signup(email.value, password.value, firstName.value, lastName.value, isOrganizer.value).then(res => {
        console.log(res)
        backend_message.value = res._rawValue.msg
    }).catch(err => {
        console.log(err)
    })
}

</script>

<style scoped>

</style>
