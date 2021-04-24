import { VuexModule, Module, Action } from "vuex-module-decorators"
import { $axios } from "~/utils/api.util"
import { CaptureInterface } from "~/interfaces/capture.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Capture extends VuexModule {
  @Action({ rawError: true })
  async capture (payload: CaptureInterface): Promise<string> {
    const { data: { activity: { lot } } } =
      await $axios.$post("/activity/capture", payload)
    return lot.id
  }
}
