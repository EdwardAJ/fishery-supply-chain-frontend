<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="get-aggregation"
        ref="form"
        lazy-validation
        @submit.prevent="getAggregation">
        <!-- Text fields  -->
        <v-text-field
          v-model="vesselId"
          class="mb-5"
          label="ID Kapal" />
        <v-text-field
          v-model="harborId"
          class="mb-5"
          label="ID Pelabuhan" />
      </v-form>
      <v-row class="mt-6">
        <v-col class="text-right">
          <v-btn
            form="get-aggregation"
            type="form"
            color="primary">
            Dapatkan data
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <v-col
          v-for="(productLot) in productLots"
          :key="productLot.id"
          class="ml-2 mb-2">
          <MProductLotCard :product-lot="productLot" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script lang="ts">

import { Component, mixins, Getter } from "nuxt-property-decorator"
import { FormMixin } from "~/mixins/form.mixin"
import { FisheryProductLotInterface } from "~/interfaces/fishery-product-lot.interface"
import MProductLotCard from "~/components/molecules/MProductLotCard.vue"

@Component({
  name: "OGetAggregation",
  components: {
    MProductLotCard
  }
})
export default class OGetAggregation extends mixins(FormMixin) {
  @Getter("aggregate/getProductLots") productLots: FisheryProductLotInterface[]

  vesselId: string = ""
  harborId: string = ""

  mounted () {
    this.$store.commit("aggregate/setProductLots", [])
  }

  async getAggregation (): Promise<void> {
    try {
      await this.$store.dispatch("aggregate/get", {
        vesselId: this.vesselId, harborId: this.harborId
      })
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>
