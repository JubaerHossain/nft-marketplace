import Link from 'next/link';
import React, { FC } from 'react';
interface itemProps {
    item: {
        id: number,
        img : string,
        round_img : string,
        title : string,
        sub_text : string
    }
}
const ExploreWidget:FC<itemProps> = ({item}) => {
    const {id,img, round_img,title, sub_text} =item;
    return (
        <Link href={`/explore/${id}`} className="explore_widget rounded-2xl group">
            <div className="explore_img relative overflow-hidden rounded-2xl">
                <img src={img} className='img-fluid group-hover:scale-110 transition-all duration-300' alt="" />
                <div className="explore_content absolute bottom-0 left-0 w-full h-full flex items-end px-8 py-9 bg-gradient_2 rounded-2xl">
                    <div className="explore_content_info flex gap-3 items-center">
                        <div className="explore_content_img w-[54px] h-[54px] rounded-full">
                            <img src={round_img} alt="" />
                        </div>
                        <div className="explore_content_info">
                            <h5 className='text-[20px] font-semibold leading-tight text-white mb-[3px] transition-all duration-300 hover:text-primary' >{title}</h5>
                            <p className='text-primary text-sm font-medium'>{sub_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ExploreWidget;