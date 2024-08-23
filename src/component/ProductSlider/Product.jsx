import { books } from "../../data/books";
import ProductSlider from "./ProductSlider";
import { useGetCartSliceByNameQuery } from "../../Redaux/rtkQuiry/CartSlice";
function Product() {
  const { data, error, isLoading } = useGetCartSliceByNameQuery(
    "products?populate=*"
  );
  if (error) {
    return <div> error...</div>;
  }
  if (isLoading) {
    return <div> isLoading....</div>;
  }
  console.log(data);

  return (
    <div>
      <ProductSlider data={data} />
    </div>
  );
}

export default Product;
