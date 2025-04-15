import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL// Substitua pelo URL do seu EspoCRM


const axiosInstance = axios.create({
  baseURL: BASE_URL, // Substitua pelo URL do seu EspoCRM
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para lidar com erros (opcional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na chamada para o EspoCRM:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;