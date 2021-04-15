import { isNotEmpty } from "./validation.util"

const isNotEmptyRule: Array<Function> = [
  (str: string) => isNotEmpty(str) || "Field cannot be empty"
]

export {
  isNotEmptyRule
}
