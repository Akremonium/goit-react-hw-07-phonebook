import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactRequest");
export const getContactsSuccess = createAction("contacts/getContactSuccess");
export const getContactsError = createAction("contacts/getContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("phonebook/changeFilter");
