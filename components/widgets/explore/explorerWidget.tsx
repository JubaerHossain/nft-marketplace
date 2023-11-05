import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface itemProps {
    item: {
        id: number;
        subText: string;
        countDown_time: string;
        img: string;
        title: string;
        currency: string;
        loved: string;
    }
}
const ExplorerWidget:FC<itemProps> = ({item}) => {
    return (
        <div className="explore_widget rounded-2xl group">
            <div className="explore_img relative overflow-hidden rounded-2xl ">
                <Link href="#">
                    <Image src="/assets/imgs/explore/details_1.png" width="500" height="500" className='img-fluid transition-all duration-300 group-hover:scale-110' alt="#" />
                </Link>
                <div className="collection_icon absolute top-[23px] right-[17px]">
                    <Image src="/assets/imgs/explore/collectionIcon.png" width="40"  height="40" alt='collectionIcon'/>
                </div>
                <Link href="#" className="explore_content absolute bottom-0 left-0 w-full h-full flex items-end px-[27px] py-[13px] bg-gradient_3 rounded-2xl">
                    <div className="explore_content_info">
                    <h5 className='text-[18px] font-semibold leading-tight text-white mb-[6px] hover:text-primary transition-all duration-300' >Artificial Pixie Jumoo #198</h5>
                        <div className="flex items-center gap-[7px]">
                            <div className="icon w-6 h-6">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="12.5" cy="12.0035" r="12" fill="#FF9900"/>
                                    <path d="M11.9668 16.234L7.5 13.5167L11.9641 20.0035L16.4332 13.5167L11.9641 16.234H11.9668ZM12.0332 5.00354L7.56821 12.6425L12.0332 15.3645L16.5 12.6453L12.0332 5.00354Z" fill="#FF9900"/>
                                </svg>
                            </div>
                            <p className='text-gray_text text-sm font-medium'><span className='text-primary'>0.475 </span> FLOW 1/2</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ExplorerWidget;