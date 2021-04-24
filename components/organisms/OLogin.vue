<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="login"
        ref="form"
        lazy-validation
        @submit.prevent="login">
        <v-text-field
          v-model="loginPayload.username"
          :rules="isNotEmptyRule"
          label="Username" />
        <v-text-field
          v-model="loginPayload.password"
          :rules="isNotEmptyRule"
          label="Password"
          type="password" />
      </v-form>
      <v-btn
        class="mt-4"
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
import { LoginInterface } from "~/interfaces/auth.interface"
import { RouteMixin } from "~/mixins/route.mixin"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "OLogin"
})
export default class OLogin extends mixins(RouteMixin, FormMixin) {
  loginPayload: LoginInterface = {
    username: "",
    password: ""
  }

  async login (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      await this.$store.dispatch("auth/login", this.loginPayload)
      this.$router.push(this.toRoute(this.RoutePaths.DASHBOARD))
    } catch (error) {
      this.$showErrorMessage(error)
    }
  }
}
</script>
