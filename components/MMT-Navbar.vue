<template>
  <div class="whitespace-nowrap flex justify-between overflow-visible max-w-[1475px] ml-auto mr-auto">
    <h1
      :class="{ 'active-tab': router.currentRoute.value.path == '/'}"
      class="huge inline-block text-outline cursor-pointer nav-item"
      @click="navigateTo('/')"
    >
      MAP
    </h1>
    <div class="relative">
      <h1
        :class="{ 'active-tab': router.currentRoute.value.path == '/login/'}"
        class="huge inline-block text-outline cursor-pointer nav-item"
        @click="navigateTo('/login/')"
      >
        MY
      </h1>
      <div v-if="authStore.verifyToken()" id="nav-username" class="fixed top-10 bg-black text-white rotate-12">
        <h1>User's</h1>
      </div>
    </div>

    <h1
      :class="{'active-tab': router.currentRoute.value.path == '/tickets/'}"
      class="huge inline-block text-outline cursor-pointer nav-item"
      @click="navigateTo('/tickets/')"
    >
      TICKETS
    </h1>
    <LiquidButton />
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
const active = 'tickets'
const authStore = useAuthStore()

const addOutline = (path) => {
  if (router.currentRoute.value.path != path) {
    return 'text-shadow text-outline'
  }
  return ''
}

</script>

<style scoped>
h1.nav-item {
    transition: transform 0.1s ease-in-out, border 0.1s ease-in-out;
}

h1:hover {
    /* border-bottom: 4px solid greenyellow;*/

    border-bottom: 4px solid greenyellow;
    transform: translateY(-2px);
}

.nav-item.active-tab {
    transform: translateY(-2px);
    border-bottom: greenyellow 4px solid !important;
    -webkit-text-fill-color: unset;
    -webkit-text-stroke-width: unset;
    -webkit-text-stroke-color: black;
}
</style>
