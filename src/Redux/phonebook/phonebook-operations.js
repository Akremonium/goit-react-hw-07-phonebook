import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

axios.defaults.baseURL = "http://localhost:3004";

export const getContacts = createAsyncThunk(
  "phonebook/getContacts",
  async () => {
    const contacts = await axios.get("/contacts");
    return contacts.data;
  }
);

export const addContact = createAsyncThunk(
  "phonebook/addContact",
  async ({ name, number, id }) => {
    const contact = { name, number, id: uuidv4() };
    await axios.post("contacts", contact);
    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
