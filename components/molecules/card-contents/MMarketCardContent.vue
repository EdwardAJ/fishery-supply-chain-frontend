
<template>
  <div>
    <p class="mt-n3" v-html="`ID Tujuan Pasar: <b> ${activity.marketTo.id} </b>`" />
    <p class="mt-n3" v-html="`Nama Tujuan Pasar: <b> ${activity.marketTo.name} </b>`" />
    <p class="mt-n3" v-html="`Lokasi: <b> ${activity.location.latitude}, ${activity.location.longitude} </b>`" />
  </div>
</template>
<script lang="ts">

import { Vue, Prop, Component } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"

@Component({
  name: "MMarketCardContent"
})
export default class MMarketCardContent extends Vue {
  @Prop({ type: Object, required: true }) activity: ActivityInterface
}
</script>
