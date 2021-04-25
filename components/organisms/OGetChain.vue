<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-form
            id="get-chain"
            ref="form"
            class="d-flex"
            lazy-validation
            @submit.prevent="getChainByLotId">
            <v-text-field
              v-model="lotId"
              :rules="isNotEmptyRule"
              label="ID Ikan" />
            <v-btn
              fab
              small
              form="get-chain"
              class="mt-2"
              type="form"
              color="primary">
              <v-icon> mdi-magnify </v-icon>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      <!-- Result -->
      <v-row>
        <v-col>
          <div v-for="(activity) in chain" :key="activity.id" class="mb-4">
            <MActivityCard
              :activity="activity"
              @onClickParentIdObject="getChainByParentActivityIdAndChainId" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Getter, mixins } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"
import { ParentInterface } from "~/interfaces/parent.interface"
import { FormMixin } from "~/mixins/form.mixin"
import MActivityCard from "~/components/molecules/MActivityCard.vue"

@Component({
  name: "OGetChain",
  components: {
    MActivityCard
  }
})
export default class OGetChain extends mixins(FormMixin) {
  @Getter("chain/getChain") chain: ActivityInterface[]

  lotId: string = ""

  mounted () {
    this.$store.commit("chain/setChain", [])
  }

  async getChainByLotId (): Promise<void> {
    if (!(this.$refs.form as HTMLFormElement).validate()) { return }
    try {
      await this.$store.dispatch("chain/get", {
        lotId: this.lotId
      })
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }

  async getChainByParentActivityIdAndChainId (parentIdObject: ParentInterface): Promise<void> {
    try {
      await this.$store.dispatch("chain/get", {
        chainId: parentIdObject.activitiesChainId,
        activityId: parentIdObject.activityId
      })
    } catch (error) {
      console.log(error)
      this.$showErrorMessage(error)
    }
  }
}
</script>
