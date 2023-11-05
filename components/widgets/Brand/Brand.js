import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import brands from '../../../pages/api/brand.json';
const Brand = () => {
    return (
        <section className='brand_section mb-[70px]'>
            <div className="container">
                <div className=" bg-secondary rounded-[30px] md:px-11 md:py-16 py-6 px-6">
                        <Swiper  className="brand_slider_wrapper" spaceBetween={40}   slidesPerView={true}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                            width: 640,
                            slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                            width: 768,
                            slidesPerView: 2,
                            },
                            // when window width is >= 992px
                            992: {
                            width: 992,
                            slidesPerView: 3,
                            },
                            // when window width is >= 1200px
                            1200: {
                            width: 1200,
                            slidesPerView: 4,
                            },
                            
                        }}>
                        {
                        brands.map((singleBrand)=> {
                            const {brand_img, id} = singleBrand;
                            return (
                                <SwiperSlide className="single_Brand flex items-center  justify-center " key={id}>
                                    <Image src={brand_img} alt="#" width="200" height="300"  />
                                </SwiperSlide>
                            )
                        }) 
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Brand;