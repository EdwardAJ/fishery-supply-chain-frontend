<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="split"
        ref="form"
        lazy-validation
        @submit.prevent="split">
        <!-- Current lot -->
        <v-text-field
          v-model="splitPayload.currentLot.id"
          class="mb-5"
          :rules="isNotEmptyRule"
          label="ID Ikan Sekarang" />
        <v-row class="mt-4">
          <v-col class="d-flex">
            <p v-text="'Pecah menjadi:'" />
            <!-- Add button -->
            <v-row>
              <v-col class="text-right mt-n2">
                <v-btn
                  small
                  @click="addNewLot">
                  Tambah Ikan
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- New lots information -->
        <v-row>
          <v-col
            v-for="(newLot, newLotIndex) in newLots"
            :key="newLotIndex"
            class="new-lot ml-2 mb-2">
            <v-row class="d-flex">
              <v-col>
                <v-text-field
                  v-model="newLot.weight"
                  :rules="isNotEmptyRule"
                  label="Berat ikan (kg)"
                  type="number" />
                <v-text-field
                  v-model="newLot.commodityType"
                  :rules="isNotEmptyRule"
                  label="Tipe komoditas" />
              </v-col>
              <v-btn
                fab
                x-small
                color="red"
                class="white--text"
                @click="deleteNewLot">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
      <v-row class="mt-6">
        <v-col class="text-right">
          <v-btn
            form="split"
            type="form"
            color="primary">
            Pecahkan
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <v-col
          v-for="(resultLot) in resultLotsFromBackend"
          :key="resultLot.id"
          class="ml-2 mb-2">
          <MProductLotCard :product-lot="resultLot" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script lang="ts">

import { Component, mixins } from "nuxt-property-decorator"
import { FormMixin } from "~/mixins/form.mixin"
import { SplitInterface } from "~/interfaces/split.interface"
import { FisheryProductLotInterface } from "~/interfaces/fishery-product-lot.interface"
import MProductLotCard from "~/components/molecules/MProductLotCard.vue"

@Component({
  name: "OSplit",
  components: {
    MProductLotCard
  }
})
export default class OSplit extends mixins(FormMixin) {
  newLots = [{
    weight: 0,
    commodityType: ""
  }]

  splitPayload: SplitInterface = {
    currentLot: {
      id: ""
    },
    newLots: []
  }

  resultLotsFromBackend: FisheryProductLotInterface[] = []

  addNewLot (): void {
    this.newLots.push({ weight: 0, commodityType: "" })
  }

  deleteNewLot (lotIndex: number): void {
    this.newLots.splice(lotIndex, 1)
  }

  async split (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      this.splitPayload.newLots = this.newLots
      this.resultLotsFromBackend = []
      const activities = await this.$store.dispatch("split/split", this.splitPayload)
      alert("Pemecahan ikan berhasil!")
      activities.map(({ lot }) =>
        this.resultLotsFromBackend.push({
          id: lot.id, weight: lot.weight, commodityType: lot.commodityType
        }))
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-lot {
    background-color: #f5f5f5;
    max-width: 240px;
    min-width: 240px;
  }
</style>
