import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { ProcessInterface } from "~/interfaces/process.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Process extends VuexModule {
  @Action({ rawError: true })
  async process (payload: ProcessInterface): Promise<string> {
    const { data: { activity: { lot } } } =
      await $axios.$post("/activity/process", payload)
    return lot.id
  }
}
