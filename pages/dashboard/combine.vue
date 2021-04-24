<template>
  <TCombine />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TCombine from "~/components/templates/TCombine.vue"
@Component({
  name: "CombinePage",
  components: { TCombine }
})
export default class CombinePage extends Vue {}
</script>
