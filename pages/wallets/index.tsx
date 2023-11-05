import React from 'react';
import Wrapper from '../../components/Layout/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import walletData from "../api/wallets.json"

const Wallets = () => {
    return (
        <Wrapper>
        <section className='auction_details lg:pb-160px pb-80px lg:pt-155px pt-80px'>
            <div className='container'>
                <div className='details_title mb-6 lg:mb-[40px]'>
                    <div className='details_title_inner flex gap-4 border-b-[.5px] border-[#FFA011]/50 items-center pb-[12px] mb-[15px]'>
                        <h3 className='lg:text-[36px] font-semibold text-white leading-normal text-xl'>Wallets</h3>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    {
                        walletData?.map((item, index)=> {
                            const{img,title,desc} =item;

                            return (
                                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3  ">
                                     {/* Wrapper div for each wallet item */}
                                     <Link href='/auth' className="gradientBorderHover  h-full block relative ">
                                        <div className="wallet_Box bg-secondary rounded-2xl pt-[40px] pb-[30px] px-[25px] flex flex-col items-center h-full">
                                            <div className="walletImg">
                                                <Image src={img} alt="#"  width='80' height="80" />
                                            </div>
                                            <div className="wallet_box_text text-center">
                                                <h4 className='text-[22px] font-semibold text-white capitalize transition-all duration-300 mb-[9px] mt-[18px] block hover:text-primary'>{title}</h4>
                                                <p className='text-base leading-[22px] text-gray_text font-normal'>{desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
          </section>
        </Wrapper>
    );
};

export default Wallets;