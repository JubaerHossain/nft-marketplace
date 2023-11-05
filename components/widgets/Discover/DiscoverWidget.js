import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {ThemeButton2} from '../../Elements/Button';
import { HeartIcon } from '../../icons';


const DiscoverWidget = () => {
    return (
        <div className='gradientBorderHover'>
            <div className="discover_Widget p-[18px] bg-secondary rounded-2xl group">
                <div className="thumb relative rounded-[14px] mb-4">
                    <Link className='block overflow-hidden rounded-[14px]' href="#">
                        <Image className='group-hover:scale-110 transition-all duration-300' src="/assets/imgs/discover/discover_1.png" height="100" width="100" layout="responsive" alt="discover" />
                    </Link>
                    <div className="timer absolute left-[6px] top-[12px] text-xs font-medium glass_effect_2 text-white rounded-full h-6 flex items-center px-[10px] border-[1px] border-[#252421]/10 ">
                        5h 25m 3s left
                    </div>
                    <button className="heart_icon w-7 h-7 flex items-center bg-[#2C2B3B] rounded-full absolute top-[10px] right-[8px] justify-center hover:bg-secondary transition-all duration-300">
                        <HeartIcon/>
                    </button>
                </div>
                <div className="discover_Widget_content mt-4">
                    <div className="discover_Widget_content_inner flex items-center mb-4">
                        <h4 className='text-lg text-white font-bold flex-grow hover:text-primary transition-all duration-300'>
                            <Link href="#">ArtCrypto</Link>
                        </h4>
                        <ThemeButton2>
                            Place a Bid
                        </ThemeButton2>
                    </div>
                    <div className="gradient_border_1 h-[1px] relative  block left-[-18px] width_calc_1 "></div>
                    <div className="discover_Widget_content_bottom flex items-center mt-[10px]">
                        <div className="discover_Widget_content_bottom_left flex flex-grow ">
                            <div className="discover_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-30">
                                <Image src="/assets/imgs/discover/discover_small_1.png" height="30" width="30" alt='#' />
                            </div>
                            <div className="discover_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-20">
                                <Image src="/assets/imgs/discover/discover_small_2.png" height="30" width="30" alt='#' />
                            </div>
                            <div className="discover_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-10">
                                <Image src="/assets/imgs/discover/discover_small_2.png" height="30" width="30" alt='#' />
                            </div>
                            <div className="discover_Widget_content_bottom_img [&:not(:first-child)]:ml-[-5px] relative z-0 flex bg-white text-[#484848] w-[30px] h-[30px] rounded-full text-xs justify-center items-center font-normal">
                                26+
                            </div>
                        </div>
                        <div className="discover_Widget_content_bottom_right">
                            <span className='text-gray_text text-xs font-normal mb-[5px] block'>Current Bid</span>
                            <div className="flex items-center gap-[6px]">
                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.10201 7.63125L4.05234 10.1687L0 7.63125L4.05234 0.5L8.10201 7.63125ZM4.05234 10.9836L0 8.44609L4.05234 14.5L8.10468 8.44609L4.05234 10.9836Z" fill="#FF9900"/>
                                </svg>
                                <h4 className='text-xs text-primary font-semibold leading-none'>0.04 ETH</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverWidget;