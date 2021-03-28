import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/contacts-actions';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getfilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filteredContacts: getfilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
