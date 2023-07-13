<template>
  <div class="popup-container max-w-2xl">
    <button class="btn btn-sm rounded-none block ml-auto" @click="hide">
      <span class="close-icon">X</span>
    </button>

    <div class="">
      <form v-if="true" class="flex flex-col" @submit.prevent="login">
        <div class="form-control">
          <label class="label">
            <span class="label-text">FIRST NAME</span>
          </label>
          <input
            id="email"
            v-model="firstName"
            class="input input-bordered bg-white text-black max-w-2xl rounded-none border-black"
            required
            type="email"
          >
          <label class="label">
            <span class="label-text">LAST NAME</span>
          </label>
          <input
            id="email"
            v-model="lastName"
            class="input input-bordered bg-white text-black max-w-2xl rounded-none border-black"
            required
            type="email"
          >
          <label class="label">
            <span class="label-text">E-MAIL</span>
          </label>
          <input
            id="email"
            v-model="email"
            :class="{ 'input-error': !validateEmail, 'border-black': validateEmail }"
            class="input input-bordered bg-white text-black max-w-2xl rounded-none"
            required
            type="email"
          >
          <label class="label">
            <span class="label-text">PASSWORD</span>
          </label>
          <input
            id="password"
            v-model="password"
            class="input input-bordered bg-white text-black max-w-2xl rounded-none border-black"
            required
            type="password"
          >
          <label class="label">
            <span class="label-text">CONFIRM PASSWORD</span>
          </label>
          <input
            id="password"
            v-model="password2"
            :class="{ 'input-error': !validatePassword, 'border-black': validatePassword }"
            class="input input-bordered max-w-2xl rounded-none"
            required
            type="password"
          >
          <button
            :disabled="!validate"
            class="btn mt-6 mb-3 text-left max-w-2xl rounded-none"
            @click="register"
          >
            REGISTER
          </button>
          <div>
            <span class="nofont max-w-2xl ">
              {{ backendMessage.msg }}
            </span>
          </div>
        </div>
      </form>
      <div v-else>
        <h1 class="popup-logged-in">
          LOGGED IN
        </h1>
        <button v-if="authStore.verifyToken()" class="btn rounded-b-none" @click="authStore.logout()">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

defineComponent({
  name: 'SignupFormBlackWhite',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
})
const emit = defineEmits(['hide'])

const hide = () => {
  emit('hide', false)
}
const authStore = useAuthStore()

const email = ref('')
const firstName = ref('')
const lastName = ref('')
const password = ref('')
const password2 = ref('')
const backendMessage = ref('')

const validateEmail = computed(() => {
  if (email.value.length == 0) {
    return true
  }
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return pattern.test(email.value)
})

const validate = computed(() => {
  return (
    firstName.value.length > 0 &&
        lastName.value.length > 0 &&
        validateEmail &&
        email.value.length > 0 &&
        password.value.length > 0 &&
        password2.value.length > 0 &&
        validatePassword
  )
})

const validatePassword = computed(() => {
  return password.value == password2.value
})

const register = async () => {
  if (validate.value) {
    const response = await authStore.signup(
      email.value,
      password.value,
      firstName.value,
      lastName.value,
      false
    )
    if (response) {
      backendMessage.value = response
    }
  }
}

</script>

<style scoped>
</style>
