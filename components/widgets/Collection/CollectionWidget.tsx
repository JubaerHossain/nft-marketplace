import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Themebutton4, ThemeLineButton2} from '../../Elements/Button';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperClass from "swiper/types/swiper-class";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller, Autoplay } from "swiper";

interface itemProps {
    collectionItem: {
        id: number;
        title: string;
        subText?: string;
        description: string;
        prise: string;
        item_collection: string;
        collection_name: string;
        collector_profileName: string;
        imgs: string[];
        tab_imgs: string[];
    }
}

const CollectionWidget:FC<itemProps> = ({collectionItem}) => {
    const {title,subText, description , prise, item_collection ,collection_name, collector_profileName , imgs , tab_imgs} = collectionItem;
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
    const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);
    return (
        <div className='CollectionWidget flex gap-6 flex-wrap lg:flex-nowrap  '>
            <div className="CollectionWidget_left max-w-[330px] w-full">
                <Swiper
                    onSwiper={(swiper) => {
                    if (swiper1Ref.current !== null) {
                        swiper1Ref.current = swiper;
                    }
                    }}
                    loop={true}
                    preloadImages={false}
                    controller={{ control: secondSwiper }}
                    spaceBetween={10}
                    slidesPerView={1}
                    grabCursor={true}
                    autoplay = {true}
                    thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs, Controller, Autoplay]}
                    className="max-w-full rounded-xl"
                >
                    {
                      imgs && imgs?.map((item , index)=> {
                            return(
                                <SwiperSlide key={index}>
                                    <Image src={item} alt={title} width="330" height="340" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper
                    controller={{ control: firstSwiper }}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    watchSlidesProgress
                    touchRatio={0.2}
                    preloadImages={false}
                    grabCursor={true}
                    lazy
                    slideToClickedSlide={true}
                    autoplay = {true}
                    onSwiper={setThumbsSwiper}
                    modules={[Navigation, Thumbs, Controller, Autoplay]}
                    className="mt-[15px] rounded-xl"
                >
                    {
                      tab_imgs && tab_imgs?.map((item , index)=> {
                            return(
                                <SwiperSlide key={index} className=" flex items-center flex-shrink-0">
                                    <div className="relative w-full h-[85px]">
                                        <Image src={item} fill alt={title}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="CollectionWidget_content">
                <Link className=' text-2xl md:text-[30px] text-white font-bold leading-10 hover:text-primary transition-all duration-300 mb-[10px] block' href="#">{title}</Link>
                <div className="flex gap-[6px] items-center mb-2 md:mb-4">
                    <div className="w-[21px] h-[21px] rounded-full bg-primary/10 inline-flex items-center justify-center">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.0927 10.2854L0.161133 7.89371L4.0903 13.6032L8.02387 7.89371L4.0903 10.2854H4.0927ZM4.15113 0.400635L0.221169 7.12427L4.15113 9.52006L8.0827 7.12674L4.15113 0.400635Z" fill="#FF9900"/>
                        </svg>
                    </div>
                    <p  className='text-xs text-primary uppercase'>{prise} <span className='text-gray_text'>{item_collection}</span></p>
                </div>
                <p className='text-gray_text text-sm leading-[21px] font-medium mb-[27px]'>{description}</p>
                <div className="flex gap-5 mb-6 md:mb-[52px] items-center">
                    <div className="flex-1 ">
                        <h4 className='text-white text-[20px] font-bold capitalize mb-[7px]'>{collection_name}</h4>
                        <div className="flex items-center gap-[10px]">
                            <div className="relative w-7 h-7">
                                <Image src="/assets/imgs/collections/small_author.png" fill alt="small_author"/>
                            </div>
                            <span className='text-sm font-normal text-gray_text6'>{collector_profileName}</span>
                        </div>
                    </div>
                    <Themebutton4 buttonProps ={{block: false, button_size: "30" , shadow:true}} >
                        Follow
                    </Themebutton4>
                </div>
                <ThemeLineButton2 buttonProps={{block: true, button_size: "44" , shadow:"active"}} >
                    See Drops
                </ThemeLineButton2>
            </div>
        </div>
    );
};

export default CollectionWidget;