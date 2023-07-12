import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://invoices-ibrokhim.onrender.com/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token" || "")}`
  },
})