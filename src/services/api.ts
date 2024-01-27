import axios from "axios";

export const api = axios.create({
  baseURL: "https://important-turtleneck-shirt-lion.cyclic.app",
  timeout: 10000,
});
