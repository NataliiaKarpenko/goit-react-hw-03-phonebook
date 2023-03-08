import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { FormInput } from './form/FormInput';
import { ContactsList } from './contacts-list/ContactsList';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = contactInfo => {
    if (this.state.contacts.some(c => c.name === contactInfo.name)) {
      alert(`${contactInfo.name} is already in contacts`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      ...contactInfo,
    };

    this.setState({ contacts: [...this.state.contacts, finalContact] });
  };

  contactDeleteHandler = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  contactFilterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <FormInput onFormSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          contactFilter={this.contactFilterHandler}
        />

        <ContactsList
          onContactDelete={this.contactDeleteHandler}
          contacts={this.getFilteredContacts()}
        />
      </>
    );
  }
}
