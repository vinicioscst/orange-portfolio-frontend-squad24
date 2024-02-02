import axios from "axios";

export const api = axios.create({
  baseURL: "https://hackathon-squad24.onrender.com",
  timeout: 10000,
});
