import { Vue, Component } from "nuxt-property-decorator"
import { isNotEmptyRule } from "~/utils/rules.util"

@Component({
  name: "FormMixin"
})
export class FormMixin extends Vue {
  isNotEmptyRule = isNotEmptyRule
}