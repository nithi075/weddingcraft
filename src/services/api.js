import axios from "axios";

const api = axios.create({
  baseURL: "https://wc-backend-zr5t.onrender.com"
});

export default api;