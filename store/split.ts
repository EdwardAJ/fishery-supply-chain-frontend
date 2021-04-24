import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { SplitInterface } from "~/interfaces/split.interface"
import { ActivityInterface } from "~/interfaces/activity.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Split extends VuexModule {
  @Action({ rawError: true })
  async split (payload: SplitInterface): Promise<ActivityInterface[]> {
    const { data: { activities } } = await $axios.$post("/activity/split", payload)
    return activities
  }
}
