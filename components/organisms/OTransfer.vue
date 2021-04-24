<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="transfer"
        ref="form"
        lazy-validation
        @submit.prevent="enrollAdmin">
        <v-text-field
          v-model="enrollAdminPayload.orgName"
          :rules="isNotEmptyRule"
          label="Organization name"
          type="text" />
      </v-form>
      <v-btn
        form="transfer"
        class="mt-4"
        type="form"
        color="primary">
        Transfer
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { EnrollAdminInterface } from "~/interfaces/auth.interface"
import { RouteMixin } from "~/mixins/route.mixin"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "OTransfer"
})
export default class OEnrollAdmin extends mixins(RouteMixin, FormMixin) {
  enrollAdminPayload: EnrollAdminInterface = {
    orgName: ""
  }

  async enrollAdmin (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      const password =
        await this.$store.dispatch("auth/enrollAdmin", this.enrollAdminPayload)
      alert(password)
    } catch (error) {
      this.$showErrorMessage(error)
    }
  }
}
</script>
