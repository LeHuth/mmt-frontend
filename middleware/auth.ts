import {useAuthStore} from "~/store/auth";
// @ts-ignore
import {jwtVerify} from "jose";
import * as process from "process";
import {useStorage} from "@vueuse/core";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useAuthStore()

  // @ts-ignore
  jwtVerify(store.token, new TextEncoder().encode('secret-jwt-key')).then((res) => {
    console.log(res)
    navigateTo(to)
  }).catch((err) => {
    console.log(err)
    navigateTo(from)
  })
  /*
  try {
    //let decoded = jwt.verify(store.token, process.env.JWT_SECRET);
    //const test = useStorage('token', 'no-token')
    //console.log('client middlew', test.value)
    console.log('client middlew', store.token)

    // @ts-ignore
    const decoded = await jwtVerify(store.token, new TextEncoder().encode(process.env.JWT_SECRET));
    console.log('sucess: ', decoded)
    return navigateTo(to)
  } catch(err) {
    console.log('error')
    return navigateTo(from)
  }*/

})