import { Middleware } from "@nuxt/types"

const notAuthenticated: Middleware = ({ store, redirect }): void => {
  console.log("panggil")
  if (store.getters["auth/getAccessToken"]) {
    redirect("/dashboard")
  }
}

export default notAuthenticated
