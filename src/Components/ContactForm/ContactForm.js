import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import ContactFormStyled from './ContactFormStyled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  nameId = uuid();
  numberId = uuid();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    e.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactFormStyled>
        <form name="contact" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>Name</label>
          <input
            value={name}
            onChange={this.handleChange}
            id={this.nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <label htmlFor={this.numberId}>Number</label>
          <input
            value={number}
            onChange={this.handleChange}
            id={this.numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <button type="submit">Add contact</button>
        </form>
      </ContactFormStyled>
    );
  }
}

export default ContactForm;
