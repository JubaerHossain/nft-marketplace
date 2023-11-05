import React from 'react';
import TrendingWidget from '../../components/widgets/TrendingAuctions/TrendingWidget';
import Wrapper from '../../components/Layout/wrapper';
import trandingData from "../api/tranding_auctions.json"
import useLoadMore from "../../hooks/use-loadmore"
import { LoadMoreBtn } from '../../components/Elements/Button';
const TopSeles = () => {
    const {showLoadBtn, postNum , handleClick} = useLoadMore(12,3,trandingData);
    return (
        <Wrapper>
            <section className='top_sells_area  md:pb-80px lg:pt-150px lg:pb-160px pt-120px pb-80px'>
                <div className='container'>
                    <div className='details_title_inner flex gap-4  pb-4 mb-[30px]'>
                        <div className='flex gap-4 flex-1 items-center'>
                            <h3 className='lg:text-[36px] font-semibold text-white leading-normal text-xl whitespace-nowrap'>Trending Auctions</h3>
                        </div>
                    </div>
                </div>
                <div className='container grid grid-cols-12 gap-8'>
                    {
                        trandingData.slice(0,postNum)?.map((item)=> (
                            <div className='lg:col-span-4 md:col-span-6 col-span-12 '>
                                <TrendingWidget key={item.id} item={item} />
                            </div>
                        ))
                    }
                    {
                        showLoadBtn ? (
                            <div className='col-span-12 text-center pt-35px'>
                                <LoadMoreBtn handleClick={handleClick}/>
                            </div>
                        ): ""
                    }
                </div>
            </section>
        </Wrapper>
    );
};

export default TopSeles;