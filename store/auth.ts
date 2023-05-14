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

        }
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.token
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