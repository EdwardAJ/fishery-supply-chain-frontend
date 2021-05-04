<template>
  <v-main>
    <v-container class="register-container d-flex justify-center">
      <ORegister />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import ORegister from "~/components/organisms/ORegister.vue"

@Component({
  name: "TRegister",
  components: {
    ORegister
  }
})
export default class TRegister extends Vue {}

</script>

<style scoped lang="scss">
  .register-container {
    max-width: 500px;
    height: 100vh;
  }
</style>
