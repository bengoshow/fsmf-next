import styles from '../styles/Main.module.scss';

export default function Container({ children }) {
  return <div className={styles.section__container}>{children}</div>;
}
