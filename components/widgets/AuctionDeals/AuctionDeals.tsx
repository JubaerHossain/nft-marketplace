import React from 'react';
import AuctionData from "../../../pages/api/auctionsData.json"
import AuctionSingle from './AuctionSingle';

interface itemProps {
    item: {
        id: number;
        img: string;
        title: string;
        counter: string;
    }
}

const AuctionDeals = () => {
    return (
        <div className='Auction_deals_area lg:pt-[193px] md:pt-80px pt-60px lg:pb-155px md:pb-80px pb-60px'>
            <div className="max-w-[1407px] mx-auto px-3">
                <div className="grid grid-cols-12 gap-6 ">
                    {AuctionData?.map((item, i)=> (
                        <div key={i} className="lg:col-span-4 md:col-span-6 col-span-12 lg:even:mt-[-85px]">
                            <AuctionSingle item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuctionDeals;