import { isDev } from "@skillgap/shared/constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { ISignupValues } from "../components/auth/sign-up";

// Create a custom Axios instance
const api = axios.create({
  baseURL: `${isDev ? "http://localhost:8080" : ""}/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to fetch CSRF token before each request
api.interceptors.request.use(async (config) => {
  try {
    const response = await api.get(
      process.env.EXPO_PUBLIC_CSRF_TOKEN_PATH as string
    );
    const csrfToken = response.data.csrfToken;
    config.headers["X-CSRF-Token"] = csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
  }
  return config;
});

async function apiSetAuthHeader(token: string | null) {
  if (!token)
    token = await SecureStore.getItemAsync(
      process.env.EXPO_PUBLIC_SECURE_STORE_KEY as string
    );

  api.defaults.headers.common[
    process.env.EXPO_PUBLIC_AUTH_HEADER_NAME as string
  ] = token ?? null;
}

export const apiSignIn = (didToken: string | null) =>
  api.post("/auth/signin", null, {
    headers: {
      Authorization: `Bearer ${didToken}`,
    },
  });

export const apiGetIsUserUnique = (key: string, value: string) => {
  const params = new URLSearchParams({ key, value });

  return api.get(`/user/uniqueness?${params.toString()}`);
};

export const apiSignUp = async (data: ISignupValues, token: string) => {
  await apiSetAuthHeader(token);

  return api.post(`/auth/signup`, data);
};
