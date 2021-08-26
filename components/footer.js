import Container from './container';
import Section from './section';
import { SITE_NAME } from '../lib/constants';
import styles from '../styles/Main.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Section>
        <Container>
          <div className={styles.section__content}>
            <div className={styles.section__content_item}>
              <p>Copyright &copy; 2021 {SITE_NAME}</p>
            </div>
            <div className={styles.section__content_item}>
              <ul className={styles.list}>
                <li className={styles.list__item}>
                  <a href="mailto:info@fsfm.music">info@fsmf.music</a>
                </li>
                <li className={styles.list__item}>
                  <a href="tel:317.555.1234">317.555.1234</a>
                </li>
              </ul>
            </div>
            <div className={styles.section__content_item}>
              <ul className={styles.social_media_icons}>
                <li>
                  <Link href="https://facebook.com">
                    <a>
                      <FontAwesomeIcon icon={faFacebookSquare} />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com">
                    <a>
                      <FontAwesomeIcon icon={faTwitter} />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com">
                    <a>
                      <FontAwesomeIcon icon={faInstagram} />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
