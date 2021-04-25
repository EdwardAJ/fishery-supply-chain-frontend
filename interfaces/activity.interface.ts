import { FisheryProductLotInterface } from "./fishery-product-lot.interface"

export interface ActivityInterface {
  id: string;
  parentIds: string[] | null;
  lot: FisheryProductLotInterface,
  owner: {
    username: string,
    organizationName: string
  },
  createdAt: string
}
