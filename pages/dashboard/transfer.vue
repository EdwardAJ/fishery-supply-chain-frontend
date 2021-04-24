<template>
  <TTransfer />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TTransfer from "~/components/templates/TTransfer.vue"
@Component({
  name: "TransferPage",
  components: { TTransfer }
})
export default class TransferPage extends Vue {}
</script>
