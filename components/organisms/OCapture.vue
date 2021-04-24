<template>
  <v-row class="d-flex justify-center align-center">
    <v-col>
      <v-form
        id="capture"
        ref="form"
        lazy-validation
        @submit.prevent="capture">
        <v-text-field
          v-model="capturePayload.location.latitude"
          :rules="isNotEmptyRule"
          label="Latitude"
          type="number" />
        <v-text-field
          v-model="capturePayload.location.longitude"
          :rules="isNotEmptyRule"
          label="Longitude"
          type="number" />
        <v-text-field
          v-model="capturePayload.fisheryProduct.weight"
          :rules="isNotEmptyRule"
          label="Berat (kg)"
          type="number" />
        <v-text-field
          v-model="capturePayload.fisheryProduct.commodityType"
          :rules="isNotEmptyRule"
          label="Tipe Komoditas"
          type="string" />
        <v-text-field
          v-model="capturePayload.vessel.id"
          :rules="isNotEmptyRule"
          label="ID Kapal"
          type="string" />
        <v-text-field
          v-model="capturePayload.vessel.name"
          :rules="isNotEmptyRule"
          label="Nama Kapal"
          type="string" />
        <v-text-field
          v-model="capturePayload.harbor.id"
          :rules="isNotEmptyRule"
          label="ID Pelabuhan"
          type="string" />
        <v-text-field
          v-model="capturePayload.harbor.name"
          :rules="isNotEmptyRule"
          label="Nama Pelabuhan"
          type="string" />
      </v-form>
      <v-btn
        class="mt-4"
        form="capture"
        type="form"
        color="primary">
        Capture
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator"
import { CaptureInterface } from "~/interfaces/capture.interface"
import { RouteMixin } from "~/mixins/route.mixin"
import { FormMixin } from "~/mixins/form.mixin"

@Component({
  name: "OCapture"
})
export default class OCapture extends mixins(FormMixin, RouteMixin) {
  capturePayload: CaptureInterface = {
    location: {
      longitude: 0,
      latitude: 0
    },
    fisheryProduct: {
      weight: 0,
      commodityType: ""
    },
    vessel: {
      id: "",
      name: ""
    },
    harbor: {
      id: "",
      name: ""
    }
  }

  async capture (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      const lotId =
        await this.$store.dispatch("capture/capture", this.capturePayload)
      alert(`Id Ikan: ${lotId}`)
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>
