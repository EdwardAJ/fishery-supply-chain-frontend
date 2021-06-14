import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { ChainParamsInterface } from "~/interfaces/chain.interface"
import { ActivityInterface } from "~/interfaces/activity.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Chain extends VuexModule {
  public chain: ActivityInterface[] = []

  @Mutation
  setChain (chain: ActivityInterface[]): void {
    this.chain = chain
  }

  @Action({ rawError: true, commit: "setChain" })
  async get (params: ChainParamsInterface): Promise<ActivityInterface[]> {
    const { data: { chain } } =
      await $axios.$get("/activity/", { params })
    console.log("chain: ", chain)
    return chain
  }

  get getChain (): ActivityInterface[] {
    return this.chain
  }
}
