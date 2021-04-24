<template>
  <TCapture />
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TCapture from "~/components/templates/TCapture.vue"
@Component({
  name: "CapturePage",
  components: { TCapture }
})
export default class CapturePage extends Vue {}

</script>
