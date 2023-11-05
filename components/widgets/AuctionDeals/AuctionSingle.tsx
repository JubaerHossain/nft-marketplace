import Image from 'next/image';
import React, { FC } from 'react';
import { Themebutton } from '../../Elements/Button';

interface itemProps {
    item: {
        id: number;
        img: string;
        title: string;
        counter: string;
    }
}

const AuctionSingle:FC<itemProps> = ({item}) => {
    const {id,img , title, counter} = item;
    return (
        <div className="Auction_deal_box  relative h-[280px] md:h-[400px] xl:h-[492px] bg-cover bg-center rounded-[32px] group overflow-hidden" >
            <Image className='rounded-[32px] group-hover:scale-110 transition-all duration-300' fill src={img} alt="" />
            <div className="Auction_deal_box_info border-white/30 border-[1px]  rounded-tr-2xl glass_effect_1 flex items-center gap-2 px-[28px] lg:py-[25px] py-4 z-10 bg-white absolute left-[33px] bottom-[33px] right-[33px] rounded-[16px] flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap">
                <div className="Auction_deal_box_info_left flex-grow ">
                    <span className='text-sm font-medium text-white  whitespace-nowrap block mb-2'>{title}</span>
                    <h4 className='text-xl text-white font-semibold whitespace-nowrap '>{counter}</h4>
                </div>
                <Themebutton buttonProps={{link :"/auction/" + id  }}>Place Bid</Themebutton>
            </div>
        </div>
    );
};

export default AuctionSingle;