<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="transfer"
        ref="form"
        lazy-validation
        @submit.prevent="transfer">
        <v-text-field
          v-model="transferPayload.currentLot.id"
          :rules="isNotEmptyRule"
          label="ID Ikan" />
        <v-text-field
          v-model="transferPayload.toUsername"
          :rules="isNotEmptyRule"
          label="Nama pengguna tujuan" />
        <v-select
          v-model="transferPayload.toOrganization"
          label="Organisasi tujuan"
          :items="ORG_NAME_ARRAY" />
      </v-form>
      <v-row>
        <v-col class="text-right">
          <v-btn
            form="transfer"
            class="mt-4"
            type="form"
            color="primary">
            Transfer
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { ORG_NAME_ARRAY } from "~/constants/organization.constant"
import { TransferInterface } from "~/interfaces/transfer.interface"
import { RouteMixin } from "~/mixins/route.mixin"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "OTransfer"
})
export default class OTransfer extends mixins(RouteMixin, FormMixin) {
  transferPayload: TransferInterface = {
    currentLot: {
      id: ""
    },
    toUsername: "",
    toOrganization: ""
  }

  ORG_NAME_ARRAY = ORG_NAME_ARRAY

  async transfer (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      await this.$store.dispatch("transfer/transfer", this.transferPayload)
      alert(`Successfully transferred to ${this.transferPayload.toOrganization}`)
    } catch (error) {
      this.$showErrorMessage(error)
    }
  }
}
</script>
