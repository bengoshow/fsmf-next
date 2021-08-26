import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import Content from '../components/content';

export default function PostHeader({ title, coverImage }) {
  return (
    <>
      <CoverImage title={title} src={coverImage} height={620} width={1240} />
      <Content>
        <PostTitle>{title}</PostTitle>
      </Content>
    </>
  );
}
