import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import { useState } from "react";
import CardShop from "../../pages/Dialogs/CardShop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
function Header1() {
  const items = useSelector((state) => state.cart.items);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const matches = useMediaQuery("(max-width:1000px)");

  const matches2 = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <div>
        <div
          className="flex items-center justify-between w-full h-10 px-8"
          style={{
            background: "#0e1320",
            color: "white",
            borderTopRightRadius: "5px",
          }}
        >
          <Box>
            <Typography>
              ECOM <ImportContactsOutlinedIcon /> STORE
            </Typography>
          </Box>
          <Box className="flex items-center">
            <Link to={"/LogIn"}>
              <Button sx={{ color: "white" }} className="p-8">
                Sign in
              </Button>
            </Link>
            <Link to={"/SignUp"}>
              <Button sx={{ color: "white" }}>Create an account</Button>
            </Link>
          </Box>
        </div>
        <Box className="flex items-center justify-between w-full p-8 bg-white">
          {matches2 && (
            <Box className="flex items-center">
              <Link to={"/"}>
                <Button sx={{ cursor: "pointer" }} className="pr-8">
                  Home
                </Button>
              </Link>
              <Link to={"/Categore"}>
                <Button sx={{ cursor: "pointer" }} className="pr-8">
                  Category
                </Button>
              </Link>

              <Link to={"/AboutUs"}>
                <Button sx={{ cursor: "pointer" }} className="pr-8">
                  About Us
                </Button>
              </Link>
              <Link to={"/ContactUs"}>
                <Button sx={{ cursor: "pointer" }} className="pr-8">
                  Contact Us
                </Button>
              </Link>
              <Button sx={{ cursor: "pointer" }} className="pr-8">
                Register
              </Button>
            </Box>
          )}

          {matches && (
            <IconButton
              className="text-black"
              onClick={toggleDrawer("top", true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box>
            <Button sx={{ cursor: "pointer" }}>
              <SearchIcon />
            </Button>
            <Button sx={{ cursor: "pointer" }}>
              <PersonIcon />
            </Button>

            <Button sx={{ cursor: "pointer" }} onClick={handleOpenDialog}>
              <ShoppingBagIcon className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute w-4 h-5 mb-8 bg-red-600 rounded-full top-1 right-2 text-teal-50">
                  {items.length}
                </span>
              )}
            </Button>
          </Box>
          <CardShop open={dialogOpen} onClose={handleCloseDialog} />
        </Box>
      </div>

      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root": {
            height: "100%",
            bgcolor: "#0e1320",
          },
        }}
      >
        <IconButton
          onClick={toggleDrawer("top", false)}
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            ":hover": {
              rotate: "360deg",
              transition: "0.3s",
              color: "red",
            },
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Stack direction={"column"} className="flex items-center ">
          <Link to={"/"} className="p-7">
            <Button
              sx={{
                cursor: "pointer",
                color: "white",
                ":hover": { color: "#0659aa" },
              }}
              className="pr-8"
              onClick={toggleDrawer("top", false)}
            >
              Home
            </Button>
          </Link>
          <Link to={"/Categore"} className="pb-7">
            <Button
              sx={{
                cursor: "pointer",
                color: "white",
                ":hover": { color: "#0659aa" },
              }}
              className="pr-8"
              onClick={toggleDrawer("top", false)}
            >
              Category
            </Button>
          </Link>

          <Link to={"/AboutUs"} className="pb-7">
            <Button
              sx={{
                cursor: "pointer",
                color: "white",
                ":hover": { color: "#0659aa" },
              }}
              className="pr-8"
              onClick={toggleDrawer("top", false)}
            >
              About Us
            </Button>
          </Link>
          <Link to={"/ContactUs"} className="pb-7">
            <Button
              sx={{
                cursor: "pointer",
                color: "white",
                ":hover": { color: "#0659aa" },
              }}
              className="pr-8"
              onClick={toggleDrawer("top", false)}
            >
              Contact Us
            </Button>
          </Link>
          <Button
            sx={{
              cursor: "pointer",
              color: "white",
              ":hover": { color: "#0659aa" },
            }}
            className="pr-8"
            onClick={toggleDrawer("top", false)}
          >
            Register
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}

export default Header1;
