import axios from "axios";

export const api = axios.create({
  baseURL: "https://deploy-backend-orange-juice.onrender.com/",
  timeout: 10000,
});
