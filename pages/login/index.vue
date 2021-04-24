<template>
  <TLogin />
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TLogin from "~/components/templates/TLogin.vue"

@Component({
  name: "LoginPage",
  middleware: ["not-authenticated"],
  components: {
    TLogin
  }
})
export default class LoginPage extends Vue {}
</script>
