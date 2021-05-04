<template>
  <v-navigation-drawer height="100vh" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-text="organization" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle
          class="logout"
          @click="logout"
          v-text="'Log out'" />
      </v-list-item-content>
    </v-list-item>
    <v-list>
      <v-list-item
        v-for="(item, index) in listItems"
        :key="index"
        :to="item.to">
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Getter, mixins } from "nuxt-property-decorator"
import { ListItemInterface } from "~/interfaces/navbar.interface"
import { RouteMixin } from "~/mixins/route.mixin"
import { getListItems } from "~/utils/navbar.util"

@Component({
  name: "ONavbar"
})
export default class ONavbar extends mixins(RouteMixin) {
  @Getter("auth/getOrganization") organization: string
  @Getter("auth/getRole") role: string

  listItems: Array<ListItemInterface> = []

  mounted () {
    this.listItems = getListItems(this.organization, this.role)
  }

  logout () {
    this.$store.dispatch("auth/logout")
    this.$router.replace(this.toRoute(this.RoutePaths.LOGIN))
  }
}
</script>

<style scoped lang="scss">
  .logout {
    cursor: pointer
  }
</style>
