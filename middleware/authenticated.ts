import { Middleware } from "@nuxt/types"

const authenticated: Middleware = ({ store, route, redirect }): void => {
  if (!store.getters["authentication/getAccessToken"]) {
    store.dispatch("authentication/logout")
    if (route.path === "/billing") {
      // Remove '/' from route.fullPath by using substring(1)
      redirect(`/register?target=${route.fullPath.substring(1)}`)
    } else {
      redirect("/login")
    }
  }
}

export default authenticated
