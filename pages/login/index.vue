<template>
  <TLogin />
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TLogin from "~/components/templates/TLogin.vue"

@Component({
  name: "Login",
  components: {
    TLogin
  }
})

export default class Login extends Vue {}
</script>
