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

const INITIAL_CONTACTS = [];

const itemsReducer = createReducer(INITIAL_CONTACTS, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

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
  [fetchContactsSuccess]: () => false,

  [deleteContactError]: () => false,
  [addContactError]: () => false,
  [fetchContactsError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
});
