import cookieParser from "cookieparser"
import { ActionTree } from "vuex"

import { CookieNames } from "~/constants/cookie/cookie.constant"

export const actions: ActionTree<{}, {}> = {
  async nuxtServerInit ({ commit }, { req }): Promise<void> {
    const cookie = await cookieParser.parse(req.headers.cookie || "")
    const token = cookie[CookieNames.AUTH]
    const role = cookie[CookieNames.ROLE]

    if (token) {
      commit("auth/setAccessToken", token)
    } else {
      commit("auth/setAccessToken", null)
    }

    if (role) {
      commit("auth/setRole", role)
    } else {
      commit("auth/setRole", null)
    }
  }
}
