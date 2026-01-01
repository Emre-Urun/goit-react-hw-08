// src/redux/auth/slice.js

import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

// Başlangıç durumu (PDF Sayfa 2-3'teki yapı) [cite: 608]
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false, // Sayfa yenilenirken kullanıcı bilgisini çekme durumu
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // REGISTER İŞLEMLERİ
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true; // Artık giriş yaptı
      })
      // LOGIN İŞLEMLERİ
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // LOGOUT İŞLEMLERİ
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // REFRESH USER İŞLEMLERİ
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload; // Backend sadece user bilgisini döner
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
