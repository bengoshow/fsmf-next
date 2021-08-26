import Section from '../components/section';
import Container from '../components/container';
import Content from '../components/content';

import CoverImage from './cover-image';
import Link from 'next/link';

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <Section>
      <Container>
        <CoverImage slug={slug} title={title} src={coverImage} height={278} width={556} />
        <Content>
          <h3 className="text-3xl mb-3 leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </Content>
      </Container>
    </Section>
  );
}
