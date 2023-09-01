import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import right from "../images/right.jpg";
import left from "../images/left.jpg";

function Slider(elements) {
  return (
    <div className={`caurosel caurosel_type_visible`}>
      <img
        src={left}
        className="caurosel__chevron_type_prev"
        alt="left arrow"
      ></img>
      <Swiper
        className="caurosel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".caurosel__chevron_type_next",
          prevEl: ".caurosel__chevron_type_prev",
        }}
      >
        <SwiperSlide>{elements.elements[0]}</SwiperSlide>
        <SwiperSlide>{elements.elements[1]}</SwiperSlide>
        <SwiperSlide>{elements.elements[2]}</SwiperSlide>
      </Swiper>
      <img
        src={right}
        className="caurosel__chevron_type_next"
        alt="right arrow"
      ></img>
    </div>
  );
}

export default Slider;
