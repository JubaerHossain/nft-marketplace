import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <>
        <section className='onest_banner_area pb-12 relative lg:pt-[296px] pt-24  z-0  before:bg-banner-pattern before:h-[1080px] before:top-0 before:left-0 before:w-full before:content"" before:z-12 before:absolute before:bg-no-repeat before:bg-cover before:bg-left-top before:z-[-1]'>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                {/* onest_banner_text ::start  */}
                    <div className="onest_banner_text md:col-span-8 lg:col-span-8 order-last md:order-first">
                        <h3 className='text-4xl md:text-[35px] lg:text-[66px] font-bold text-white xl:leading-[5.625rem] lg:leading-[4.625rem] leading-snug mb-4 gradient_text'>
                            Discover, <span className=" stroke_text text-secondary">collect</span>, and sell <span className='text-primary'> <span className=' stroke_text2'>Extraordinary</span> </span> NFTs 
                        </h3>
                        <p className='text-lg text-[#FAF9FD] leading-7 lg:mb-12 max-w-[721px] md:mb-8 mb-6 '>The OnestCrypto is a  NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology.</p>
                        <div className="flex gap-4 flex-wrap pt-1">
                            <Link href="/explore" className="btn btn-primary rounded-full inline-flex gap-2.5 px-[25px] py-[6px] h-11 h-m-[44px] min-h-max min-w-[150px]"><span className=" text-base text-white capitalize font-medium">Explore NFTs</span>
                            </Link>
                            <button className="btn rounded-full btn-outline inline-flex gap-2.5 px-[25px] py-[6px] h-11 h-m-[44px] min-h-max min-w-[150px] hover:bg-white transition-all">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="9" r="8.5" fill="#FF9900"/>
                                    <path d="M10.7473 9.46441L6.77059 11.9254C6.4331 12.134 6 11.8814 6 11.4608V6.53882C6 6.11888 6.43248 5.86558 6.77059 6.07489L10.7473 8.53588C10.824 8.58262 10.8879 8.65018 10.9322 8.73172C10.9766 8.81326 11 8.90586 11 9.00014C11 9.09443 10.9766 9.18703 10.9322 9.26857C10.8879 9.3501 10.824 9.41767 10.7473 9.46441Z" fill="white"/>
                                </svg>
                                <span className=" text-base text-primary capitalize font-medium ">Learn More</span>
                            </button>
                        </div>
                    </div>
                    {/* onest_banner_text ::end  */}
                    <div className="onest_banner_img md:col-span-4 lg:col-span-4">
                        <div className="max-w-[480px]  relative xl:left-[-40px] xl:w-[480px]">
                            <Image src="/assets/imgs/banner_imgs/bannerImg.png" width="480" height="460"  alt='#'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroSection;