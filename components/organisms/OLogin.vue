<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="login"
        ref="form"
        v-model="isValid"
        lazy-validation
        @submit.prevent="login">
        <v-text-field
          v-model="loginPayload.username"
          :rules="isNotEmptyRule"
          label="Username"
          type="text" />
        <v-text-field
          v-model="loginPayload.password"
          :rules="isNotEmptyRule"
          label="Password"
          type="password" />
      </v-form>
      <v-btn
        form="login"
        type="form"
        color="primary">
        Login
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { LoginInterface } from "~/interfaces/authentication.interface"
import { isNotEmptyRule } from "~/utils/rules.util"
import { RouteMixin } from "~/mixins/route.mixin"

@Component({
  name: "OLogin"
})
export default class OLogin extends mixins(RouteMixin) {
  loginPayload: LoginInterface = {
    username: "",
    password: ""
  }

  isValid: boolean = false

  isNotEmptyRule = isNotEmptyRule

  login = async (): Promise<void> => {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      await this.$store.dispatch("authentication/login", this.loginPayload)
      this.$router.push(this.toRoute(this.RouteNames.DASHBOARD))
    } catch (error) {
      this.$showErrorMessage(error)
    }
  }
}
</script>
