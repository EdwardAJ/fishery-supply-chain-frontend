<template>
  <v-main>
    <v-container class="enroll-admin-container d-flex justify-center">
      <OEnrollAdmin />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OEnrollAdmin from "~/components/organisms/OEnrollAdmin.vue"

@Component({
  name: "TEnrollAdmin",
  components: {
    OEnrollAdmin
  }
})
export default class TEnrollAdmin extends Vue {}

</script>

<style scoped lang="scss">
  .enroll-admin-container {
    max-width: 300px;
    height: 100vh;
  }
</style>
