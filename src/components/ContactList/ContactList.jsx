import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filter }) => (
  <ul className={styles.list}>
    {contacts.map(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) && (
          <ContactListItem key={contact.id} data={contact} />
        ),
    )}
  </ul>
);

export default ContactList;
