import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { MarketInterface } from "~/interfaces/market.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Market extends VuexModule {
  @Action({ rawError: true })
  async market (payload: MarketInterface): Promise<void> {
    await $axios.$post("/activity/market", payload)
  }
}
