import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RedeemIcon from "@mui/icons-material/Redeem";
import ReplayIcon from "@mui/icons-material/Replay";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";

function Icons() {
  return (
    <Container>
      <div className=" flex items-center justify-between mt-7">
        <Box
          className="w-60 h-20 rounded-3xl text-center"
          sx={{ border: "1px solid black" }}
        >
          <LocalShippingIcon />
          <p>Shipping</p>
        </Box>{" "}
        <Box
          className="w-60 h-20 rounded-3xl text-center"
          sx={{ border: "1px solid black" }}
        >
          <RedeemIcon />
          <p>Gift card</p>
        </Box>{" "}
        <Box
          className="w-60 h-20 rounded-3xl text-center"
          sx={{ border: "1px solid black" }}
        >
          <ReplayIcon />
          <p>7 Day Return</p>
        </Box>{" "}
        <Box
          className="w-60 h-20 rounded-3xl text-center"
          sx={{ border: "1px solid black" }}
        >
          <SendIcon />
          <p>Contact Us</p>
        </Box>{" "}
      </div>
    </Container>
  );
}

export default Icons;
