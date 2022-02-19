import { PropTypes } from 'prop-types';
import React from 'react';
import ContactItemStyled from './ContactItemStyled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <ContactItemStyled>
      <span>
        {name}:{number}
      </span>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
