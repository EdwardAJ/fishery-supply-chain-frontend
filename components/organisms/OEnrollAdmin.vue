<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="enroll-admin"
        ref="form"
        lazy-validation
        @submit.prevent="enrollAdmin">
        <v-select
          v-model="enrollAdminPayload.orgName"
          label="Nama Organisasi"
          :items="ORG_NAME_ARRAY" />
      </v-form>
      <v-btn
        form="enroll-admin"
        class="mt-4"
        type="form"
        color="primary">
        Enroll admin
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { EnrollAdminInterface } from "~/interfaces/auth.interface"
import { FormMixin } from "~/mixins/form.mixin"
import { ORG_NAME_ARRAY } from "~/constants/organization.constant"

@Component({
  name: "OEnrollAdmin"
})
export default class OEnrollAdmin extends mixins(FormMixin) {
  enrollAdminPayload: EnrollAdminInterface = {
    orgName: ""
  }

  ORG_NAME_ARRAY = ORG_NAME_ARRAY

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
