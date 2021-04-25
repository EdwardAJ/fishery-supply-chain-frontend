<template>
  <v-container v-if="snackbar && snackbar.status">
    <v-snackbar
      v-model="snackbar.status"
      top
      :color="snackbar.color"
      :timeout="snackbar.timeout ? snackbar.timeout: timeout">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch, Getter } from "nuxt-property-decorator"
import { SnackbarDataInterface } from "~/interfaces/snackbar.interface"

@Component({
  name: "Snackbar"
})
export default class SnackBar extends Vue {
  @Getter("snackbar/getSnackbarData") snackbarData: SnackbarDataInterface
  timeout = 1500

  snackbar: SnackbarDataInterface = {
    status: false,
    text: "",
    color: ""
  }

  // Timeout is being mutated by v-snackbar component, so snackbarData must be copied to snackbar.
  @Watch("snackbarData", { immediate: true })
  updateSnackbar () {
    // Copy snackbarData (store object) to this.snackbar
    this.snackbar = { ...(this as any).snackbarData }
  }
}
</script>
