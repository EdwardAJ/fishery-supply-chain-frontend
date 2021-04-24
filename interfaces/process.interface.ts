import { GPSLocationInterface } from "./gps-location.interface"

interface ProcessInterface {
  currentLot: {
    id: string
  },
  supplier: {
    id: string,
    name: string
  },
  storage: {
    id: string,
    name: string
  },
  processTo: {
    id: string,
    name: string
  }
  location: GPSLocationInterface
}

export {
  ProcessInterface
}
