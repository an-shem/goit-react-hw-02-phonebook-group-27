import styles from './Contacts.module.css';

const Contacts = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(({ name, id }) => (
      <li key={id} className={styles.listItem}>
        {name}
      </li>
    ))}
  </ul>
);

export default Contacts;
