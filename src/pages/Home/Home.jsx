import Slider from "../../components/slider/Slider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeaderBanner from "../../components/header-banner/HeaderBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    console.log("Fetching products...");
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <HeaderBanner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجدید من اللابتوبات" />
      <Slider data={products} />
      <HeadingTitle title="الجدید من الجوالات" />
      <Slider data={products} />
      <HeadingTitle title="تسوق حسب المارک" />
      <Brands />
    </>
  );
};

export default Home;
