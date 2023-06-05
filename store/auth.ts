import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage, useStorage} from "@vueuse/core";
import * as process from "process";
import {jwtVerify} from "jose";
const baseUrl = 'localhost:8000'

export const useAuthStore = defineStore('auth',  {
    state: () => {
        return {
            token: useCookie('token').value,
            user: {
                id: undefined,
            }
        }
    },
    actions: {
        async logout() {
            this.token = undefined
            useCookie('token').value = undefined
        },
        async signup(email: string, password: string, first_name: string, last_name: string,isOrganizer: boolean) {
            useFetch(`http://localhost:8080/users/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, first_name, last_name, isOrganizer})
            }).then(async (res)=> {
                // @ts-ignore
                const token = res.data.value.token
                //verify token
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        async login(email: string, password: string) {
            console.log(email, password)
            useFetch(`http://localhost:8080/users/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            }).then(async (res)=> {
                // @ts-ignore
                const token = res.data.value.token
                if (token) {
                    useCookie('token').value = token
                    this.token = token
                    const config = useRuntimeConfig()
                    console.log('Runtime config:', config.public.jwtSecret)
                    const { payload, protectedHeader } = await jwtVerify(token, new TextEncoder().encode(config.public.jwtSecret))
                    // @ts-ignore
                    this.user.id = payload.user.id
                    console.log(payload)
                    return true
                } else {
                    return false
                }
            }).catch((err) => {
                console.log(err)
                return false
            })

        },
        async getOrderHistory() {
            let user_id = this.user.id
            const response = await useFetch(`http://localhost:8080/users/get-order-history/647b84ab5bd5797d65794f92`)
            console.log(response)
            return response
        }
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.token
        },
        getToken: (state) : string => {
            return state.token || ""
        },
        getUserId: (state) => {
            return state.user.id
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