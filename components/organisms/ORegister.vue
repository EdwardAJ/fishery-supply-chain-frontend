<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="register-user"
        ref="form"
        lazy-validation
        @submit.prevent="registerUser">
        <v-text-field
          v-model="registerPayload.username"
          :rules="isNotEmptyRule"
          label="Nama Pengguna" />
      </v-form>
      <v-btn
        form="register-user"
        class="mt-4"
        type="form"
        color="primary">
        Daftarkan Pengguna
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins, Getter } from "nuxt-property-decorator"
import { RegisterInterface } from "~/interfaces/auth.interface"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "ORegister"
})
export default class ORegister extends mixins(FormMixin) {
  registerPayload: RegisterInterface = {
    username: "",
    orgName: process.env.orgName as string
  }

  async registerUser (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      const password =
        await this.$store.dispatch("auth/register", this.registerPayload)
      alert(password)
    } catch (error) {
      this.$showErrorMessage(error)
    }
  }
}
</script>
