import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage, useStorage} from "@vueuse/core";
const baseUrl = 'localhost:8000'

export const useAuthStore = defineStore('auth',  {
    state: () => {
        return {
            token: useCookie('token').value,
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
    hydrate(state,initialState ) {
        state.token = useCookie<string>('token').value
    }
})