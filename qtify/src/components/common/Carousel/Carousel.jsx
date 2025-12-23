import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Box } from "@mui/material";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Carousel = ({ items, renderItem }) => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Navigation Buttons */}
      <LeftNav />
      <RightNav />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        spaceBetween={24}
        slidesPerView="auto"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "160px" }}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
