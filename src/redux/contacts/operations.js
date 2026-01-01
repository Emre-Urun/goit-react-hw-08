// src/redux/contacts/operations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Tüm kişileri getir (GET /contacts)
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Yeni kişi ekle (POST /contacts)
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contactData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Kişi sil (DELETE /contacts/{id})
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data; // Silinen kişiyi geri döner
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
