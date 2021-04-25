<template>
  <v-main>
    <v-container class="get-chain-container d-flex justify-center">
      <OGetChain />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OGetChain from "~/components/organisms/OGetChain.vue"

@Component({
  name: "TGetChain",
  components: {
    OGetChain
  }
})
export default class TGetChain extends Vue {}

</script>

<style scoped lang="scss">
  .get-chain-container {
    max-width: 500px;
    height: 100vh;
  }
</style>
