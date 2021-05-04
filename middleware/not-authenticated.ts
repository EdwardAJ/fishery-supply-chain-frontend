import { Middleware } from "@nuxt/types"

const notAuthenticated: Middleware = ({ store, redirect }): void => {
  if (store.getters["auth/getAccessToken"]) {
    redirect("/dashboard")
  }
}

export default notAuthenticated
