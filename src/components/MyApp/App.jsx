import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import Container from '../Container';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
// import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter
            filter={filter}
            searchChange={this.handleChange}
            handleBlur={this.handleBlurInput}
          />
          <ContactList contacts={contacts} filter={filter} />
        </Section>
      </Container>
    );
  }
}

export default App;
