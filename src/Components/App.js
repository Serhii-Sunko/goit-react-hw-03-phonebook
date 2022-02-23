import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './ContactFilter/ContactFilter';
import { v4 as uuid } from 'uuid';
import Section from './Container/Container';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    contacts && this.setState({ contacts: JSON.parse(contacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
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
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.onFilterChange} />

          <ContactList onDelete={this.deleteItem} items={this.getFilteredContacts()} />
        </Section>
      </>
    );
  }
}

export default App;
