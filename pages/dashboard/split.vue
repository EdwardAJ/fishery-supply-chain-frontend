<template>
  <TSplit />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TSplit from "~/components/templates/TSplit.vue"
@Component({
  name: "SplitPage",
  components: { TSplit }
})
export default class SplitPage extends Vue {}
</script>
