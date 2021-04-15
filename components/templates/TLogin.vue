<template>
  <v-main>
    <v-container class="login-container d-flex justify-center">
      <OLogin />
    </v-container>
  </v-main>
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"
import OLogin from "~/components/organisms/OLogin.vue"

@Component({
  name: "TLogin",
  components: {
    OLogin
  }
})
export default class TLogin extends Vue {}

</script>

<style scoped lang="scss">
  .login-container {
    max-width: 300px;
    height: 100vh;
  }
</style>
