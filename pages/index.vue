<template>
  <nuxt-child />
</template>

<script lang="ts">

import { Vue, Component } from "nuxt-property-decorator"

@Component({
  name: "MainPage",
  middleware: ["authenticated"]
})
export default class MainPage extends Vue {}
</script>
