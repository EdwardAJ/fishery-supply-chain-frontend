<template>
  <v-main>
    <v-container class="process-container d-flex justify-center">
      <OProcess />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OProcess from "~/components/organisms/OProcess.vue"

@Component({
  name: "TProcess",
  components: {
    OProcess
  }
})
export default class TProcess extends Vue {}

</script>

<style scoped lang="scss">
  .process-container {
    max-width: 500px;
    height: 100vh;
  }
</style>
