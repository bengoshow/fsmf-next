import Header from '../components/header';
import Container from '../components/container';
import ArtistGrid from '../components/artist-grid';
import Layout from '../components/layout';
import { getAllArtists } from '../lib/api';
import Head from 'next/head';
import styles from '../styles/Main.module.scss';

export default function Index({ allArtists }) {
  return (
    <>
      <Layout>
        <Head>
          <title>FSMF Returns</title>
        </Head>
        <Header title="FSMF Returns" coverImage="/hero.jpg" />
        <div className={styles.section}>
          <Container>{allArtists.length > 0 && <ArtistGrid posts={allArtists} />}</Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allArtists = getAllArtists(['title', 'slug', 'coverImage', 'excerpt']);
  return {
    props: { allArtists },
  };
}
