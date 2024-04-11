export default function Articles({ item: { author, created_at, url, title } }) {
  console.log(title);
  return (
    <>
      <h2>{title}</h2>
      <p>Author : {author}</p>
      <a target="blank" href={url}>
        Website
      </a>
      <p>Date publicate: {created_at}</p>
    </>
  );
}
