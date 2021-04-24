<template>
  <TMarket />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TMarket from "~/components/templates/TMarket.vue"
@Component({
  name: "MarketPage",
  components: { TMarket }
})
export default class MarketPage extends Vue {}
</script>
