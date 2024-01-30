import axios from "axios";

export const api = axios.create({
  baseURL: "https://outstanding-erin-headscarf.cyclic.app",
  timeout: 10000,
});
