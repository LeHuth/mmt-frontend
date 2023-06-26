import { defineStore } from 'pinia'
import { Event, IEvent } from '@/types'
import { useAuthStore } from '~/store/auth'

//
// @ts-ignore
// @ts-ignore
export const useEventsStore = defineStore({
  id: 'events',
  state: () => ({
    events: [] as Event[],
    event: {} as any,
    loading: false,
    error: false,
    errorMessage: ''
  }),
  getters: {
    getEvents: (state): IEvent[] => {
      return state.events
    },
    getEventName: state => (id: string) => {
      return state.events.find(event => event._id === id)?.title
    },
    getLoading: (state) => {
      return state.loading
    },
    getError: (state) => {
      return state.error
    },
    getErrorMessage: (state) => {
      return state.errorMessage
    },
    // @ts-ignore
    getEventById: state => (id: string): Event => {
      // @ts-ignore
      return state.events.find(event => event._id === id)
    },
    getEventPrice: state => (id: string) => {
      return state.events.find(event => event._id === id)?.ticketInfo.price
    }
  },
  actions: {
    async fetchEvents () {
      this.loading = true
      const config = useRuntimeConfig()
      try {
        const response = await useFetch(`${config.public.baseUrl}/events/get/all`)
        // @ts-ignore
        this.events = response.data.value
        this.loading = false
      } catch (error) {
        this.error = true
        // @ts-ignore
        this.errorMessage = error.message
        this.loading = false
      }
    },
    async fetchEvent (id: string) {
      this.loading = true
      try {
        const response = await useFetch(`http://localhost:8080/events/get/${id}`)
        // @ts-ignore
        this.event = response.data
        this.loading = false
      } catch (error) {
        this.error = true
        // @ts-ignore
        this.errorMessage = error.message
        this.loading = false
      }
    },
    async createEvent (event: IEvent) {
      this.loading = true
      const auth = useAuthStore()
      if (!auth.verifyToken() || auth.getToken === '') {
        this.error = true
        this.errorMessage = 'You need to be logged in to create an event'
        this.loading = false
        return
      }
      try {
        const response = await useFetch('http://localhost:8080/events/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.getToken
          },
          body: JSON.stringify(event)
        })
        // @ts-ignore
        this.event = response.data
        this.loading = false
      } catch (error) {
        this.error = true
        // @ts-ignore
        this.errorMessage = error.message
        this.loading = false
      }
    },
    async updateEvent (event: Event) {
      this.loading = true
      const auth = useAuthStore()
      try {
        const response = await useFetch(`http://localhost:8080/events/update/${event._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.getToken

          }
        })
        // @ts-ignore
        this.event = response.data
        this.loading = false
      } catch (error) {
        this.error = true
        // @ts-ignore
        this.errorMessage = error.message
        this.loading = false
      }
    },
    async deleteEvent (id: string) {
      this.loading = true
      const auth = useAuthStore()
      try {
        await useFetch(`http://localhost:8080/events/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.getToken
          }
        })
        this.loading = false
      } catch (error) {
        this.error = true
        // @ts-ignore
        this.errorMessage = error.message
        this.loading = false
      }
    }
  }
})
