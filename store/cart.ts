import { defineStore } from 'pinia'
import { useAuthStore } from '~/store/auth'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as object[],
    loading: false,
    error: false,
    errorMessage: '',
    sync: true
  }),
  getters: {
    getCart: (state): object[] => {
      return state.cart
    },
    getLoading: (state) => {
      return state.loading
    },
    getError: (state) => {
      return state.error
    },
    getErrorMessage: (state) => {
      return state.errorMessage
    }
  },
  actions: {
    async fetchCart (id: string) {
      this.loading = true
      const authStore = useAuthStore()
      const { data } = await useFetch(`http://localhost:8080/cart/get/${id}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + authStore.getToken
        },
        onResponse ({ request, response, options }) {
          console.log('[fetch response]', request, response.status, response.body, response._data)
          return response._data
        },
        onResponseError ({ request, response, options }) {
          console.log('[fetch response error]', request, response.status, response.body)
        }
      })

      return data.value
    },
    async updateItem (event_id: string, amount: number) {
      this.loading = true
      const authStore = useAuthStore()
      const { data } = await useFetch(`http://localhost:8080/cart/update-item/${event_id}?amount=${amount}`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + authStore.getToken
        },
        onResponse ({ request, response, options }) {
          console.log('[fetch response]', request, response.status, response.body, response._data)
          return response._data
        },
        onResponseError ({ request, response, options }) {
          console.log('[fetch response error]', request, response.status, response.body)
        }
      })

      return data.value
    },
    async checkout (id: string) {
      const token = useCookie('token')
      console.log('CHECKOUT')
      const config = useRuntimeConfig()
      useFetch(`${config.public.baseUrl}/payment/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value
        },
        body: {
          items: this.cart,
          baseUrl: window.location.host + '/payment'
        }
      }).then((response) => {
        console.log(response)

        // @ts-ignore
        navigateTo(response.data._rawValue.url, { external: true })
      }).catch((error) => {
        console.log(error)
      })
    },
    async addToCart (productId: string, anonymous: boolean, amount = 1, price: number) {
      this.loading = true
      console.log('ADD TO CART')
      const authStore = useAuthStore()
      console.log(authStore.verifyToken(), authStore.getUserId)
      const isLogged = authStore.verifyToken()
      if (isLogged) {
        console.log('LOGGED IN')
        const userId = authStore.getUserId
        try {
          const { data } = await useFetch(`http://localhost:8080/cart/add/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + authStore.getToken
            },
            body: { items: [{ event_id: productId, amount, price }] }
          })
          // @ts-ignore
          this.cart = data._rawValue.shoppingCart.items
          this.loading = false
        } catch (error) {
          this.error = true
          // @ts-ignore
          this.errorMessage = error.message
          this.loading = false
        }
      } else {
        console.log('NOT LOGGED IN')
        this.cart.push({ productId, amount })
        this.sync = false
      }

      this.loading = false
    },
    async removeFromCart (id: string, product: any, anonymous: boolean) {
      this.loading = true
      if (!anonymous) {
        try {
          const response = await useFetch(`http://localhost:8080/cart/remove/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          })
          // @ts-ignore
          // this.cart = response.data
          this.loading = false
        } catch (error) {
          this.error = true
          // @ts-ignore
          this.errorMessage = error.message
          this.loading = false
        }
      } else {
        console.log(this.cart.indexOf(product))
        this.cart.splice(this.cart.indexOf(product), 1)
        this.sync = false
        this.loading = false
      }
    },
    async clearCart (id: string, anonymous: boolean) {
      this.loading = true
      if (!anonymous) {
        try {
          const response = await useFetch(`http://localhost:8080/cart/clear/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          // @ts-ignore
          this.cart = response.data
          this.loading = false
        } catch (error) {
          this.error = true
          // @ts-ignore
          this.errorMessage = error.message
          this.loading = false
        }
      } else {
        this.cart = []
        this.sync = false
        this.loading = false
      }
    }

  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict'
    })
  }
})
