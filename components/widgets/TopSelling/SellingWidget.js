import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SellingWidget = () => {
    return (
        <div className='gradientBorderHover2 before:rounded-[16px] p-[1px] transition-all duration-1000  rounded-[16px] mx-[-1px] group border border-white/30 group-hover:border-transparent'>
            <div className='Selling_widget gap-5  rounded-[16px]  '>
                <div className="bg-secondary rounded-[16px] overflow-hidden flex items-center p-5 gap-5 flex-wrap relative ">
                    <div className="Selling_widget_img border rounded-full border-white w-[70px] h-[70px]">
                        <Image src="/assets/imgs/topSelling/1.png" width="70" height="70" alt='#'></Image>
                    </div>
                    <div className="Selling_widget_content grow">
                        <Link href="top-seles/1" className='text-base font-medium text-white mb-[5px] hover:text-primary transition-all'>Mutant Ultra #0086</Link>
                        <div className="flex items-center gap-x-2 mb-3">
                            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                            </svg>
                            <span className='text-base text-gray_text uppercase'> <span className='text-primary '>0.036 ETH</span> Minted</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-[4px] border border-[#8F6839] rounded-full h-[26px] pr-[8px] pl-[8px] min-w-[105px]  ">
                                <Image src="/assets/imgs/topSelling/small_1.png" width='16' height="16" alt='#'></Image>
                                <p className='text-xs font-normal text-gray_text'>(09B3m90f)</p>
                            </div>
                            <p className='text-gray_text text-xs font-normal'>17:35 | 13 days ago</p>
                        </div>
                    </div>
                    <div className='bulet_imgs mr-1 absolute top-[30px] right-[30px] xl:static'>
                        <svg width="5" height="24" viewBox="0 0 5 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.40003 4.80006C3.72553 4.80006 4.80006 3.72553 4.80006 2.40003C4.80006 1.07453 3.72553 0 2.40003 0C1.07453 0 0 1.07453 0 2.40003C0 3.72553 1.07453 4.80006 2.40003 4.80006Z" fill="#8A8B89"/>
                            <path d="M2.40003 14.4C3.72553 14.4 4.80006 13.3255 4.80006 12C4.80006 10.6745 3.72553 9.59998 2.40003 9.59998C1.07453 9.59998 0 10.6745 0 12C0 13.3255 1.07453 14.4 2.40003 14.4Z" fill="#8A8B89"/>
                            <path d="M2.40003 23.9999C3.72553 23.9999 4.80006 22.9254 4.80006 21.5999C4.80006 20.2744 3.72553 19.1998 2.40003 19.1998C1.07453 19.1998 0 20.2744 0 21.5999C0 22.9254 1.07453 23.9999 2.40003 23.9999Z" fill="#8A8B89"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellingWidget;