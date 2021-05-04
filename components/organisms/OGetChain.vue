<template>
  <v-row>
    <v-col>
      <v-row class="d-flex">
        <v-col>
          <v-form
            id="get-chain"
            ref="form"
            class="d-flex search-bar"
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
          <div class="vis-component">
            <client-only>
              <network
                ref="network"
                :nodes="nodes"
                :edges="edges"
                :options="options"
                @select-node="onNodeSelected" />
            </client-only>
          </div>
        </v-col>
        <v-col>
          <!-- Result -->
          <v-row>
            <v-col>
              <div v-for="(activity) in chain" :key="activity.id" class="mb-4">
                <MActivityCard
                  v-if="activeActivityId === activity.id"
                  :activity="activity"
                  @onClickParentIdObject="getChainByParentActivityIdAndChainId" />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Getter, Watch, mixins } from "nuxt-property-decorator"
import { ActivityInterface } from "~/interfaces/activity.interface"
import { ParentInterface } from "~/interfaces/parent.interface"
import { FormMixin } from "~/mixins/form.mixin"
import MActivityCard from "~/components/molecules/MActivityCard.vue"
import { EdgeInterface, NodeInterface } from "~/interfaces/chain.interface"

@Component({
  name: "OGetChain",
  components: {
    MActivityCard
  }
})
export default class OGetChain extends mixins(FormMixin) {
  @Getter("chain/getChain") chain: ActivityInterface[]

  @Watch("chain")
  onChainFetched () {
    this.nodes = []
    this.edges = []

    for (const activity of this.chain) {
      this.nodes.push({
        id: activity.id,
        label: `${activity.id.slice(0, 10)}...\n${activity.name}`
      })
      if (activity.parentIds?.length) {
        for (const activityParentId of activity.parentIds) {
          this.edges.push(
            {
              id: `${activityParentId}-${activity.id}`,
              from: activityParentId,
              to: activity.id
            })
        }
      }
    }
  }

  lotId: string = ""
  nodes: NodeInterface[] = []
  edges: EdgeInterface[] = []
  options = {
    nodes: {
      shape: "circle"
    },
    edges: {
      arrows: {
        to: { enabled: true }
      },
      length: 200
    }
  }

  activeActivityId: string = ""

  onNodeSelected ({ nodes }: { nodes: string[] }) {
    this.activeActivityId = nodes[0]
  }

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

<style lang="scss">
  @import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";

  .search-bar {
    max-width: 500px;
  }

  .vis-component {
    .vis-network {
      width: 500px !important;
      height: 100vh !important;
    }
  }
</style>
