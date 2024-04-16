import { ProductList } from "../../components/ProductList/ProductList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { getProducts } from "../../fakeApi";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (value) => {
    const nextParams = value !== "" ? { name: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
}
