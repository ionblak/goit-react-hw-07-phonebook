import { createSelector } from '@reduxjs/toolkit';

const getValueFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getAllContacts = state => state.contacts.items;

const getfilteredContacts = createSelector(
  [getAllContacts, getValueFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getValueFilter, getfilteredContacts, getLoading };
