import axios from "axios";

const BASE_URL = process.env.URL || "http://localhost:3000";

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export default api;
