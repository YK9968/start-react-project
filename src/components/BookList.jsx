const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-4", name: "React Router overview" },
  { id: "id-5", name: "HTML" },
  { id: "id-6", name: "CSS" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

export { favouriteBooks, BookList as default };
