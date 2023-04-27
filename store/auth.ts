// create pinia store called auth
import {defineStore} from "pinia";

const authStore = defineStore({
    id: 'auth',
    state: () => ({
        token: '',
    }),
    hydrate: () => {
        return {}
    },

})