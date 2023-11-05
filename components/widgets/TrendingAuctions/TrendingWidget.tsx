import React, { FC } from 'react';
import {Themebutton3} from '../../Elements/Button';
import Image from 'next/image';
import Link from 'next/link';
interface intemProps {
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
// GETTING item FROM trendingAuction 
const TrendingWidget:FC<intemProps> = ({item}) => {
    const {id,subText, countDown_time, img, title, loved, currency} =item;
    return (
        <div className="rounded-2xl bg-secondary p-[2px] border-secondary hover:bg-transparent hover:border-transparent hover:p-[2px] transition-all duration-300 hover:gradientBorderHover3">
        {/* <div className="rounded-2xl hover:bg-gradient_1 p-[2px] transition-all duration-1000 "> */}
            <div className="TrendingAuction_Widget relative p-6 bg-secondary rounded-2xl ">
                <span className='text-primary font-normal text-sm text-center block '>{subText}</span>
                <h4 className='text-[22px] font-semibold text-[#E0E0E0] text-center mb-[10px]'>{countDown_time}</h4>
                <div className="thumb relative rounded-[14px] mb-0 ">
                    <div className="bg-gradient_border_1 p-[1px] rounded-[11.08px] overflow-hidden">
                        <Image src={img}  height="100" width="100" layout="responsive" alt="discover" />
                    </div>
                    <button className="heart_icon w-7 h-7 flex items-center bg-[#2C2B3B] rounded-full absolute top-[10px] right-[8px] justify-center hover:bg-secondary transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7001 2.58334C12.1917 2.58334 10.8417 3.31668 10.0001 4.44168C9.15841 3.31668 7.80841 2.58334 6.30008 2.58334C3.74175 2.58334 1.66675 4.66668 1.66675 7.24168C1.66675 8.23334 1.82508 9.15001 2.10008 10C3.41675 14.1667 7.47508 16.6583 9.48342 17.3417C9.76675 17.4417 10.2334 17.4417 10.5167 17.3417C12.5251 16.6583 16.5834 14.1667 17.9001 10C18.1751 9.15001 18.3334 8.23334 18.3334 7.24168C18.3334 4.66668 16.2584 2.58334 13.7001 2.58334Z" fill="#FDBB27"/>
                        </svg>
                    </button>
                    <div className="TrendingAuction_Widget_content_bottom flex items-center mt-[0px] mr-[10px] relative top-[-16px] ">
                        <div className="TrendingAuction_Widget_content_bottom_left flex flex-grow ">
                            <div className="TrendingAuction_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-30">
                                <Image src="/assets/imgs/discover/discover_small_1.png" height="30" width="30" alt='#' />
                            </div>
                            <div className="TrendingAuction_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-20">
                                <Image src="/assets/imgs/discover/discover_small_2.png" height="30" width="30" alt='#' />
                            </div>
                            <div className="TrendingAuction_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-10">
                                <Image src="/assets/imgs/discover/discover_small_2.png" height="30" width="30" alt='#' />
                            </div>
                            <div className="TrendingAuction_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-0 flex items-center bg-white text-[#484848] w-[30px] h-[30px] rounded-full text-xs justify-center items-center font-normal">
                            26+
                            </div>
                        </div>
                        <div className="p-[1px]  gradient_border_2 rounded-[30px] shadow-theme_shadow2 h-8">
                            <button className='flex items-center gap-[8px] bg-[#2C2B3B]  px-4  relative rounded-full h-[30px] '>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.83333 1.66675L17.3333 9.16675L9.83333 16.2501V11.6667C4 11.6667 1.5 17.9167 1.5 17.9167C1.5 10.8334 3.58333 6.25008 9.83333 6.25008V1.66675Z" stroke="#FDBB27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='text-sm text-[#FDBB27] font-normal  '>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="TrendingAuction_Widget_content mt-0">
                    <div className="TrendingAuction_Widget_content_inner flex items-end mb-9">
                        <div className="flex-1">
                            <h4 className='text-[22px] text-white font-semibold flex-grow mb-[6px] hover:text-primary transition-all duration-300'>
                                <Link href={`auction/${id}`}>{title}</Link>
                            </h4>
                            <p className='text-gray_text text-sm font-medium'>Current Listed: <span className='text-primary'>{currency}</span> </p>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8213 3.37041C16.5538 2.72849 16.1681 2.14678 15.6859 1.65786C15.2032 1.16749 14.6342 0.777789 14.0097 0.509965C13.3622 0.231145 12.6676 0.0884296 11.9664 0.0901024C10.9827 0.0901024 10.0229 0.369321 9.18884 0.896735C8.9893 1.0229 8.79973 1.16148 8.62015 1.31246C8.44056 1.16148 8.251 1.0229 8.05146 0.896735C7.21738 0.369321 6.25759 0.0901024 5.27385 0.0901024C4.56548 0.0901024 3.87907 0.230746 3.23056 0.509965C2.604 0.778842 2.0393 1.16561 1.55442 1.65786C1.07153 2.14623 0.685776 2.72807 0.419035 3.37041C0.141674 4.03846 0 4.74789 0 5.47799C0 6.16673 0.135688 6.88443 0.405067 7.61453C0.630548 8.22468 0.953803 8.85757 1.36685 9.49667C2.02134 10.5081 2.92127 11.5629 4.0387 12.6322C5.89043 14.4047 7.72421 15.6291 7.80203 15.6788L8.27494 15.9932C8.48446 16.1317 8.75384 16.1317 8.96336 15.9932L9.43627 15.6788C9.51409 15.6271 11.3459 14.4047 13.1996 12.6322C14.317 11.5629 15.217 10.5081 15.8714 9.49667C16.2845 8.85757 16.6097 8.22468 16.8332 7.61453C17.1026 6.88443 17.2383 6.16673 17.2383 5.47799C17.2403 4.74789 17.0986 4.03846 16.8213 3.37041Z" fill="#777E90"/>
                            </svg>
                            <span className='text-sm text-gray_text font-medium'>{loved}</span>
                        </div>
                    </div>
                    <Themebutton3 buttonProps ={{text: "Place a Bid", block: "block", button_size: "44" , shadow:"active"}} />
                </div>
            </div>
        </div>
    );
};

export default TrendingWidget;