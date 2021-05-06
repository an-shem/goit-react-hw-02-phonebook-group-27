import Button from '../Button';
import styles from './Form.module.css';

const Form = ({ name, number, formSabmitHandle, formChangeHandle }) => {
  return (
    <form className={styles.form} onSubmit={formSabmitHandle}>
      <label className={styles.label}>
        <span className={styles.labelName}>Name</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={formChangeHandle}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelName}>Number</span>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={formChangeHandle}
        />
      </label>
      <Button />
    </form>
  );
};

export default Form;
