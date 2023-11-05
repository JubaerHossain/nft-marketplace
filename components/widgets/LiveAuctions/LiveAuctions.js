import Image from 'next/image';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from '../../Elements/SectionTitle';
import { Autoplay } from 'swiper/modules';
const LiveAuctions = () => {
    return (
        <section className='lg:pb-158px md:pb-80px pb-60px '>
            <div className="container">
                <div className="flex items-center justify-between mb-10">
                    <SectionTitle>
                    Live Auctions
                    </SectionTitle>
                </div>
                <Swiper  
                    className="mySwiper"
                    modules={[Autoplay]} 
                    loop= {true}
                    autoplay={{
                        delay: 5000,
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
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 62,
                      },
                    }}            
                    >
                    {
                       [1,2,3].map((item, index)=> {
                        return (
                            <SwiperSlide key={index}>
                                <div className="auction_widget border-2 border-white/30 lg:p-14 md:p-6 py-8 p-5 flex justify-center text-center flex-col rounded-2xl justify-center">
                                    <h4 className='lg:text-3xl font-bold text-white mb-7 text-2xl'>The Art | Smart Tech Fusion</h4>
                                    <div className="thumb lg:mx-auto  ">
                                        <Image src="/assets/imgs/Auctions/1.png" width="240" height="398" className='mx-auto'  alt='#'></Image>
                                    </div>
                                    <div className="counter_box p-[22px] rounded-2xl mb-5 border-[1px] border-white/30 glass_effect_1 ">
                                        <span className='lg:text-lg text-white/70 font-medium text-base'>Auction Ends in</span>
                                        <div className="flex gap-6 justify-center">
                                            <span className='text-white lg:text-[35px] font-semibold text-2xl w-full'>18 : 25 : 44</span>
                                        </div>
                                    </div>
                                    <span className='text-gray_text font-normal lg:text-[26px] text-xl'>Current Bid</span>
                                    <h3 className='text-white font-medium text-2xl md:text-[35px] mb-7 mt-5 '>0.0840 ETH</h3>
                                    <button className="btn btn-primary rounded-full w-full inline-flex gap-2.5 px-[25px] py-[6px] h-[50px] h-m-[50px] min-h-max text-base text-white capitalize font-medium">
                                        Place a Bid
                                    </button>
                                </div>
                            </SwiperSlide>
                        )
                       }) 
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default LiveAuctions;