import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { SplitInterface } from "~/interfaces/split.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Split extends VuexModule {
  @Action({ rawError: true })
  async split (payload: SplitInterface): Promise<string> {
    const res =
      await $axios.$post("/activity/split", payload)
    console.log("res: ", res)
    return res
  }
}
