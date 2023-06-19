<template>
  <div class="popup-container max-w-2xl">
    <button class="btn btn-sm rounded-none block ml-auto" @click="hide">
      <span class="close-icon">X</span>
    </button>

    <div class="">
      <form v-if="!authStore.isLoggedIn" class="flex flex-col" @submit.prevent="login">
        <div class="form-control">
          <label class="label">
            <span class="label-text">E-MAIL</span>
          </label>
          <input
            id="email"
            v-model="email"
            class="input input-bordered bg-white text-black max-w-2xl rounded-none border-black"
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
          <button class="btn mt-6 mb-3 text-left max-w-2xl rounded-none">
            Login
          </button>
          <div>
            <span class="link nofont max-w-2xl " @click="forgotPassword">
              Passwort vergessen
            </span>
          </div>
        </div>
      </form>
      <div v-else>
        <h1 class="popup-logged-in">
          LOGGED IN
        </h1>
        <button v-if="authStore.isLoggedIn" class="btn rounded-b-none" @click="authStore.logout()">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible']
})
const email = ref<string>('')
const password = ref<string>('')
const authStore = useAuthStore()
const emits = defineEmits(['update:visible', 'close'])
const props = defineProps(['visible'])
const hide = () => {
  emits('close') // Das Popup-Fenster ausblenden
}
const login = async () => {
  authStore
    .login(email.value, password.value)
    .then((res) => {
      console.log(res)
      hide()
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style scoped>
</style>
