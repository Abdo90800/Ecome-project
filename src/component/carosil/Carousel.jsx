// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import imgs1 from "../../img/1.jpg";
import imgs2 from "../../img/2.jpg";
import imgs3 from "../../img/3.jpg";
// import required modules
import { Pagination } from "swiper/modules";
import Box from "@mui/material/Box";
function carousel() {
  return (
    <Container className="mt-8 ">
      <Box sx={{ width: "100%", height: "400px" }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded-xl"
        >
          <SwiperSlide className="hover:cursor-grab">
            <img src={imgs1} alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide className="hover:cursor-grab">
            <img src={imgs2} alt="Image 1" />
          </SwiperSlide>

          <SwiperSlide className="hover:cursor-grab">
            <img src={imgs3} alt="Image 1" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
}

export default carousel;
