import BookList, { favouriteBooks } from "./BookList";
import Card from "./Card";
import Mailbox from "./Mailbox";
import Product from "./Product";

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
      <Mailbox username="Yurii" messages="Hi" />
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
    </div>
  );
}
