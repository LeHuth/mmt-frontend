import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage, useStorage} from "@vueuse/core";
const baseUrl = 'localhost:8000'
import {jwtVerify} from "jose";
import * as process from "process";

export const useAuthStore = defineStore('auth',  {
    state: () => {
        return {
            token: useCookie('token').value,
        }
    },
    actions: {
        async logout() {
            this.token = ''
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
                const token = res.data.value.token
                if (token) {
                    useCookie('token').value = token
                    this.token = token
                    const config = useRuntimeConfig()
                    console.log(config.jwtSecret)
                    const { payload, protectedHeader } = await jwtVerify(this.token || '', new TextEncoder().encode(process.env.JWT_SECRET) )
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