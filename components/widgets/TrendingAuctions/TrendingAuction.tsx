import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/modules";
import trandingAuctions from "../../../pages/api/tranding_auctions.json";
import { ThemeLineButton } from "../../Elements/Button";
import { SectionTitle } from "../../Elements/SectionTitle";
import TrendingWidget from "./TrendingWidget";

const TrendingAuction = () => {
  return (
    <div className="TrendingAuction_area lg:pb-155px md:pb-80px pb-60px relative z-50">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle>Trending Auctions</SectionTitle>
          <ThemeLineButton
            buttonProps={{ text: "View All", url: "/auction" }}
          />
        </div>
        <div className="">
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
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {trandingAuctions?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <TrendingWidget item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrendingAuction;
