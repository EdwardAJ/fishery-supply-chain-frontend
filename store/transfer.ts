import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { TransferInterface } from "~/interfaces/transfer.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Transfer extends VuexModule {
  @Action({ rawError: true })
  async transfer (payload: TransferInterface): Promise<void> {
    await $axios.$post("/activity/transfer", payload)
  }
}
