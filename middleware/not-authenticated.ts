import { Middleware } from "@nuxt/types"

const notAuthenticated: Middleware = ({ store, redirect }): void => {
  if (store.getters["authentication/getAccessToken"]) {
    redirect("/dashboard")
  }
}

export default notAuthenticated
