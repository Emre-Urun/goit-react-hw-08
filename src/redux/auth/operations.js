// src/redux/auth/operations.js

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Dökümantasyonda belirtilen yeni Backend URL'i [cite: 583]
axios.defaults.baseURL = "https://connections-api.goit.global/";

// Yardımcı Fonksiyon: HTTP isteklerine JWT token ekler
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Yardımcı Fonksiyon: Token'ı temizler (Çıkış yapıldığında)
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * Body: { name, email, password }
 * Yeni kullanıcı kaydı oluşturur.
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      // Kayıt başarılıysa token'ı header'a ekle
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      // Hata durumunda mesajı döndür
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * Body: { email, password }
 * Mevcut kullanıcı girişi.
 */
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      // Giriş başarılıysa token'ı header'a ekle
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * Headers: Authorization: Bearer token
 * Çıkış işlemi.
 */
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    // Çıkış yapıldı, header'dan token'ı sil
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * Headers: Authorization: Bearer token
 * Sayfa yenilendiğinde kullanıcıyı hatırla (Refresh).
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Redux state'inden token'ı oku (Persist sayesinde orada duruyor olacak)
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // Token yoksa işlemi iptal et
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // Token varsa header'a ekle ve kullanıcı bilgisini iste
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
