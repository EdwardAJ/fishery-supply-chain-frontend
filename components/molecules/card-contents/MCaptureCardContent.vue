
<template>
  <div>
    <p class="mt-n3" v-html="`ID Pelabuhan: <b> ${activity.harbor.id} </b>`" />
    <p class="mt-n3" v-html="`Nama Pelabuhan: <b> ${activity.harbor.name} </b>`" />
    <p class="mt-n3" v-html="`ID Kapal: <b> ${activity.vessel.id} </b>`" />
    <p class="mt-n3" v-html="`Nama Kapal: <b> ${activity.vessel.name} </b>`" />
    <p class="mt-n3" v-html="`Lokasi: <b> ${activity.location.latitude}, ${activity.location.longitude} </b>`" />
  </div>
</template>
<script lang="ts">

import { Vue, Prop, Component } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"

@Component({
  name: "MCaptureCardContent"
})
export default class MCaptureCardContent extends Vue {
  @Prop({ type: Object, required: true }) activity: ActivityInterface
}
</script>
