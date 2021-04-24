<template>
  <v-main>
    <v-container class="transfer-container d-flex justify-center">
      <OTransfer />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OTransfer from "~/components/organisms/OTransfer.vue"

@Component({
  name: "TTransfer",
  components: {
    OTransfer
  }
})
export default class TTransfer extends Vue {}

</script>

<style scoped lang="scss">
  .transfer-container {
    max-width: 500px;
    height: 100vh;
  }
</style>
