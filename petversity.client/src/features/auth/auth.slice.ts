import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { login } from "./auth.action";
import type { User } from "./auth.types";

const initialState = {
  user: {} as User,
  token: localStorage.getItem("token") || null,
  loading: false,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = {} as User;
      state.success = false;
      state.token = null;

      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.success = true;
    });
  },
});

export const { logout } = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
