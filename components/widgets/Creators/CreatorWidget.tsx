import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import {Themebutton4} from '../../Elements/Button';

interface itemProps {
    item: {
        id: number;
        img: string;
        round_img: string;
        title: string;
        brand_title: string;
        currency: string;
        stoke: string;
    }
}
const CreatorWidget:FC<itemProps> = ({item}) => {
    const {id, img,round_img, title, brand_title, currency, stoke} = item
    return (
        <div className='CreatorWidget glass_effect_3 border-[.5px] border-[#FFA011]/30 rounded-2xl p-5 hover:border-primary transition-all duration-300'>
            <div className="CreatorWidget_top flex items-center justify-between border-b-[.75px] border-[#3F3F3F] mb-5 pb-3">
                <span className='text-xs text-green font-medium'>{currency}</span>
                <span className='text-gray_text text-xs font-medium '>{stoke} in stock</span>
            </div>
            <Link href="#" className="CreatorWidget_middle_wrapper mb-[45px] block">
                <div className="gradient_border_3 rounded-lg p-[1px]">
                    <div className={`CreatorWidget_middle_thumb rounded-lg h-[98px]  bg-no-repeat bg-cover bg-left relative flex items-end justify-center`} style={{ backgroundImage: `url(${img})` }} >
                        <div className="w-16 h-16 rounded-full border-primary border-[1px] shadow-theme_shadow3 relative bottom-[-30px] ">
                            <Image src={round_img}  fill  className='rounded-full'  alt="Creators small"/>
                        </div>
                    </div>
               </div>
            </Link>
            <div className="CreatorWidget_bottom flex items-center justify-between   mb-0 ">
                <div className="">
                    <h4 className='text-base text-gray_text5 font-semibold flex-grow hover:text-primary transition-all duration-300'>
                        <Link href="#">{title}</Link>
                    </h4>
                    <span className='text-xs font-normal text-gray_text capitalize '>{brand_title}</span>
                </div>
                <Themebutton4 buttonProps ={{block: false, button_size: "30" , shadow:true}} >
                    Follow
                </Themebutton4>
            </div>
        </div>
    );
};

export default CreatorWidget;