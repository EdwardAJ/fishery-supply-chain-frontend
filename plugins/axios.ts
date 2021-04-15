import { codes } from "~/constants/http/codes.constant"

export default ({ $axios, redirect, store }): void => {
  $axios.onRequest((config: any) => {
    const accessToken = store.getters["authentication/getAccessToken"]
    if (accessToken) {
      config.headers.common.Authorization = `Bearer ${accessToken}`
    }
  })

  $axios.onError((error: any): void => {
    if (error.response.status === codes.UNAUTHORIZED) {
      store.commit("authentication/setAccessToken", null)
      redirect("/login")
    }
  })
}
