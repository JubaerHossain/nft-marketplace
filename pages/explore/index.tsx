import Image from 'next/image';
import React from 'react';
import { FilterDropdown } from '../../components/common';
import { SectionTitleFour } from '../../components/Elements/SectionTitle';
import { FilterIcon } from '../../components/icons';
import Wrapper from '../../components/Layout/wrapper';
import ExploreWidget from '../../components/widgets/explore/index';
import useFilter from '../../hooks/use-filter';
import exploreData from "../api/explore_collection.json"

const ExplorerCollection = () => {
    const {filterDandeler, allCategory, catData, active} = useFilter(exploreData);
    console.log(active)
    return (
        <Wrapper>
        {/* AUCTION_DETAILS::START  */}
        <section className='auction_details lg:pb-160px md:pb-80px lg:pt-155px pt-80px'>
            <div className='container'>
                <div className='details_title mb-6 lg:mb-[50px]'>
                    <SectionTitleFour  title="Explore Collections" />
                    <div className='details_title_bottom flex gap-[10px] md:items-start flex-wrap flex-col md:flex-row pt-2'>
                        <div className="flex items-center gap-3   flex-wrap flex-1">
                            
                            {
                                allCategory?.map((item, index) => <button key={index} onClick={()=> filterDandeler(item)} className={`font-sm text-white rounded-full font-medium px-[20px] py-2  hover:bg-primary transition-all duration-300 ${active == item ? "bg-primary" : "bg-[#303030]/49"}`}>{item }  </button> )
                            }
                        </div>
                        <div className="dropdown dropdown-start md:dropdown-end">
                            <div tabIndex={0} className="theme_filter_btn  gap-[10px] bg-gradient_border_1 p-[1px] rounded-full inline-flex h-10 "> 
                                <div className='theme_filter_btn_inner bg-secondary px-5 flex items-center gap-[10px] rounded-full cursor-pointer' >
                                    <FilterIcon/>
                                    <span className='text-[#CECACA] capitalize text-sm font-medium'>More Filter</span>
                                </div>
                            </div>
                            <FilterDropdown/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    {
                         /* Map over the `exploreData` array to render each item */
                         catData.slice(0,6)?.map((item:any, index:number)=> {
                            return (
                                /* Render a single widget for each item */
                                <div key={index} className="xl:col-span-4 md:col-span-6 col-span-12">
                                     {/* Pass the item data to the `ExploreWidget` component as a prop */}
                                    <ExploreWidget item={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        {/* AUCTION_DETAILS::END    */}
        </Wrapper>
    );
}

export default ExplorerCollection;
