import { connect } from 'react-redux';
import { fetchContacts } from './redux/Contacts/contacts-operations';
import { useEffect } from 'react';

import Container from './Component/Container';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import ContactForm from './Component/ContactForm';

const App = ({ getContacts }) => {
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
