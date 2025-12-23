import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "@mui/material";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Carousel = ({ items, renderItem, carouselId }) => {
  const prevClass = `swiper-prev-${carouselId}`;
  const nextClass = `swiper-next-${carouselId}`;

  return (
    <Box sx={{ position: "relative" }}>
      {/* Scoped Navigation */}
      <LeftNav className={prevClass} />
      <RightNav className={nextClass} />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        spaceBetween={24}
        slidesPerView="auto"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} style={{ width: 160}}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
