/* eslint-disable camelcase */
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators"
import { setCookie, removeCookie } from "~/utils/client-cookie.util"

import {
  LoginInterface, RegisterInterface, EnrollAdminInterface
} from "~/interfaces/auth.interface"
import { $axios } from "~/utils/api.util"
import { CookieNames, CookieExpiryDay } from "~/constants/cookie/cookie.constant"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Auth extends VuexModule {
  token: string | null = null
  organization: string | null = null

  @Mutation
  setAccessToken (token: string | null): void {
    this.token = token
  }

  @Mutation
  setOrganization (organization: string | null): void {
    this.organization = organization
  }

  @Action({ rawError: true })
  async register (payload: RegisterInterface): Promise<string> {
    const { data: { password } } = await $axios.$post("/register", payload)
    return password
  }

  @Action({ rawError: true })
  async login (payload: LoginInterface): Promise<void> {
    const { data: { token, organization } } = await $axios.$post("/login", payload)
    this.context.commit("setAccessToken", token)
    this.context.commit("setOrganization", organization)
    setCookie(CookieNames.AUTH, token, CookieExpiryDay.ONE_DAY)
    setCookie(CookieNames.ORGANIZATION, organization, CookieExpiryDay.ONE_DAY)
  }

  @Action({ rawError: true })
  async enrollAdmin (payload: EnrollAdminInterface): Promise<string> {
    const { data: { password } } = await $axios.$post("/enroll", payload)
    return password
  }

  @Action({ rawError: true })
  logout (): void {
    this.context.commit("setAccessToken", null)
    removeCookie(CookieNames.AUTH)
    removeCookie(CookieNames.ORGANIZATION)
  }

  get getAccessToken (): string | null {
    return this.token
  }

  get getOrganization (): string | null {
    return this.organization
  }
}