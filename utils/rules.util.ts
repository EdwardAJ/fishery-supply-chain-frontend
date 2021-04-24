import { isNotEmpty } from "./validation.util"

const isNotEmptyRule: Array<Function> = [
  (str: string) => isNotEmpty(str) || "Form tidak boleh kosong"
]

export {
  isNotEmptyRule
}
