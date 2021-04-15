import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators"
import { SnackbarDataInterface } from "~/interfaces/snackbar.interface"

@Module({
  namespaced: true,
  stateFactory: true
})
export default class Snackbar extends VuexModule {
  snackbarData: SnackbarDataInterface = {
    status: false,
    text: "",
    color: "error"
  }

  @Mutation
  setSnackbarData (snackbarData: SnackbarDataInterface): void {
    this.snackbarData = snackbarData
  }

  @Action({ rawError: true, commit: "setSnackbarData" })
  showSuccessSnackbar (text: string): SnackbarDataInterface {
    return {
      status: true,
      text,
      color: "success"
    }
  }

  @Action({ rawError: true, commit: "setSnackbarData" })
  showErrorSnackbar (text: string): SnackbarDataInterface {
    return {
      status: true,
      text,
      color: "error"
    }
  }

  get getSnackbarData (): SnackbarDataInterface {
    return this.snackbarData
  }
}
