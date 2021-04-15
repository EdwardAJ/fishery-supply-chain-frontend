import { getErrorMessage } from "~/utils/message.util"

export default ({ store }, inject: any) => {
  inject("showErrorMessage", (error: any) => {
    const errorMessage = getErrorMessage(error)
    store.dispatch("snackbar/showErrorSnackbar", errorMessage)
  })

  inject("showSuccessMessage", (message: string) => {
    store.dispatch("snackbar/showSuccessSnackbar", message)
  })
}
