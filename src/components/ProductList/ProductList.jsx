import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
