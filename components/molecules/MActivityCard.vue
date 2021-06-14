<template>
  <v-card>
    <v-card-text>
      <p v-html="`ID Aktivitas: <b> ${activity.id} </b>`" />
      <p class="mt-n3" v-html="`Nama Aktivitas: <b> ${activity.name} </b>`" />
      <MCaptureCardContent
        v-if="activity.name === 'Penangkapan'"
        :activity="activity" />
      <MTransferCardContent
        v-if="activity.name === 'Transfer'"
        :activity="activity" />
      <MProcessCardContent
        v-if="activity.name === 'Olah'"
        :activity="activity" />
      <MMarketCardContent
        v-if="activity.name === 'Pasarkan'"
        :activity="activity" />
      <p class="mt-n3" v-html="`Dibuat pada: <b> ${activity.createdAt} </b>`" />
      <p class="mt-n3" v-text="'ID Aktivitas Sebelumnya:'" />
      <div v-if="activity.parents">
        <p
          v-for="(parent) in activity.parents"
          :key="parent.activityId"
          class="mt-n3 parent-id-style"
          @click="onClickParentIdObject(parent)"
          v-html="`<b> ${parent.activityId} </b>`" />
      </div>
      <div v-else>
        <p
          v-for="(id) in activity.parentIds"
          :key="id"
          class="mt-n3"
          v-html="`<b> ${id} </b>`" />
      </div>
      <p v-text="'Informasi Ikan'" />
      <p class="mt-n3" v-html="`ID: <b> ${activity.lot.id} </b>`" />
      <p class="mt-n3" v-html="`Berat: <b> ${activity.lot.weight} kg </b>`" />
      <p class="mt-n3" v-html="`Tipe Komoditas: <b> ${activity.lot.commodityType} </b>`" />
      <p v-if="activity.name === 'Pasarkan'" v-html="`Pemilik: <b> Pasar </b>`" />
      <p
        v-else
        class="mt-n3"
        v-html="`Pemilik: <b> ${activity.lot.owner.username} / ${activity.lot.owner.organization} </b>`" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">

import { Vue, Prop, Component } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"

import MCaptureCardContent from "~/components/molecules/card-contents/MCaptureCardContent.vue"
import MTransferCardContent from "~/components/molecules/card-contents/MTransferCardContent.vue"
import MProcessCardContent from "~/components/molecules/card-contents/MProcessCardContent.vue"
import MMarketCardContent from "~/components/molecules/card-contents/MMarketCardContent.vue"
import { ParentInterface } from "~/interfaces/parent.interface"

@Component({
  name: "MActivityCard",
  components: {
    MCaptureCardContent,
    MTransferCardContent,
    MProcessCardContent,
    MMarketCardContent
  }
})
export default class MActivityCard extends Vue {
  @Prop({ type: Object, required: true }) activity: ActivityInterface

  onClickParentIdObject (parentIdObject: ParentInterface) {
    this.$emit("onClickParentIdObject", parentIdObject)
  }
}
</script>

<style scoped lang="scss">
  .parent-id-style {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
