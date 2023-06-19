<template>
  <div class="whitespace-nowrap flex justify-center overflow-visible">
    <h1
      :class="'huge -ml-4 inline-block w-fit overflow-hidden whitespace-nowrap ' + addOutline('/')"
      @click="navigateTo('/')"
    >
      MAP
    </h1>
    <h1
      :class="'huge inline-block overflow-hidden whitespace-nowrap ' + addOutline('/login')"
      @click="navigateTo('/login/')"
    >
      MY
    </h1>
    <h1
      :class="'huge inline-block overflow-hidden whitespace-nowrap ' + addOutline('/tickets')"
      @click="navigateTo('/tickets/')"
    >
      TICKETS
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'nuxt/app'
import { useAuthStore } from '~/store/auth'
import MMTLoginModal from '~/components/MMT-Login-Modal.vue'

const router = useRouter()
const navigateToRoute = (path) => {
  router.push(path)
}
defineComponent({
  name: 'MMTNavbar',
  components: {
    MMTLoginModal
  }
})

const authStore = useAuthStore()

const addOutline = (path) => {
  if (router.currentRoute.value.path != path) {
    return 'text-shadow text-outline'
  }
  return ''
}

</script>

<style scoped>
</style>
