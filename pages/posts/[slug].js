import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import Content from '../../components/content';
import PostBody from '../../components/post-body';
import Layout from '../../components/layout';
import { getPostBySlug, getAllArtists } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { SITE_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import CoverImage from '../../components/cover-image';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {SITE_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <CoverImage title={post.title} src={post.coverImage} height={620} width={1240} />
              <Content>
                <PostTitle>{post.title}</PostTitle>
                <PostBody content={post.content} />
              </Content>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'slug', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllArtists(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
