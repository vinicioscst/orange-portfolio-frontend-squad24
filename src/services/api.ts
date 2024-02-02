import axios from "axios";

export const api = axios.create({
  baseURL: "https://filthy-rose-trousers.cyclic.app",
  timeout: 10000,
});
