import styles from './ContactListItem.module.css';

const ContactListItem = ({ data, onDeleteContact }) => {
  const { name, number, id } = data;

  return (
    <li className={styles.listItem}>
      <span className={styles.text}>
        {name}: {number}
      </span>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
