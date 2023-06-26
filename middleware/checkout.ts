import { jwtVerify } from 'jose'
import { useAuthStore } from '~/store/auth'

// @ts-ignore
export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    return
  }
  const authStore = useAuthStore()
  const config = useRuntimeConfig()
  try {
    const decoded = await jwtVerify(authStore.token as string, new TextEncoder().encode(config.server_jwtSecret))
    console.log('sucess: ', decoded)
  } catch (e) {
    console.log('verifying token failed')

    return navigateTo('/login')
  }
})
