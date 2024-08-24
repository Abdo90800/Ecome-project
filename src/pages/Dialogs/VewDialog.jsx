import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RatingCard from "../../component/rating/RatingCard";
import { useState } from "react";

function VewDialog({ open, handleClose, product, handleAddToCart }) {
  const [handleinput, sethandleinput] = useState(1);
  if (!product) return null;

  const handleAddToCartClick = () => {
    handleAddToCart(product, handleinput);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          width: "600px",
          maxWidth: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          padding: "20px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          position: "relative",
        },
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Box sx={{ width: "50%" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box sx={{ width: "50%", padding: "16px" }}>
          <Typography variant="h4" component="div" className="font-bold">
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ marginY: "8px" }}>
            <span>
              <RatingCard Rat={product.rating.rate} reviews={product.rating.count} />
            </span>
          </Typography>
      

          <Box>
            <Typography variant="h6">
              <span>Price:</span>
              <span className="font-bold text-red-700">${product.price}</span>
            </Typography>
            <div className="flex items-center ">
              <input
                value={handleinput}
                onChange={(e) => {
                  // Update the state with the input value, ensuring it's a number
                  sethandleinput(Math.min(Number(e.target.value), 10));
                }}
                type="number"
                placeholder="qty"
                className="w-16 mr-2 "
                style={{ border: "1px solid black", borderRadius: "5px" }}
                max="10" // Set the maximum value
              />

              <div>
                <Button
                  color="success"
                  variant="contained"
                  onClick={handleAddToCartClick}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
        <Button
          onClick={handleClose}
          sx={{
            "&:hover": {
              transform: "rotate(180deg)",
              transition: "0.3s",
            },
            color: "black",
          }}
          className="hover:text-red-700"
        >
          <CloseIcon />
        </Button>
      </Box>
    </Dialog>
  );
}

export default VewDialog;
