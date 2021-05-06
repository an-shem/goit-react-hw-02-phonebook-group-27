import Button from '../Button';
import styles from './Form.module.css';

const Form = ({ name, formSabmitHandle, formChangeHandle }) => {
  return (
    <form className={styles.form} onSubmit={formSabmitHandle}>
      <label className={styles.label}>
        <span className={styles.name}>Name</span>
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
      <Button />
    </form>
  );
};

export default Form;
