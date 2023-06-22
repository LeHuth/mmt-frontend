import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as string[],
    loading: false,
    error: false,
    errorMessage: '',
    sync: true
  }),
  getters: {
    getCart: (state): string[] => {
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
      try {
        const response = await useFetch(`http://localhost:8080/cart/get/${id}`)
        // @ts-ignore
        this.cart = response.data
        this.loading = false
      } catch (error) {
        this.error = true
        // @ts-ignore
        this.errorMessage = error.message
        this.loading = false
      }
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
    async addToCart (product_id: string, anonymous: boolean) {
      this.loading = true
      /* if (!anonymous) {
                       try {
                           const response = await useFetch(`http://localhost:8080/cart/add/${id}`, {
                               method: 'POST',
                               headers: {
                                   'Content-Type': 'application/json'
                               },
                               body: JSON.stringify(product_id)
                           })
                           // @ts-ignore
                           this.cart = response.data;
                           this.loading = false;
                       } catch (error) {
                           this.error = true;
                           // @ts-ignore
                           this.errorMessage = error.message;
                           this.loading = false;
                       }
                   } else { */
      this.cart.push(product_id)
      this.sync = false
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
          this.cart = response.data
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
