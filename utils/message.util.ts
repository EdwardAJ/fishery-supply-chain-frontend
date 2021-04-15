const getErrorMessage = (error: any) => {
  if (typeof error === "string") {
    return error
  }
  if (!error.response) {
    return "An error occured."
  }
  // Only use destructuring if and only if error.response is defined
  const { response: { data: { message } } } = error
  return message
}

export {
  getErrorMessage
}
