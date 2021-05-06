import styles from './Contacts.module.css';

const Contacts = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(({ name, id, number }) => (
      <li key={id} className={styles.listItem}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

export default Contacts;
