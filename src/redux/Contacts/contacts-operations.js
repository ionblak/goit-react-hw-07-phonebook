import axios from 'axios';
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
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:8080/contacts';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('')
    .then(({ data }) =>
      dispatch(fetchContactsSuccess(data)),
    )
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { fetchContacts, addContact, deleteContact };
