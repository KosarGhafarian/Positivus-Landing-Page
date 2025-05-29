import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import MediaQuery from "../hooks/MediaQuery";
import SubHeader from "../components/SubHeader";
import { TestimonialsList } from "../constant/index";
import "../assets/styles/testimonials.css";

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      sx={{ marginBottom: "100px", paddingBottom: "100px" }}
    >
      <SubHeader
        name="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        sx={{ width: "498px !important" }}
      />
      <Swiper
        setWrapperSize
        slidesPerView={MediaQuery() ? 2 : 1}
        centeredSlides={MediaQuery() ? true : false}
        spaceBetween={MediaQuery() ? 20 : 40}
        loop={MediaQuery() ? true : false}
        pagination={{
          clickable: false,
          renderBullet: (index, className) => {
            return `
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="${className} custom-bullet">
            <path class="paginationStar" d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
            </svg>`;
          },
        }}
        modules={[Pagination]}
        className="testimonialsSwiper"
      >
        {TestimonialsList.map((item) => (
          <SwiperSlide key={item.id}>
            <Box className="testimonial-card">
              <Typography className="quote">"{item.quote}"</Typography>
            </Box>
            <Box className="arrow-down"></Box>
            <Box className="person">
              <Typography className="name">{item.name}</Typography>
              <Typography className="title">{item.title}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
