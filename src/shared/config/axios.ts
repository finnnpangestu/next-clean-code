import { Logger } from "@/infrastructure/logging/logger";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  Logger.info(`Request made to ${config.url} with method ${config.method}`);

  return config;
});

api.interceptors.response.use(
  (response) => {
    Logger.info(`Response received from ${response.config.url} with status ${response.status}`);

    return response;
  },
  (error) => {
    Logger.error(`Error in response from ${error.config?.url}: ${error.message}`);

    if (error.response) {
      Logger.error(`Status: ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`);
    }

    return Promise.reject(error);
  },
);