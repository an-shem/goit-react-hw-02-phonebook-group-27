import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import Container from '../Container';
import Section from '../Section';
import Form from '../Form';
import Contacts from '../Contacts';
// import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: this.state.name,
    };
    this.state.contacts.push(newContact);
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <Form
            name={name}
            formSabmitHandle={this.handleSubmit}
            formChangeHandle={this.handleChange}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
