interface FisheryProductLotInterface {
  id?: string,
  weight: number,
  commodityType: string,
  activitiesChainId?: string,
  activityId?: string,
  harbor?: {
    id: string,
    name: string
  },
  vessel?: {
    id: string,
    name: string
  }
}

export {
  FisheryProductLotInterface
}
