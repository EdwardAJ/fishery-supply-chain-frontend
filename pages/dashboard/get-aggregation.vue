<template>
  <TGetAggregation />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TGetAggregation from "~/components/templates/TGetAggregation.vue"
@Component({
  name: "GetAggregationPage",
  components: { TGetAggregation }
})
export default class GetAggregationPage extends Vue {}
</script>
