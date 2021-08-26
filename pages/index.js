import Header from '../components/header';
import Section from '../components/section';
import Container from '../components/container';
import ArtistGrid from '../components/artist-grid';
import Layout from '../components/layout';
import { getAllArtists } from '../lib/api';
import Head from 'next/head';

export default function Index({ allArtists }) {
  return (
    <>
      <Layout>
        <Head>
          <title>FSMF Returns</title>
        </Head>
        <Header title="FSMF Returns" coverImage="/hero.webp" />
        <Section>
          <Container>{allArtists.length > 0 && <ArtistGrid posts={allArtists} />}</Container>
        </Section>
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
