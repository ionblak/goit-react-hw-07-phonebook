import { connect } from 'react-redux';
import { fetchContacts } from './redux/Contacts/contacts-operations';
import { useEffect } from 'react';
import { getLoading } from './redux/Contacts/contacts-selectors';

import Container from './Component/Container';
import ContactList from './Component/ContactsList';
import Filter from './Component/Filter';
import ContactForm from './Component/ContactForm';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = ({ getContacts, isLoading }) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Loader
          type="Puff"
          color="#000"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <ContactList />
      )}
    </Container>
  );
};
const mapStateToProps = state => ({
  isLoading: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(fetchContacts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
