<template>
  <v-main>
    <v-container class="split-container d-flex justify-center">
      <OSplit />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OSplit from "~/components/organisms/OSplit.vue"

@Component({
  name: "TSplit",
  components: {
    OSplit
  }
})
export default class TSplit extends Vue {}

</script>

<style scoped lang="scss">
  .split-container {
    max-width: 1000px;
    height: 100vh;
  }
</style>
