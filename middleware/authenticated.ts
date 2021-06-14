import { Middleware } from "@nuxt/types"
import { OrgNames } from "~/constants/organization.constant"
import { RoutePaths } from "~/constants/routes.constant"

const authenticated: Middleware = ({ store, route, redirect }): void => {
  if (process.env.orgName === OrgNames.PUBLIC) {
    if (route.path === RoutePaths.INDEX) {
      redirect("/dashboard")
    }
    return
  }
  if (!store.getters["auth/getAccessToken"]) {
    store.dispatch("auth/logout")
    redirect("/login")
  }
}

export default authenticated
