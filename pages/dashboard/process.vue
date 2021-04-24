<template>
  <TProcess />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TProcess from "~/components/templates/TProcess.vue"
@Component({
  name: "ProcessPage",
  components: { TProcess }
})
export default class ProcessPage extends Vue {}
</script>
