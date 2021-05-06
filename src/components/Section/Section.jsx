import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.appWrap}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </div>
);

export default Section;
