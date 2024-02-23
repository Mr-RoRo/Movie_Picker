import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7465eca51be97790cfe5ab140e27ae6f",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
}

export default ApiClient;
