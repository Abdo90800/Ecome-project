import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import { useState } from "react";
import CardShop from "../../pages/Dialogs/CardShop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header1() {
  const items = useSelector((state) => state.cart.items);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
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
            BOOK <ImportContactsOutlinedIcon /> STORE
          </Typography>
        </Box>
        <Box className="flex items-center">
          <Link to={"/LogIn"}>
            <Button sx={{color:"white"}} className="p-8">Sign in</Button>
          </Link>
        <Link to={"/SignUp"}>
            <Button sx={{color:"white"}}>Create an account</Button>
        </Link>
        </Box>
      </div>
      <Box className="flex items-center justify-between w-full p-8 bg-white">
        <Box className="flex items-center">
          <Link to={"/"}>
            <Button sx={{ cursor: "pointer" }} className="pr-8">
              Home
            </Button>
          </Link>
          <Link to={"/Authors"}>
            <Button sx={{ cursor: "pointer" }} className="pr-8">
              Authors
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
  );
}

export default Header1;
