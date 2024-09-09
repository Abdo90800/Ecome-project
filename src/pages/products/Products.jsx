import ProductList from "./ProductList";
import "./products.css";
import { useState, useEffect } from "react";
import ProductSidebar from "./ProductSidebar";
import Pagination from "./Pagination";
import Spinner from "../../components/spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  const [sortItem, setSortItem] = useState("select");
  const [filterItem, setFilterItem] = useState("all");
  const [currentPage, setCurrentPage] = useState(4);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter Product
  const filteredProduct = products.filter((p) =>
    filterItem === "all" ? true : p.category === filterItem
  );

  // Sort Product
  const sortedProductList =
    sortItem === "low"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filteredProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  // Pagination
  const PRODUCT_PER_PAGE = 3;
  const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;

  const orderedProducts = sortedProductList.slice(startIndex, finishIndex);

  if (loading) return <Spinner />;

  return (
    <>
      <section className="products">
        <ProductSidebar
          setSortItem={setSortItem}
          sortItem={sortItem}
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          setCurrentPage={setCurrentPage}
        />
        <ProductList products={orderedProducts} />
      </section>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
