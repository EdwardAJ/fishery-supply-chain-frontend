import { codes } from "~/constants/http/codes.constant"

export default ({ $axios, redirect, store }): void => {
  $axios.onRequest((config: any) => {
    const accessToken = store.getters["auth/getAccessToken"]
    if (accessToken) {
      config.headers.common.Authorization = accessToken
    }
  })

  $axios.onError((error: any): void => {
    if (error.response.status === codes.UNAUTHORIZED) {
      store.commit("auth/setAccessToken", null)
      redirect("/login")
    }
  })
}
