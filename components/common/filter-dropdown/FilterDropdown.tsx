import Image from 'next/image';
import React, { useState } from 'react';

const FilterDropdown = () => {

    const categoryItems = [
        {
            id: 1,
            title : "Most Recent NFTs",
            img : "/assets/imgs/svg/nft.svg",
            category : "NFTs"
        },
        {
            id: 2,
            title : "On Sale",
            img : "/assets/imgs/svg/nft.svg",
            category : "Sale"
        },
        {
            id: 3,
            title : "Most Recent NFTs",
            img : "/assets/imgs/svg/nft.svg",
            category : "Auctions"
        },
        {
            id: 4,
            title : "Ending Soon",
            img : "/assets/imgs/svg/nft.svg",
            category : "Ending"
        },
        {
            id: 5,
            title : "Trending",
            img : "/assets/imgs/svg/nft.svg",
            category : "Trending"
        },
        {
            id: 6,
            title : "Recently Sold",
            img : "/assets/imgs/svg/nft.svg",
            category : "Recently Sold"
        },
        {
            id: 7,
            title : "Most Viewed",
            img : "/assets/imgs/svg/nft.svg",
            category : "Most Viewed"
        }
    ]

    const [activeItem , setActive] = useState<string>("")

    return (
        <div tabIndex={0} className="dropdown-content menu rounded-2xl  bg-gradient_border_1 p-[1px] mt-[4px] duration-500 transition-all">
            <ul className=" bg-[#232333] shadow-theme_shadow6 p-4 min-w-[280px] lg:min-w-[383px] w-full  rounded-2xl ">
                {categoryItems?.map((catItem, index)=> {
                    const {title,img,category} =catItem
                    return (
                        <li className={`${activeItem == category && "active"}`} key={index}>
                            <a onClick={()=> setActive(category) } className='text-sm font-medium text-white hover:text-primary transition-all duration-300 gap-[8px] px-0  !rounded-none pt-2 pb-3 hover:bg-transparent border-b border-gray-border'> 
                                <div className="icon w-5 h-5 rounded-full inline-flex items-center justify-center relative ">
                                    <Image width="20" height="20" src={img} alt='#'/>
                                </div>
                                {title}
                                {
                                    activeItem == category &&
                                    <div className="checkIcon w-5 h-5 absolute right-0 top-[10px]">
                                        <Image src="/assets/imgs/svg/activeImg.png" width="20" height="20" alt='#'/>
                                    </div>
                                }
                            </a>
                        </li>
                    )
                } )}
            </ul>
        </div>
    );
};

export default FilterDropdown;