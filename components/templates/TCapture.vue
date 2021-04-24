<template>
  <v-main>
    <v-container class="capture-container d-flex justify-center">
      <OCapture />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OCapture from "~/components/organisms/OCapture.vue"

@Component({
  name: "TCapture",
  components: {
    OCapture
  }
})
export default class TCapture extends Vue {}

</script>

<style scoped lang="scss">
  .capture-container {
    max-width: 300px;
    height: 100vh;
  }
</style>
