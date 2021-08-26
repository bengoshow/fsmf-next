import Link from 'next/link';
import styles from '../styles/Main.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <div className={styles.card}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className={styles.card_link}>
          <img alt={title} src={coverImage} height={278} width={556} />
        </a>
      </Link>
      <div className={styles.card__content}>
        <a className={styles.card__icon} href="#">
          <FontAwesomeIcon icon={faHeart} />
          <span className="sr-only">Add to Favorites</span>
        </a>
        <h2 className={styles.card__title}>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h2>
        <ul className={styles.card__meta}>
          <li>Rock 'n' Roll</li>
          <li>Late Night</li>
          <li>Hi-Fi</li>
        </ul>
      </div>
    </div>
  );
}
