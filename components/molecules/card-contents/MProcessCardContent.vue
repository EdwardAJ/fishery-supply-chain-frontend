
<template>
  <div>
    <p class="mt-n3" v-html="`ID Supplier: <b> ${activity.supplier.id} </b>`" />
    <p class="mt-n3" v-html="`Nama Supplier: <b> ${activity.supplier.name} </b>`" />
    <p class="mt-n3" v-html="`ID Gudang: <b> ${activity.storage.id} </b>`" />
    <p class="mt-n3" v-html="`Nama Gudang: <b> ${activity.storage.name} </b>`" />
    <p class="mt-n3" v-html="`ID Produk Olahan: <b> ${activity.processTo.id} </b>`" />
    <p class="mt-n3" v-html="`Nama Produk Olahan: <b> ${activity.processTo.name} </b>`" />
    <p class="mt-n3" v-html="`Lokasi: <b> ${activity.location.latitude}, ${activity.location.longitude} </b>`" />
  </div>
</template>
<script lang="ts">

import { Vue, Prop, Component } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"

@Component({
  name: "MProcessCardContent"
})
export default class MProcessCardContent extends Vue {
  @Prop({ type: Object, required: true }) activity: ActivityInterface
}
</script>
