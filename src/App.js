import Container from './Component/Container';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import ContactForm from './Component/ContactForm';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
