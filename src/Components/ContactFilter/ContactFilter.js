import { PropTypes } from 'prop-types';
import React from 'react';
import ContactFilterStyled from './ContactFilterStyled';
import { v4 as uuid } from 'uuid';

const ContactFilter = ({ onChange }) => {
  const filterId = uuid();
  return (
    <ContactFilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} onChange={onChange} name="filter" />
    </ContactFilterStyled>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
