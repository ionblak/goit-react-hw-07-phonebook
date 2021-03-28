import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterOutContacts = createAction('contacts/filterOut');

export { addContact, deleteContact, filterOutContacts };
