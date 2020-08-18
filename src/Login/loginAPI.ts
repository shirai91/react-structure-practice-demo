export const callLogin = async (email: string, password: string) => {
  if (email === "admin@test.com" && password === "123345") {
    return { accessToken: "nBL7pL0OAKuiHWmnXAS6LtPI9ufgRTj4QRfZCQnXrFoUAqWrTI5DN7ciilGd2fCB" }
  }
  throw new Error("401 - Unauthorized, use test account admin@test.com with 123345")
}
