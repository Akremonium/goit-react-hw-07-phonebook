import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from "./phonebook-actions";

const contacts = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  loading,
  filter,
});
