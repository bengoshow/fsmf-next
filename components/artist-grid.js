import Container from '../components/container';
import Content from '../components/content';
import Card from '../components/card';
import styles from '../styles/Main.module.scss';

export default function ArtistGrid({ posts }) {
  return (
    <section>
      <Container>
        <Content>
          <div className={styles.artist_grid}>
            {posts.map((post) => (
              <Card key={post.slug} title={post.title} coverImage={post.coverImage} slug={post.slug} excerpt={post.excerpt} />
            ))}
          </div>
        </Content>
      </Container>
    </section>
  );
}
