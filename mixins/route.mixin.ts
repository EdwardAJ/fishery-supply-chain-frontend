import { Location } from "vue-router"
import { Vue, Component } from "nuxt-property-decorator"
import { RoutePaths } from "~/constants/routes.constant"

type routeNameEnumKey = keyof typeof RoutePaths
type Dictionary<T> = { [key: string]: T }

@Component({
  name: "RouteMixin"
})
export class RouteMixin extends Vue {
  public RoutePaths: { [x in routeNameEnumKey]: RoutePaths } = RoutePaths

  public toRoute (
    path: RoutePaths,
    params ?: Dictionary<string>,
    query ?: Dictionary<string | (string | null)[]>
  ): Location {
    return { path, params, query }
  }
}
