import { Location } from "vue-router"
import { Vue, Component } from "nuxt-property-decorator"
import { RouteNames } from "~/constants/routes.constant"

type routeNameEnumKey = keyof typeof RouteNames
type Dictionary<T> = { [key: string]: T }

@Component({
  name: "RouteMixin"
})
export class RouteMixin extends Vue {
  public RouteNames: { [x in routeNameEnumKey]: RouteNames } = RouteNames

  public toRoute (
    name: RouteNames,
    params ?: Dictionary<string>,
    query ?: Dictionary<string | (string | null)[]>
  ): Location {
    return { name, params, query }
  }
}
