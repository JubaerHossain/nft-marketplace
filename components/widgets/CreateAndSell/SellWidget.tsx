import Image from 'next/image';
import React, { FC } from 'react';

interface itemProps {
    item: {
        id: number,
        img : string,
        title : string,
        description : string
    }
}
const SellWidget:FC<itemProps> = ({item}) => {
    const {img,title, description } = item;
    return (
        <div className="gradientBorderHover2 rounded-2xl p-[1px] transition-all ease-in  h-full">
            <div className="create_sell_box bg-secondary rounded-rounded-2xl transition-all flex flex-col justify-center pt-[21px] pb-[23px] rounded-2xl items-center px-5 h-full">
                <div className="thumb w-14 h-14 flex items-center justify-center" >
                    <Image width="56" height="56" src={img} alt='#'/>
                </div>
                <h4 className='text-base text-white text-center font-normal mt-5 mb-3'>{title}</h4>
                <p className='text-gray_text font-normal text-sm leading-5 text-center'>{description}</p>
            </div>
        </div>
    );
};

export default SellWidget;