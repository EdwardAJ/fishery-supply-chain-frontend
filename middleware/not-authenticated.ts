import { Middleware } from "@nuxt/types"
import { OrgNames } from "~/constants/organization.constant"

const notAuthenticated: Middleware = ({ store, redirect }): void => {
  if (process.env.orgName === OrgNames.PUBLIC || store.getters["auth/getAccessToken"]) {
    redirect("/dashboard")
  }
}

export default notAuthenticated
