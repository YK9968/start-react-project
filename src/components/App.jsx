import BookList from "./BookList";
import Card from "./Card";
import Mailbox from "./Mailbox";
import Product from "./Product";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Cheree pie"
        imgUrl="https://images.unsplash.com/photo-1617612014110-279dfce1211b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        price={8.5}
      />

      <Mailbox username="Yurii" messages={["Hi", "hello", "Aloha"]} />

      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />

      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
    </div>
  );
}
