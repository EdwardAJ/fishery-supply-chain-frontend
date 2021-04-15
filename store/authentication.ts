/* eslint-disable camelcase */
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators"
import cookies from "js-cookie"

import {
  LoginInterface, RegisterInterface, EnrollAdminInterface
} from "~/interfaces/authentication.interface"
import { $axios } from "~/utils/api.util"
import { cookie } from "~/constants/cookie/cookie.constant"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Authentication extends VuexModule {
  token: string | null = null

  @Mutation
  setAccessToken (token: string | null): void {
    this.token = token
  }

  @Mutation
  setCookie ({ name, value }): void {
    cookies.set(name, value, { expires: cookie.NUMBER_OF_DAY_BEFORE_EXPIRED })
  }

  @Mutation
  removeCookie (name: string): void {
    cookies.remove(name)
  }

  @Action({ rawError: true })
  async register (payload: RegisterInterface): Promise<string> {
    const { data: { password } } = await $axios.$post("/register", payload)
    return password
  }

  @Action({ rawError: true })
  async login (payload: LoginInterface): Promise<void> {
    const { data: { token } } = await $axios.$post("/login", payload)
    this.context.commit("setCookie", {
      name: cookie.AUTH_COOKIE_NAME, value: token
    })
  }

  @Action({ rawError: true })
  async enrollAdmin (payload: EnrollAdminInterface): Promise<string> {
    const { data: { password } } = await $axios.$post("/enroll", payload)
    return password
  }

  @Action({ rawError: true })
  logout (): void {
    this.context.commit("setAccessToken", null)
    this.context.commit("removeCookie", cookie.AUTH_COOKIE_NAME)
  }

  get getAccessToken (): string | null {
    return this.token
  }
}
