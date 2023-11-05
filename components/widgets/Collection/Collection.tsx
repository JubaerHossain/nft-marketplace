import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import collectionData from "../../../pages/api/Nft_collections.json";
import { ThemeLineButton } from "../../Elements/Button";
import { SectionTitle } from "../../Elements/SectionTitle";
import CollectionWidget from "./CollectionWidget";
import { Autoplay } from "swiper/modules";
const Collection = () => {
  return (
    <div className="Collection_section lg:pb-160px md:pb-80px pb-60px ">
      <div className="container">
        <div className="flex justify-between gap-4 flex-wrap mb-10">
          <SectionTitle>Our Top NFTs Collections</SectionTitle>
          <ThemeLineButton
            buttonProps={{
              text: "View All",
              block: "block",
              button_size: "40",
              shadow: "active",
              url: "/collections",
            }}
          />
        </div>
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 53,
            },
          }}
        >
          {collectionData?.map((collection_item) => {
            return (
              <SwiperSlide key={collection_item.id}>
                <CollectionWidget collectionItem={collection_item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Collection;
