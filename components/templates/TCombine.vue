<template>
  <v-main>
    <v-container class="combine-container d-flex justify-center">
      <OCombine />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OCombine from "~/components/organisms/OCombine.vue"

@Component({
  name: "TCombine",
  components: {
    OCombine
  }
})
export default class TCombine extends Vue {}

</script>

<style scoped lang="scss">
  .combine-container {
    max-width: 500px;
    height: 100vh;
  }
</style>
