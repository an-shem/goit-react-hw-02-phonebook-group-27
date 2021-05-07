import styles from './ContactListItem.module.css';

const ContactListItem = ({ data }) => {
  const { name, number } = data;

  return (
    <li className={styles.listItem}>
      {name}: {number}
    </li>
  );
};

export default ContactListItem;
