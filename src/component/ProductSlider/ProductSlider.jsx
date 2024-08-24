import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RatingCard from "../rating/RatingCard";
import VewDialog from "../../pages/Dialogs/VewDialog";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redaux/cartslice"; // تأكد من تحديث المسار الصحيح

const ProductSlider = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, quantity = 1) => {
    dispatch(addItemToCart({ ...product, quantity }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="">
      <Box sx={{ margin: "10px" }}>
        <Slider {...settings}>
          {data.map((product, index) => (
            <div key={index} className="p-4 w-80 rounded-2xl">
              <Card
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
                className="p-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <CardContent className="text-center">
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>

                  <Box className="text-center">
                    <span>
                      <RatingCard
                        Rat={product.rating.rat}
                        reviews={product.rating.count}
                      />
                    </span>
                    <Typography className="text-red-700" variant="h6">
                      ${product.price}
                    </Typography>
                  </Box>
                </CardContent>
                <Divider variant="middle" sx={{ borderColor: "black" }} />

                <CardActions className="flex items-center justify-center">
                  <Button onClick={() => handleClickOpen(product)}>
                    <RemoveRedEyeIcon />
                  </Button>
                  <Button onClick={() => handleAddToCart(product)}>
                    <AddShoppingCartIcon />
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Slider>
      </Box>
      <VewDialog
        open={open}
        handleClose={handleClose}
        product={selectedProduct}
        handleAddToCart={handleAddToCart} // تمرير الدالة كـ prop
      />
    </Container>
  );
};

export default ProductSlider;