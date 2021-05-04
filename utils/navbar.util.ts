import { OrgNames, OrgRoles } from "~/constants/organization.constant"
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
  },
  {
    title: "Lihat Rantai",
    to: { path: RoutePaths.GET_CHAIN }
  }
]

const REGISTER_USER_ITEM = {
  title: "Daftarkan Pengguna",
  to: { path: RoutePaths.REGISTER_USER }
}

// KKP RI
const getMinistryListItems = (): Array<ListItemInterface> => {
  return [
    {
      title: "Daftarkan Admin",
      to: { path: RoutePaths.ENROLL_ADMIN }
    }
  ]
}

const getHarborListItems = (role: string): Array<ListItemInterface> => {
  const items = [
    {
      title: "Tangkap ikan",
      to: { path: RoutePaths.CAPTURE_FISHERY_PRODUCT }
    },
    ...BASE_LIST_ITEMS
  ]
  if (role === OrgRoles.ADMIN) {
    items.push(REGISTER_USER_ITEM)
  }
  return items
}

const getProcessingUnitListItems = (role: string): Array<ListItemInterface> => {
  const items = [
    {
      title: "Olah Ikan",
      to: { path: RoutePaths.PROCESS }
    },
    ...BASE_LIST_ITEMS
  ]
  if (role === OrgRoles.ADMIN) {
    items.push(REGISTER_USER_ITEM)
  }
  return items
}

const getMarketerListItems = (role: string): Array<ListItemInterface> => {
  const items = [
    {
      title: "Pasarkan Ikan",
      to: { path: RoutePaths.MARKET }
    },
    ...BASE_LIST_ITEMS
  ]
  if (role === OrgRoles.ADMIN) {
    items.push(REGISTER_USER_ITEM)
  }
  return items
}

const getListItems = (orgName: string, role: string): Array<ListItemInterface> => {
  switch (orgName) {
    case OrgNames.MINSTRY:
      return getMinistryListItems()
    case OrgNames.HARBOR:
      return getHarborListItems(role)
    case OrgNames.PROCESSING_UNIT:
      return getProcessingUnitListItems(role)
    case OrgNames.MARKETER:
      return getMarketerListItems(role)
    default:
      return []
  }
}

export {
  getListItems
}
