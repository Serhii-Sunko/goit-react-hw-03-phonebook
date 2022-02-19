import { PropTypes } from 'prop-types';
import React from 'react';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <ContactItem key={item.id} onDelete={onDelete} contact={item} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
