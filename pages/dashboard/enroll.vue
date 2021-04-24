<template>
  <TEnrollAdmin />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TEnrollAdmin from "~/components/templates/TEnrollAdmin.vue"
@Component({
  name: "EnrollAdminPage",
  components: { TEnrollAdmin }
})
export default class EnrollAdminPage extends Vue {}
</script>
