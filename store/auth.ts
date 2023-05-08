import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage, useStorage} from "@vueuse/core";
const baseUrl = 'localhost:8000'
import {jwtVerify} from "jose";
import * as process from "process";

export const useAuthStore = defineStore('auth',  {
    state: () => {
        return {
            token: useCookie('token').value,
            user: {
                id: undefined
            },
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
                    const { payload, protectedHeader } = await jwtVerify(token, new TextEncoder().encode('secret-jwt-key') )
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