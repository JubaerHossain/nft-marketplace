import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import creatorsData from "../../../pages/api/creators.json";
import { ThemeLineButton } from "../../Elements/Button";
import { SectionTitle } from "../../Elements/SectionTitle";
import CreatorWidget from "./CreatorWidget";
import { Autoplay } from "swiper/modules";
const Creators = () => {
  return (
    <section className="creator_section lg:pb-160px md:pb-80px pb-60px">
      <div className="container">
        <div className="flex justify-between gap-4 flex-wrap mb-10">
          <SectionTitle>Our Top Creators</SectionTitle>
          <ThemeLineButton
            buttonProps={{
              text: "View All",
              block: "block",
              button_size: "40",
              shadow: "active",
              url: "/top-creators",
            }}
          />
        </div>
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 13,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 13,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 13,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 13,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 13,
            },
          }}
        >
          {creatorsData?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CreatorWidget item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Creators;
