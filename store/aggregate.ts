import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { CaptureInterface } from "~/interfaces/capture.interface"
import { AggregateInterface } from "~/interfaces/aggregate.interface"
import { FisheryProductLotInterface } from "~/interfaces/fishery-product-lot.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Aggregate extends VuexModule {
  public productLots: FisheryProductLotInterface[] = []

  @Mutation
  setProductLots (productLots: FisheryProductLotInterface[]): void {
    this.productLots = productLots
  }

  @Action({ rawError: true, commit: "setProductLots" })
  async get (params: AggregateInterface): Promise<FisheryProductLotInterface[]> {
    const { data: productLots } = await $axios.$get("/lot/", { params })
    return productLots
  }

  get getProductLots (): FisheryProductLotInterface[] {
    return this.productLots
  }
}
