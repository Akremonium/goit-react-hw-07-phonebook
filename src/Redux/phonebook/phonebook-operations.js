import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:3004";

// export const getContacts = () => (dispatch) => {
//   dispatch(getContactsRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(getContactsSuccess(data)))
//     .catch((error) => dispatch(getContactsError(error)));
// };

export const getContacts = createAsyncThunk(
  "phonebook/getContacts",
  async () => {
    const contacts = await axios.get("/contacts");
    return contacts.data;
  }
);

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };

export const deleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
