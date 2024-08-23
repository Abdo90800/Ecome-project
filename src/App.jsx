import Header1 from "./component/header/Header1";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutUs from "./pages/aboutus/AboutUs";
import Authors from "./pages/authors/Authors";
import ContactUs from "./pages/contactUs/ContactUs";
import SignUp from "./pages/Signto/Signup";
import LogIn from "./pages/Signto/LogIn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header1 />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Routes>
          <Route path="/Authors" element={<Authors />} />
        </Routes>

        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
