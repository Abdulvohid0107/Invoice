import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://167.235.158.238:3001",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  },
})