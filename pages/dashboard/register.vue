<template>
  <TRegister />
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TRegister from "~/components/templates/TRegister.vue"
@Component({
  name: "RegisterPage",
  components: { TRegister }
})
export default class RegisterPage extends Vue {}
</script>
