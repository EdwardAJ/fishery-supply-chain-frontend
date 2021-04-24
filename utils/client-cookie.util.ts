import cookies from "js-cookie"

const setCookie = (name: string, value: string, expiryDay: number): void => {
  cookies.set(name, value, { expires: expiryDay })
}

const getCookie = (name: string): string => {
  return cookies.get(name)
}

const removeCookie = (name: string): void => {
  cookies.remove(name)
}

export {
  setCookie,
  getCookie,
  removeCookie
}
