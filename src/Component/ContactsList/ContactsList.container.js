import ContactsList from './ContactsList';
import { connect } from 'react-redux';
import { getfilteredContacts } from '../../redux/Contacts/contacts-selectors';
import { deleteContact } from '../../redux/Contacts/contacts-operations';

const mapStateToProps = state => ({
  filteredContacts: getfilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
