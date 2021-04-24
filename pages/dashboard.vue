<template>
  <div class="d-flex">
    <ONavbar />
    <nuxt-child />
  </div>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import ONavbar from "~/components/organisms/ONavbar.vue"

@Component({
  name: "DashboardPage",
  middleware: ["authenticated"],
  components: {
    ONavbar
  }
})
export default class DashboardPage extends Vue {}
</script>
