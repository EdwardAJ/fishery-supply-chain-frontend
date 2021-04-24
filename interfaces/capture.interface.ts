import { FisheryProductLotInterface } from "./fishery-product-lot.interface";

interface GPSLocationInterface {
  latitude: number,
  longitude: number
}

interface VesselInterface {
  id: string,
  name: string
}

interface HarborInterface {
  id: string,
  name: string
}

interface CaptureInterface {
  location: GPSLocationInterface,
  fisheryProduct: FisheryProductLotInterface,
  vessel: VesselInterface,
  harbor: HarborInterface
}

export {
  CaptureInterface
}
