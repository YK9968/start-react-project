import Articles from "../Articles/Articles";

export default function ArticleList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <Articles item={item} />
        </li>
      ))}
    </ul>
  );
}
