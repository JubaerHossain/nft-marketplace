import React, {useState} from 'react';
import Wrapper from '../../components/Layout/wrapper';
import creatorsData from "../api/creators.json";
import CreatorWidget from '../../components/widgets/Creators/CreatorWidget';
import useLoadMore from '../../hooks/use-loadmore';
const Collections = () => {

    // default data showing number and action showing number , data 
    const {showLoadBtn, postNum , handleClick} = useLoadMore(10,5,creatorsData);

    return (
        <Wrapper>
            <section className='top_sells_area  pb-80px pt-80px md:pt-100px md:pb-100px lg:pb-160px lg:pt-155px '>
                <div className='container'>
                    <div className='details_title_inner flex gap-4 mb-6 lg:mb-[50px] flex-wrap'>
                        <div className='flex gap-2 flex-1 items-center flex-wrap md:flex-nowrap '>
                            <h3 className='lg:text-[50px] font-semibold text-white leading-normal text-3xl whitespace-nowrap flex-1'>Our Top NFTs Creators</h3>
                        </div>
                    </div>
                </div>
                
                <div className='container flex  gap-x-3 gap-y-6 flex-wrap'>
                    {
                        /* Map through the creatorsData array, using each item as a collection_item */
                        creatorsData.slice(0,postNum)?.map((item, index) => (
                            /* For each item, create a div with a unique key based on the index */
                            <div key={index} className='max-w-[241px] w-full'>
                                <CreatorWidget item={item} />
                            </div>
                        ))
                    }
                </div>
                {
                    showLoadBtn ? (
                        <div className='col-span-12 text-center pt-40px'>
                            <button onClick={()=> handleClick()} className='ot_line_btn btn btn-outline btn-primary max-w-[300px] w-full mx-auto group flex gap-2'>
                                <svg className='fill-primary group-hover:fill-white transition-all' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4476 15.3058C12.9354 16.6161 11.0009 17.3361 9.00008 17.3333C4.39758 17.3333 0.666748 13.6025 0.666748 8.99996C0.666748 4.39746 4.39758 0.666626 9.00008 0.666626C13.6026 0.666626 17.3334 4.39746 17.3334 8.99996C17.3334 10.78 16.7751 12.43 15.8251 13.7833L13.1667 8.99996H15.6667C15.6666 7.46347 15.1358 5.97418 14.164 4.78403C13.1922 3.59389 11.8391 2.77595 10.3337 2.46859C8.82825 2.16123 7.26286 2.38331 5.90231 3.09726C4.54177 3.81122 3.4696 4.97322 2.86718 6.38669C2.26477 7.80017 2.16909 9.37834 2.59632 10.8542C3.02356 12.3301 3.94749 13.6132 5.21182 14.4863C6.47614 15.3594 8.00324 15.7689 9.53479 15.6457C11.0663 15.5225 12.5083 14.874 13.6167 13.81L14.4476 15.3058Z"/>
                                </svg>
                                <span className='group-hover:text-white transition-all'>Load More</span>
                            </button>
                        </div>
                    ): ""
                }
                
            </section>
        </Wrapper>
    );
};

export default Collections;