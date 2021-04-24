import { Middleware } from "@nuxt/types"

const authenticated: Middleware = ({ store, redirect }): void => {
  if (!store.getters["auth/getAccessToken"]) {
    store.dispatch("auth/logout")
    redirect("/login")
  }
}

export default authenticated
