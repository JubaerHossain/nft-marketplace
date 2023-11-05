import React, {useState} from 'react';
import {SectionTitle} from '../../Elements/SectionTitle';
import DiscoverWidget from './DiscoverWidget';
import Data from "../../../pages/api/discover-nft.json"
import useFilter from "../../../hooks/use-filter"

const Discover = () => {
    const {filterDandeler, allCategory, catData , active} = useFilter(Data);

    return (
        <div className='discover_area  lg:pb-155px md:pb-80px pb-60px relative z-0  before:bg-lineShape before:h-[1294px] before:top-0 before:left-0 before:w-full before:content"" before:z-12 before:absolute before:bg-no-repeat before:bg-cover before:bg-left-top before:z-[-1]'>
            <div className="container ">
                <div className="flex items-center justify-between mb-10">
                    <SectionTitle>
                        Discover More NFTs
                    </SectionTitle>
                </div>
                <div className="flex items-center gap-3 mb-10 pt-2 flex-wrap">
                    {
                        allCategory?.map((item, index) => <button key={index} onClick={()=> filterDandeler(item)} className={`font-sm text-white rounded-full font-medium px-[20px] py-2  hover:bg-primary transition-all duration-300 ${active == item ? "bg-primary" : "bg-[#303030]/49"}`}>{item}</button> )
                    }
                </div>
                <div className="grid grid-cols-12 lg:gap-8 gap-4">
                    {
                        catData.slice(0,12)?.map((catItem,index) => (
                            <div key={index} className="xl:col-span-3 md:col-span-4 col-span-12 ">
                                <DiscoverWidget catItem={catItem}/>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default Discover;