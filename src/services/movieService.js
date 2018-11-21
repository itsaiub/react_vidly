import http from "./httpService";
import { apiURL } from "../config.json";

export function getMovies() {
  return http.get(`${apiURL}/movies`);
}

export function getMovie(movieId) {
  return http.get(`${apiURL}/movies/${movieId}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${apiURL}/movies/${movie._id}`, body);
  }

  return http.post(`${apiURL}/movies`, movie);
}

export function deleteMovie(movieId) {
  return http.delete(`${apiURL}/movies/${movieId}`);
}
