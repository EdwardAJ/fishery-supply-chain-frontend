import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { CombineInterface } from "~/interfaces/combine.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Combine extends VuexModule {
  @Action({ rawError: true })
  async combine (payload: CombineInterface): Promise<string> {
    const { data: { activity: { lot } } } =
      await $axios.$post("/activity/combine", payload)
    return lot.id
  }
}
