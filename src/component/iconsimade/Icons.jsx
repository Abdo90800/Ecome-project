import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RedeemIcon from "@mui/icons-material/Redeem";
import ReplayIcon from "@mui/icons-material/Replay";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
function Icons() {
  const matches = useMediaQuery("(max-width:1000px)");

  const matches2 = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {matches2 && (
        <Container>
          <div className=" flex items-center justify-between my-10 flex-wrap">
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
      )}

      {matches && (
        <div className=" flex items-center justify-between my-10 flex-wrap" style={{}}>
          <Box
            className=" h-20 rounded-3xl text-center mb-3"
            sx={{ border: "1px solid black", height: "100%" ,width:"100%"}}
          >
            <LocalShippingIcon />
            <p>Shipping</p>
          </Box>{" "}
          <Box
            className=" h-20 rounded-3xl text-center"
            sx={{ border: "1px solid black", height: "100%" , width:"100%"}}
          >
            <ReplayIcon />
            <p>7 Day Return</p>
          </Box>{" "}
        </div>
      )}
    </>
  );
}

export default Icons;
