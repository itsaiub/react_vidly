import http from "./httpService";
import { apiURL } from "../config.json";

export function login(email, password) {
  return http.post(`${apiURL}/auth`, {
    email,
    password
  });
}
