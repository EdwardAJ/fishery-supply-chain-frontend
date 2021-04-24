import { GPSLocationInterface } from "./gps-location.interface"

interface MarketInterface {
  currentLot: {
    id: string
  },
  marketTo: {
    id: string,
    name: string
  },
  location: GPSLocationInterface
}

export {
  MarketInterface
}
