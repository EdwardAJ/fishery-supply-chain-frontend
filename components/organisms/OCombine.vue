<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="combine"
        ref="form"
        lazy-validation
        @submit.prevent="combine">
        <!-- Add button -->
        <v-row class="mb-6">
          <v-col class="text-right">
            <v-btn
              small
              class="mb-n4"
              @click="addLot">
              Tambah ID
            </v-btn>
          </v-col>
        </v-row>
        <!-- Fish lot Id and delete button -->
        <div
          v-for="(lot, lotIndex) in lots"
          :key="lotIndex"
          class="d-flex">
          <v-text-field
            v-model="lot.id"
            class="mr-5"
            :rules="isNotEmptyRule"
            :label="`ID Ikan ${lotIndex + 1}`"
            type="text" />
          <v-btn
            fab
            x-small
            color="red"
            class="mt-4 white--text"
            @click="deleteLot">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </div>
        <p class="mt-6">
          Informasi ikan baru:
        </p>
        <!-- New lot information -->
        <v-text-field
          v-model="combinePayload.newLot.weight"
          class="mt-4"
          :rules="isNotEmptyRule"
          label="Berat ikan (kg)"
          type="number" />
        <v-text-field
          v-model="combinePayload.newLot.commodityType"
          :rules="isNotEmptyRule"
          label="Tipe komoditas"
          type="text" />
      </v-form>
      <v-row>
        <v-col class="text-right">
          <v-btn
            form="combine"
            class="mt-4"
            type="form"
            color="primary">
            Gabungkan
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script lang="ts">

import { Component, mixins } from "nuxt-property-decorator"
import { FormMixin } from "~/mixins/form.mixin"
import { CombineInterface } from "~/interfaces/combine.interface"

@Component({
  name: "OCombine"
})
export default class OCombine extends mixins(FormMixin) {
  lots = [{
    id: ""
  }]

  combinePayload: CombineInterface = {
    currentLot: {
      ids: []
    },
    newLot: {
      weight: 0,
      commodityType: ""
    }
  }

  addLot (): void {
    this.lots.push({ id: "" })
  }

  deleteLot (lotIndex: number): void {
    this.lots.splice(lotIndex, 1)
  }

  async combine (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      this.combinePayload.currentLot.ids = []
      this.lots.map(({ id }) => this.combinePayload.currentLot.ids.push(id))
      const lotId =
        await this.$store.dispatch("combine/combine", this.combinePayload)
      alert(`Produk ikan tergabung: ${lotId}`)
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>
