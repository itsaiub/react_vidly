import http from "./httpService";
import { apiURL } from "../config.json";

export function register(user) {
  return http.post(`${apiURL}/users`, {
    email: user.email,
    password: user.password,
    name: user.name
  });
}
