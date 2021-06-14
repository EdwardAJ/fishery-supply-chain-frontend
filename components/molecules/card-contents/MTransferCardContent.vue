
<template>
  <div>
    <p
      class="mt-n3"
      v-html="`Dari: <b> ${activity.from.username} / ${activity.from.organization} </b>`" />
  </div>
</template>
<script lang="ts">

import { Vue, Prop, Component } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"

@Component({
  name: "MTransferCardContent"
})
export default class MTransferCardContent extends Vue {
  @Prop({ type: Object, required: true }) activity: ActivityInterface
}
</script>
