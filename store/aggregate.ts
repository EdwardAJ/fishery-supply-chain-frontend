import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { AggregateInterface } from "~/interfaces/aggregate.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Aggregate extends VuexModule {
  public totalWeight: number = 0

  @Mutation
  setTotalWeight (totalWeight: number): void {
    this.totalWeight = totalWeight
  }

  @Action({ rawError: true, commit: "setTotalWeight" })
  async get (params: AggregateInterface): Promise<number> {
    const { data: { totalWeight } } = await $axios.$get("/aggregation/", { params })
    return totalWeight
  }

  get getTotalWeight (): number {
    return this.totalWeight
  }
}
