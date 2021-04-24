import { FisheryProductLotInterface } from "./fishery-product-lot.interface"

export interface SplitInterface {
  currentLot: {
    id: string
  },
  newLot: FisheryProductLotInterface[]
}
