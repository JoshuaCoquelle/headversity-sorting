import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserLogin, UserLoginResponse } from "./auth.types";

export const AUTH_LOGIN_ACTION = "auth/login";

export const login = createAsyncThunk(
  AUTH_LOGIN_ACTION,
  async ({ email, password }: UserLogin): Promise<UserLoginResponse> => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", data.token);

    return data;
  }
);
