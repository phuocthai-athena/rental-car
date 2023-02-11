import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import beach from "assets/images/beach.jpg";
import building from "assets/images/building.jpg";
import goldenEagle from "assets/images/golden-eagle.jpg";
import noImage from "assets/images/no-image.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import * as S from "./style";

const listImages = [
  {
    img: <img src={beach || noImage} alt="1" />,
  },
  {
    img: <img src={building || noImage} alt="2" />,
  },
  {
    img: <img src={goldenEagle || noImage} alt="3" />,
  },
  {
    img: <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="4" />,
  },
  {
    img: <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="5" />,
  },
  {
    img: <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="3" />,
  },
];

const CarSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <S.CarSlideContainer>
      <S.CarSlideCarousel>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={24}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="car-detail-carousel-1"
        >
          {listImages.map((item, index) => (
            <SwiperSlide key={index}>{item.img}</SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="car-detail-carousel-2"
        >
          {listImages.map((item, index) => (
            <SwiperSlide key={index}>{item.img}</SwiperSlide>
          ))}
        </Swiper>
      </S.CarSlideCarousel>
    </S.CarSlideContainer>
  );
};

export default CarSlide;
