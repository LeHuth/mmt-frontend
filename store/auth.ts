import { jwtVerify } from 'jose'
import { defineStore } from 'pinia'
import { useCookie } from '~/.nuxt/imports'

const baseUrl = 'localhost:8000'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useCookie('token').value,
      user: {
        id: undefined
      }
    }
  },
  actions: {
    async logout () {
      this.token = undefined
      this.user.id = undefined
      useCookie('user').value = undefined
      useCookie('token').value = undefined
      reloadNuxtApp()
    },
    async signup (email: string, password: string, first_name: string, last_name: string, isOrganizer: boolean) {
      const config = useRuntimeConfig()
      const { data } = await useFetch(`${config.public.baseUrl}/users/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, first_name, last_name, isOrganizer })
      })

      return data
    },
    async login (email: string, password: string) {
      const config = useRuntimeConfig()
      console.log(email, password)
      const { data } = await useFetch(`${config.public.baseUrl}/users/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      // @ts-ignore
      const token = data.value.token
      if (token) {
        useCookie('token').value = token
        this.token = token
        const config = useRuntimeConfig()
        const {
          payload,
          protectedHeader
        } = await jwtVerify(token, new TextEncoder().encode(config.public.jwtSecret))
        console.log(payload)
        // @ts-ignore
        this.user.id = payload.user.id
        // @ts-ignore
        reloadNuxtApp()
        return payload.user.id
      } else {
        return Promise.reject('No token')
      }
    },
    async getOrderHistory () {
      const user_id = this.user.id
      const response = await useFetch('http://localhost:8080/users/get-order-history/647b84ab5bd5797d65794f92')
      console.log(response)
      return response
    },
    async verifyToken () {
      const config = useRuntimeConfig()
      try {
        if (!this.token) {
          console.log('no token')
          return false
        }
        if (!config.public.jwtSecret) {
          console.log('no jwt secret')
          return false
        }
        await jwtVerify(this.token as string, new TextEncoder().encode(config.public.jwtSecret))
        return true
      } catch (err) {
        console.log(err)
        await this.logout()
        return false
      }
    }
  },
  getters: {
    getToken: (state): string => {
      return state.token || ''
    },
    getUserId: (state) => {
      return state.user.id
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict'
    })
  },
  hydrate (state, initialState) {
    state.token = useCookie<string>('token').value
  }
})
