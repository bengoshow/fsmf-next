import styles from '../styles/Main.module.scss';

export default function Section({ id, children }) {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
}
