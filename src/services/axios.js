import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://invoices-ibrokhim.onrender.com/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  },
})

axiosInstance.interceptors.response.use((response) => response, error => {
  console.log(error);
  if (error.response.status === 401) {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.reload()
  }
  return Promise.reject(error)
})