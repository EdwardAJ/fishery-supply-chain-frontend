<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="process"
        ref="form"
        lazy-validation
        @submit.prevent="process">
        <v-text-field
          v-model="processPayload.currentLot.id"
          :rules="isNotEmptyRule"
          label="ID Ikan Sekarang" />
        <v-text-field
          v-model="processPayload.location.latitude"
          :rules="isNotEmptyRule"
          label="Latitude"
          type="number" />
        <v-text-field
          v-model="processPayload.location.longitude"
          :rules="isNotEmptyRule"
          label="Longitude"
          type="number" />
        <v-text-field
          v-model="processPayload.supplier.id"
          :rules="isNotEmptyRule"
          label="ID Supplier" />
        <v-text-field
          v-model="processPayload.supplier.name"
          :rules="isNotEmptyRule"
          label="Nama Supplier" />
        <v-text-field
          v-model="processPayload.storage.id"
          :rules="isNotEmptyRule"
          label="ID Gudang" />
        <v-text-field
          v-model="processPayload.storage.name"
          :rules="isNotEmptyRule"
          label="Nama Gudang" />
        <v-text-field
          v-model="processPayload.processTo.id"
          :rules="isNotEmptyRule"
          label="ID Produk Olahan" />
        <v-text-field
          v-model="processPayload.processTo.name"
          :rules="isNotEmptyRule"
          label="Nama Produk Olahan" />
      </v-form>
      <v-row>
        <v-col class="text-right">
          <v-btn
            class="mt-4"
            form="process"
            type="form"
            color="primary">
            Olah
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { ProcessInterface } from "~/interfaces/process.interface"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "OProcess"
})
export default class OProcess extends mixins(FormMixin) {
  processPayload: ProcessInterface = {
    currentLot: {
      id: ""
    },
    location: {
      longitude: 0,
      latitude: 0
    },
    supplier: {
      id: "",
      name: ""
    },
    storage: {
      id: "",
      name: ""
    },
    processTo: {
      id: "",
      name: ""
    }
  }

  async process (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      await this.$store.dispatch("process/process", this.processPayload)
      alert("Ikan berhasil diolah!")
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>
