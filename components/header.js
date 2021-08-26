import CoverImage from '../components/cover-image';

export default function Header({ title, coverImage }) {
  return (
    <div id="homepage-hero" className="c-hero -tall">
      <CoverImage title={title} src={coverImage} height={900} width={1600} />
      <h1 className="c-hero__title">FSMF Returns!</h1>
    </div>
  );
}
