import { OrgNames } from "~/constants/organization.constant"
import { RoutePaths } from "~/constants/routes.constant"
import { ListItemInterface } from "~/interfaces/navbar.interface"

const BASE_LIST_ITEMS: ListItemInterface[] = [
  {
    title: "Transfer",
    to: { path: RoutePaths.TRANSFER }
  },
  {
    title: "Gabungkan",
    to: { path: RoutePaths.COMBINE }
  },
  {
    title: "Pecahkan",
    to: { path: RoutePaths.SPLIT }
  }
]

// KKP RI
const getMinistryListItems = (): Array<ListItemInterface> => {
  return [
    {
      title: "Daftarkan Admin",
      to: { path: RoutePaths.ENROLL_ADMIN }
    }
  ]
}

const getHarborListItems = (): Array<ListItemInterface> => {
  return [
    ...BASE_LIST_ITEMS,
    {
      title: "Tangkap ikan",
      to: { path: RoutePaths.CAPTURE_FISHERY_PRODUCT }
    }
  ]
}

const getProcessingUnitListItems = (): Array<ListItemInterface> => {
  return [
    ...BASE_LIST_ITEMS,
    {
      title: "Olah Ikan",
      to: { path: RoutePaths.PROCESS }
    }
  ]
}

const getMarketerListItems = (): Array<ListItemInterface> => {
  return [
    ...BASE_LIST_ITEMS,
    {
      title: "Pasarkan Ikan",
      to: { path: RoutePaths.MARKET }
    }
  ]
}

const getListItems = (orgName: string): Array<ListItemInterface> => {
  switch (orgName) {
    case OrgNames.MINSTRY:
      return getMinistryListItems()
    case OrgNames.HARBOR:
      return getHarborListItems()
    case OrgNames.PROCESSING_UNIT:
      return getProcessingUnitListItems()
    case OrgNames.MARKETER:
      return getMarketerListItems()
    default:
      return []
  }
}

export {
  getListItems
}
