import Head from 'next/head';
import { SITE_URL, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <meta name="description" content="Fountain Square Music Festival has returned to Indianapolis" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="Fountain Square Music Festival has returned to Indianapolis" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=New+Rocker&family=Roboto&display=swap" rel="stylesheet" />
    </Head>
  );
}
