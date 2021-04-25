<template>
  <v-card :max-width="width" :min-width="width">
    <v-card-text>
      <p v-text="'ID Ikan'" />
      <p class="mt-n3 text-subtitle-2" v-text="productLot.id" />
      <p v-text="'Berat (kg)'" />
      <p class="mt-n3 text-subtitle-2" v-text="productLot.weight" />
      <p v-text="'Tipe Komoditas'" />
      <p class="mt-n3 text-subtitle-2" v-text="productLot.commodityType" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">

import { Vue, Prop, Component } from "nuxt-property-decorator"
import { FisheryProductLotInterface } from "~/interfaces/fishery-product-lot.interface"
@Component({
  name: "MProductLot"
})
export default class MProductLot extends Vue {
  @Prop({ type: Object, required: true }) productLot: FisheryProductLotInterface
  @Prop({ type: String, default: "210" }) width: string
}
</script>
