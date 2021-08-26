import Container from './container';
import Section from './section';
import { SITE_NAME } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Section>
        <Container>
          <div className="c-section__content">
            <div className="c-section__content-item">
              <p>Copyright &copy; 2021 {SITE_NAME}</p>
            </div>
            <div className="c-section__content-item">
              <ul className="c-list">
                <li className="c-list__item">
                  <a href="mailto:info@fsfm.music">info@fsmf.music</a>
                </li>
                <li className="c-list__item">
                  <a href="tel:317.555.1234">317.555.1234</a>
                </li>
              </ul>
            </div>
            <div className="c-section__content-item">
              <ul id="social-media-icons" className="c-list -inline">
                <li className="c-list__item">
                  <a href="https://facebook.com" className="fab fa-facebook-square">
                    <span className="sr-only">Facebook</span>
                  </a>
                </li>
                <li className="c-list__item">
                  <a href="https://twitter.com" className="fab fa-twitter">
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li className="c-list__item">
                  <a href="https://instagram.com" className="fab fa-instagram">
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
