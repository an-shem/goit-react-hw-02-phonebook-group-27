import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Container;
