import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { v4 as uuid } from 'uuid';
import Container from './Container/Container';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contats');
    contacts && this.setState({ contacts: JSON.parse(contacts) });
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.contats !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = contact => {
    const id = uuid();
    const { name } = contact;

    if (this.state.contacts.filter(contact => contact.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...contact }],
    }));
  };

  deleteItem = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => item.id !== id)],
    }));
  };

  onFilterChange = e => {
    const filter = e.target.value;
    this.setState({ filter: filter.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  render() {
    return (
      <>
        <Container title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Container>
        <Container title="Contacts">
          <ContactFilter onChange={this.onFilterChange} />

          <ContactList onDelete={this.deleteItem} items={this.getFilteredContacts()} />
        </Container>
      </>
    );
  }
}

export default App;
