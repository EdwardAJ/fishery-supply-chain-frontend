<template>
  <v-main>
    <v-container class="aggregation-container d-flex justify-center">
      <OGetAggregation />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OGetAggregation from "~/components/organisms/OGetAggregation.vue"

@Component({
  name: "TGetAggregation",
  components: {
    OGetAggregation
  }
})
export default class TGetAggregation extends Vue {}

</script>

<style scoped lang="scss">
  .aggregation-container {
    max-width: 1000px;
    height: 100vh;
  }
</style>
