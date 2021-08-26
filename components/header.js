import styles from '../styles/Main.module.scss';

export default function Header({ title, coverImage }) {
  return (
    <div id="homepage-hero" className={styles.hero}>
      <img src={coverImage} height={900} width={1600} alt="" />
      <h1 className={styles.hero__title}>{title}</h1>
    </div>
  );
}
