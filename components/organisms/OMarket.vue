<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="market"
        ref="form"
        lazy-validation
        @submit.prevent="market">
        <v-text-field
          v-model="marketPayload.currentLot.id"
          :rules="isNotEmptyRule"
          label="ID Ikan Sekarang" />
        <v-text-field
          v-model="marketPayload.location.latitude"
          :rules="isNotEmptyRule"
          label="Latitude"
          type="number" />
        <v-text-field
          v-model="marketPayload.location.longitude"
          :rules="isNotEmptyRule"
          label="Longitude"
          type="number" />
        <v-text-field
          v-model="marketPayload.marketTo.id"
          :rules="isNotEmptyRule"
          label="ID Tujuan Pasar" />
        <v-text-field
          v-model="marketPayload.marketTo.name"
          :rules="isNotEmptyRule"
          label="Nama Tujuan Pasar" />
      </v-form>
      <v-row>
        <v-col class="text-right">
          <v-btn
            class="mt-4"
            form="market"
            type="form"
            color="primary">
            Pasarkan
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { MarketInterface } from "~/interfaces/market.interface"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "OMarket"
})
export default class OMarket extends mixins(FormMixin) {
  marketPayload: MarketInterface = {
    currentLot: {
      id: ""
    },
    location: {
      longitude: 0,
      latitude: 0
    },
    marketTo: {
      id: "",
      name: ""
    }
  }

  async market (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      await this.$store.dispatch("market/market", this.marketPayload)
      alert("Ikan berhasil dipasarkan!")
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>
