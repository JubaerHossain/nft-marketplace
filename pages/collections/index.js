import React from 'react';
import { Input } from '../../components/Elements';
import Wrapper from '../../components/Layout/wrapper';
import CollectionWidgetSmall from "../../components/widgets/Collection/collectionSmallWidget"
import collectionData from "../api/Nft_collections.json"
const Collections = () => {
    return (
        <>
            <Wrapper>
                <section className='top_sells_area  pb-80px pt-80px md:pt-100px md:pb-100px lg:pb-160px lg:pt-155px '>
                    <div className='container'>
                        <div className='details_title_inner flex gap-4 mb-6 lg:mb-[55px] flex-wrap'>
                            <div className='flex gap-2 flex-1 items-center flex-wrap md:flex-nowrap '>
                                <h3 className='lg:text-[36px] font-semibold text-white leading-normal text-xl whitespace-nowrap flex-1'>Top NFTs Collections</h3>
                                <div className="form-control  rounded-[30px] bg-[#232333] border-none  lg:inline-flex max-w-[300px]  xl:max-w-[618px] w-full">
                                    <div className="input-group h-[44px] items-center rounded-[30px]" >
                                        <button className="btn btn-square bg-transparent border-0 h-[44px] min-h-full  p-0 hover:bg-transparent focus:bg-transparent pl-[10px]" >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0918 15.9085L14.0002 12.8418C15.2002 11.3455 15.7814 9.44625 15.6242 7.53458C15.4669 5.62292 14.5832 3.84415 13.1548 2.56403C11.7263 1.28392 9.86167 0.599756 7.94427 0.652223C6.02686 0.70469 4.20243 1.4898 2.84612 2.84612C1.4898 4.20243 0.70469 6.02686 0.652223 7.94427C0.599756 9.86167 1.28392 11.7263 2.56403 13.1548C3.84415 14.5832 5.62292 15.4669 7.53458 15.6242C9.44625 15.7814 11.3455 15.2002 12.8418 14.0002L15.9085 17.0668C15.986 17.1449 16.0781 17.2069 16.1797 17.2492C16.2812 17.2915 16.3902 17.3133 16.5002 17.3133C16.6102 17.3133 16.7191 17.2915 16.8206 17.2492C16.9222 17.2069 17.0144 17.1449 17.0918 17.0668C17.242 16.9114 17.326 16.7038 17.326 16.4877C17.326 16.2716 17.242 16.0639 17.0918 15.9085ZM8.16683 14.0002C7.01311 14.0002 5.88529 13.658 4.926 13.0171C3.96672 12.3761 3.21904 11.4651 2.77753 10.3992C2.33602 9.33325 2.2205 8.16036 2.44558 7.0288C2.67066 5.89725 3.22624 4.85785 4.04204 4.04204C4.85785 3.22624 5.89725 2.67066 7.0288 2.44558C8.16036 2.2205 9.33325 2.33602 10.3992 2.77753C11.4651 3.21904 12.3761 3.96672 13.0171 4.926C13.658 5.88529 14.0002 7.01311 14.0002 8.16683C14.0002 9.71393 13.3856 11.1977 12.2916 12.2916C11.1977 13.3856 9.71393 14.0002 8.16683 14.0002Z" fill="#FAF9FD"/>
                                            </svg>
                                        </button>
                                        <Input title={'Collection, items'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container grid grid-cols-12 gap-6'>
                        {
                            /* Map through the collectionData array, using each item as a collection_item */
                            collectionData?.map((collection_item, index) => (
                                /* For each item, create a div with a unique key based on the index */
                                <div key={index} className='lg:col-span-6 xl:col-span-6 xxl:col-span-4 md:col-span-12 col-span-12 '>
                                    <CollectionWidgetSmall collectionItem={collection_item} />
                                </div>
                            ))
                        }
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

export default Collections;