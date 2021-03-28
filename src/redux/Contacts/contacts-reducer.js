import {
  addContact,
  deleteContact,
  filterOutContacts,
} from './contacts-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const addConditionalContact = (state, payload) => {
  const includedInContacts = state.find(item => item.name === payload.name);

  if (includedInContacts !== undefined) {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
  return [...state, payload];
};

const itemsReducer = createReducer(INITIAL_CONTACTS, {
  [addContact]: (state, { payload }) => addConditionalContact(state, payload),
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterOutContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
