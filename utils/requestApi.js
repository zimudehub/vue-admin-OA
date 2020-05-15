import ajax from "./request";

export function loginRequest(data) {
  return ajax("/login", data, "POST")
}
