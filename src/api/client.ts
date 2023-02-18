import axios from "axios";
import type { AxiosInstance } from "axios";
import type { ClientGetOptions, ClientPostOptions } from "@/types";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: import.meta.env.VITE_LAST_FM_API_KEY,
    format: "json",
  };
  return config;
});

const client = (axios: AxiosInstance) => {
  return {
    get: <T = unknown>({ url = "", config = {} }: ClientGetOptions) =>
      axios.get<T>(url, config),
    post: <T = unknown, K = unknown>({
      url = "",
      body,
      config = {},
    }: ClientPostOptions<K>) => axios.post<T, K>(url, body, config),
  };
};

export default client(axiosInstance);
