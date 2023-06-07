<template>
  <!-- create form to sign up for service -->
    <div class="form-container">
        <form class="form" @submit.prevent="signup">
            <h1 class="semi-huge">Sign Up</h1>
            <div class="form-control gap-1">
                <div>
                    <input id="is-organizer" v-model="isOrganizer" type="checkbox"/>
                    <label for="is-organizer">Organizer</label>
                </div>
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

                <div>
                    <label for="card-elem">Credit or debit card</label>
                    <div id="card-elem"/>
                </div>
            </div>
            <button class="btn">Sign Up</button>
            <p class="mmt-text">
                Already have an account? <a href="/login">Sign In</a>
            </p>
        </form>
    </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from "~/store/auth";
import {loadStripe} from "@stripe/stripe-js";

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
const s_elemetns = ref<any>(null)

const stripe = await loadStripe('pk_test_51NAw6TI4xbizdZ9kng3EHWZIQIiwpHiA0L9IfcBCnmVyGfMOnJixBepX4W3u7wcdpeIPtgYaoY0wuNSAmRZDPV7a00nkzfGvoF');
if(!stripe) {
    console.log("Stripe not loaded")
} else {
    s_elemetns.value = stripe.elements()
}

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
    }).catch(err => {
        console.log(err)
    })
}

</script>

<style scoped>

</style>