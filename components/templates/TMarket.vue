<template>
  <v-main>
    <v-container class="market-container d-flex justify-center">
      <OMarket />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OMarket from "~/components/organisms/OMarket.vue"

@Component({
  name: "TMarket",
  components: {
    OMarket
  }
})
export default class TMarket extends Vue {}

</script>

<style scoped lang="scss">
  .market-container {
    max-width: 500px;
    height: 100vh;
  }
</style>
