<template>
  <v-app id="app">
    <nuxt />
    <OSnackbar />
  </v-app>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OSnackbar from "~/components/organisms/OSnackbar.vue"

@Component({
  name: "Default",
  components: {
    OSnackbar
  }
})
export default class Default extends Vue {}
</script>
