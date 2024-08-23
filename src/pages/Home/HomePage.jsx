import Product from "../../component/ProductSlider/Product";
import Carousel from "../../component/carosil/carousel";
import Divider from "@mui/material/Divider";
import Icons from "../../component/iconsimade/Icons";
import Titlepages from "../../component/iconsimade/Titlepages";
function HomePage() {
  return (
    <div>
      <Divider />
      <Carousel />
      <Divider />
      <Icons />
      <Titlepages title={"Most Gefted"} />
      <Product />
      <Titlepages title={"Best seller"} />
      <Product />
      <Titlepages title={"Most wished for"} />
      <Product />
    </div>
  )
}

export default HomePage