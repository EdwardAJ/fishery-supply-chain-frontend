import { FisheryProductLotInterface } from "./fishery-product-lot.interface"

export interface ActivityInterface {
  id: string;
  parentIds: string[] | null;
  lot: FisheryProductLotInterface,
  owner: {
    username: string,
    organization: string
  },
  name: string,
  createdAt: string
}
