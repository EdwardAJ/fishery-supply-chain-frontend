<template>
  <TGetChain />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TGetChain from "~/components/templates/TGetChain.vue"
@Component({
  name: "GetChainPage",
  components: { TGetChain }
})
export default class GetChainPage extends Vue {}
</script>
