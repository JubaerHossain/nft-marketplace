import React from 'react';
import SellingWidget from '../../components/widgets/TopSelling/SellingWidget';
import Wrapper from '../../components/Layout/wrapper';
import SelectComponent from "../../components/common/SelectComponent/SelectComponent"
const TopSeles = () => {
    return (
        <>
            <Wrapper>
                <section className='top_sells_area  md:pb-80px lg:pt-155px lg:pb-160px pt-120px pb-80px'>
                    <div className='container'>
                        <div className='details_title_inner flex gap-4 border-b-[.5px] border-[#FFA011]/40 items-center pb-4 mb-[30px] flex-wrap'>
                            <div className='flex gap-4 flex-1 items-center'>
                                <div className='icon w-[46px] h-[46px] flex items-center justify-center'>
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="23" fill="white" fillOpacity="0.18"/>
                                    <g clipPath="url(#clip0_3224_30658)">
                                    <path d="M15.645 33.1087C14.05 31.9498 12.7523 30.4296 11.858 28.6725C10.9637 26.9155 10.4983 24.9716 10.5 23C10.5 16.0963 16.0963 10.5 23 10.5C29.9038 10.5 35.5 16.0963 35.5 23C35.5017 24.9716 35.0363 26.9155 34.142 28.6725C33.2477 30.4296 31.95 31.9498 30.355 33.1087L29.0863 30.935C30.7442 29.6632 31.9622 27.904 32.569 25.9045C33.1759 23.905 33.1411 21.7656 32.4696 19.7868C31.7981 17.8081 30.5236 16.0894 28.8251 14.8722C27.1267 13.655 25.0896 13.0004 23 13.0004C20.9104 13.0004 18.8733 13.655 17.1749 14.8722C15.4764 16.0894 14.2019 17.8081 13.5304 19.7868C12.8589 21.7656 12.8241 23.905 13.431 25.9045C14.0378 27.904 15.2558 29.6632 16.9138 30.935L15.645 33.1087ZM18.1875 28.7525C17.0063 27.7643 16.1579 26.4364 15.7577 24.9492C15.3575 23.462 15.4248 21.8877 15.9504 20.4401C16.4761 18.9925 17.4347 17.7419 18.6959 16.8581C19.9572 15.9742 21.4599 15.5001 23 15.5001C24.5401 15.5001 26.0428 15.9742 27.3041 16.8581C28.5653 17.7419 29.5239 18.9925 30.0496 20.4401C30.5753 21.8877 30.6425 23.462 30.2423 24.9492C29.8421 26.4364 28.9937 27.7643 27.8125 28.7525L26.525 26.545C27.2272 25.8469 27.7064 24.9561 27.9017 23.9854C28.0971 23.0146 27.9998 22.0078 27.6222 21.0924C27.2447 20.1771 26.6038 19.3944 25.7809 18.8437C24.9581 18.293 23.9902 17.999 23 17.999C22.0098 17.999 21.042 18.293 20.2191 18.8437C19.3962 19.3944 18.7553 20.1771 18.3778 21.0924C18.0002 22.0078 17.9029 23.0146 18.0983 23.9854C18.2936 24.9561 18.7728 25.8469 19.475 26.545L18.1875 28.7525ZM21.75 24.25H24.25V35.5H21.75V24.25Z" fill="#FF9900"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_3224_30658">
                                    <rect width="30" height="30" fill="white" transform="translate(8 8)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                                <h3 className='lg:text-[36px] font-semibold text-white leading-normal text-xl whitespace-nowrap'>Top Sells</h3>
                            </div>
                            <SelectComponent  />
                        </div>
                    </div>
                    <div className='container grid grid-cols-12 gap-6'>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12 '>
                            <SellingWidget/>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12'>
                            <SellingWidget/>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12'>
                            <SellingWidget/>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12'>
                            <SellingWidget/>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12'>
                            <SellingWidget/>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12'>
                            <SellingWidget/>
                        </div>
                        <div className='col-span-12 text-center pt-35px'>
                            <button className='ot_line_btn btn btn-outline btn-primary max-w-[300px] w-full mx-auto group flex gap-2'>
                                <svg className='fill-primary group-hover:fill-white transition-all' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4476 15.3058C12.9354 16.6161 11.0009 17.3361 9.00008 17.3333C4.39758 17.3333 0.666748 13.6025 0.666748 8.99996C0.666748 4.39746 4.39758 0.666626 9.00008 0.666626C13.6026 0.666626 17.3334 4.39746 17.3334 8.99996C17.3334 10.78 16.7751 12.43 15.8251 13.7833L13.1667 8.99996H15.6667C15.6666 7.46347 15.1358 5.97418 14.164 4.78403C13.1922 3.59389 11.8391 2.77595 10.3337 2.46859C8.82825 2.16123 7.26286 2.38331 5.90231 3.09726C4.54177 3.81122 3.4696 4.97322 2.86718 6.38669C2.26477 7.80017 2.16909 9.37834 2.59632 10.8542C3.02356 12.3301 3.94749 13.6132 5.21182 14.4863C6.47614 15.3594 8.00324 15.7689 9.53479 15.6457C11.0663 15.5225 12.5083 14.874 13.6167 13.81L14.4476 15.3058Z"/>
                                </svg>
                                <span className='group-hover:text-white transition-all'>Load More</span>
                            </button>
                        </div>
                    </div>
                </section>
            </Wrapper>
        </>
    );
};

export default TopSeles;