interface GPSLocationInterface {
  latitude: number,
  longitude: number
}

interface FisheryProductInterface {
  weight: number,
  commodityType: string
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
  fisheryProduct: FisheryProductInterface,
  vessel: VesselInterface,
  harbor: HarborInterface
}

export {
  CaptureInterface
}
