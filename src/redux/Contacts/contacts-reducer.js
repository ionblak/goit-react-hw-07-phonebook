import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterOutContacts,
} from './contacts-actions';
import { addConditionalContact } from './utils';

const INITIAL_CONTACTS = [];

const itemsReducer = createReducer(INITIAL_CONTACTS, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    addConditionalContact(state, payload),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterOutContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [deleteContactRequest]: () => true,
  [fetchContactsRequest]: () => true,

  [addContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,
  [fetchContactsSuccess]: () => true,

  [deleteContactError]: () => false,
  [addContactError]: () => false,
  [fetchContactsError]: () => true,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
});
