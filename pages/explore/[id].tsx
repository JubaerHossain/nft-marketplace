import React from 'react';
import Wrapper from '../../components/Layout/wrapper';
import exploreData from "../api/tranding_auctions.json"
import ExplorerWidget from '../../components/widgets/explore/explorerWidget';
import { FilterDropdown } from '../../components/common';
import { BidIcon, CaretIcon, FilterIcon, LoadIcon, LoadIcon2, LoadIcon3, TreeIcon } from '../../components/icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import ChartWidget from '../../components/widgets/Chart/ApexChart/ChartWidget';

const ExploreDetails = () => {
    return (
        <Wrapper>
            {/* cover section ::start  */}
            <section className='nft_cover_wrapper relative w-full h-[250px] lg:h-[447px] bg-banner-cover bg-cover bg-center bg-no-repeat'></section>
            {/* cover section ::end    */}
            <section className='collection_area  md:pb-80px  lg:pb-160px pb-80px lg:mt-[-120px] relative z-10 mt-[-80px]'>
                <div className='container'>
                    <div className="colection_profile">
                        <div className="colection_profile_info">
                            <div className="colection_profile_info_header">
                                <div className="colection_profile_info_header_left">
                                    <div className="circle_img bg-gradient_1 p-2 inline-flex rounded-full shadow-theme_shadow7 lg:mb-[52px] md:w-[172px] md:h-[172px] w-[120px] h-[120px] mb-[35px]">
                                        <Image className='rounded-full' src="/assets/imgs/explore/profileImg.png" width={170} height="170" alt=''/>
                                    </div>
                                    <div className="flex max-w-[896px] items-center gap-4 flex-wrap ">
                                        <div className="">
                                            <h2 className='text-white text-[36px] capitalize font-semibold mb-[5px]'>Holiday Mutant</h2>
                                            <p className='text-sm font-medium text-white '> <span className='text-primary'>denim_mike45</span> (09Brt...b1bggh)</p>
                                        </div>
                                        <div className='auction_tags flex items-center gap-3 md:justify-end flex-1 flex-wrap' >
                                            {/* auction_tag_box  */}
                                            <div className='auction_tag_box items-center border border-primary rounded-full gap-[10px] h-[33px] inline-flex px-4' >
                                                <TreeIcon />
                                                <span className='text-sm text-white'>Total Items: 266</span>
                                            </div>
                                            {/* auction_tag_box  */}
                                            <div className='auction_tag_box items-center border border-primary rounded-full gap-[10px] h-[33px] inline-flex px-4' >
                                                <TreeIcon />
                                                <span className='text-sm text-white'>Category: Holiday Track</span>
                                            </div>
                                            {/* auction_tag_box  */}
                                            <div className='auction_tag_box items-center border border-primary rounded-full gap-[10px] h-[33px] inline-flex px-4' >
                                                <TreeIcon />
                                                <span className='text-sm text-white'>Chain: Ethereum</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-xs font-normal text-gray_text mt-[19px] mb-[40px]'>Lorem ipsum dolor sit amet consectetur. Molestie et lobortis nunc massa quis purus. Tincidunt blandit blandit maecenas sed. In cursus vehicula sit lectus lectus proin risus. Enim mauris eu posuere sit Web : <Link className='text-link_text hover:underline transition-all duration-300' href="#">www.nft.com</Link> pharetra pharetra. Morbi malesuada tincidunt congue massa viverra penatibus venenatis vel. Nulla et in aliquam id cras. Tellus imperdiet malesuada at sit. Bibendum adipiscing id with the crypto nft on our instagram <Link className='text-link_text hover:underline transition-all duration-300' href="#">www.instagram.com/nft_denim45</Link>  ut placerat accumsan dolor and our twitter feeds <Link href='#' className='text-link_text hover:underline transition-all duration-300' >www.twitter.com/nft_denim45</Link> lectus integer nunc augue.</p>
                        </div>
                    </div>
                    {/* TAB::START  */}
                    <Tabs className="nft_theme_tab_wrapper react-tabs">
                        <TabList className="flex items-center gap-5">
                            <Tab selectedClassName="active" className="nft_theme_tab text-white text-base font-semibold pb-[6px] !border-none cursor-pointer relative  [&.active]:before:bg-primary before:content before:h-[1px] before:w-full before:bottom-[-1px] before:bg-primary before:left-0 before:absolute before:opacity-0 before:transition-all before:duration-300 [&.active]:before:opacity-100 focus:outline-none">Items</Tab>
                            <Tab selectedClassName="active" className="nft_theme_tab text-white text-base font-semibold pb-[6px] !border-none cursor-pointer relative  [&.active]:before:bg-primary before:content before:h-[1px] before:w-full before:bottom-[-1px] before:bg-primary before:left-0 before:absolute before:opacity-0 before:transition-all before:duration-300 [&.active]:before:opacity-100 focus:outline-none">Activity</Tab>
                            <Tab selectedClassName="active" className="nft_theme_tab text-white text-base font-semibold pb-[6px] !border-none cursor-pointer relative  [&.active]:before:bg-primary before:content before:h-[1px] before:w-full before:bottom-[-1px] before:bg-primary before:left-0 before:absolute before:opacity-0 before:transition-all before:duration-300 [&.active]:before:opacity-100 focus:outline-none">Owner Details</Tab>
                        </TabList>
                        <div className="bg-gradient_border_1 w-full h-[1px]"></div>
                        <TabPanel  className="nftTheme_panel">
                            {/* CONTENT::START  */}
                            <div className='details_title_inner flex gap-4 mb-[30px] mt-3 flex-row-reverse md:flex-row'>
                                <div className='flex gap-2 flex-1 items-center '>
                                    <LoadIcon2 className="fill-gray_text " />
                                    <p className='text-sm text-gray_text font-normal whitespace-nowrap'>Updated 3m ago</p>
                                </div>
                                <div className="dropdown dropdown-start md:dropdown-end">
                                    <label tabIndex={0} className="theme_filter_btn  gap-[10px] bg-gradient_border_1 p-[1px] rounded-full inline-flex h-10 "> 
                                        <div className='theme_filter_btn_inner bg-secondary px-5 flex items-center gap-[10px] rounded-full cursor-pointer' >
                                            <FilterIcon/>
                                            <span className='text-[#CECACA] capitalize text-sm font-medium whitespace-nowrap'>More Filter</span>
                                        </div>
                                    </label>
                                    <FilterDropdown/>
                                </div>
                            </div>
                            
                            {/* ExplorerWidget map  */}
                            <div className='grid grid-cols-12 gap-6'>
                                {
                                    // Check if exploreData is defined and has data
                                    exploreData?.slice(0,4).map((item , index)=> {
                                        return (
                                            // Wrap each ExplorerWidget component in a div with class name "col-span-3"
                                            <div key={index} className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3 ">
                                                <ExplorerWidget item={item}/>
                                            </div>
                                        )
                                    })
                                }
                                <div className='col-span-12 text-center pt-5 lg:pt-35px'>
                                    <button className='ot_line_btn btn btn-outline btn-primary max-w-[300px] w-full mx-auto group flex gap-2'>
                                        <LoadIcon/>
                                        <span className='group-hover:text-white transition-all'>Load More</span>
                                    </button>
                                </div>
                            </div>
                            {/* CONTENT::START  */}
                        </TabPanel>
                        <TabPanel content="nftTheme_panel">
                            {/* CONTENT::START  */}
                            <div className="activity_wrapper pt-[30px]">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12 md:col-span-7">
                                        <div className="activity_wrapper_accordian">
                                            {/* accordian start  */}
                                            <Accordion allowMultipleExpanded={true}>
                                                <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton className='relative'>
                                                        <h5 className='text-sm text-white font-semibold capitalize'>Descriptions</h5>
                                                        <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                                            <CaretIcon/>
                                                        </button>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel className=''>
                                                        <div className='accordian_info pt-5'>
                                                        <p className='text-xs font-normal text-gray_text mb-3 leading-[18px]'>Lorem ipsum dolor sit amet consectetur. Molestie et lobortis nunc massa quis purus. Tincidunt blandit blandit maecenas sed. In cursus vehicula sit lectus lectus proin risus. Enim mauris eu posuere sit Web : www.nft.com pharetra pharetra. Morbi malesuada tincidunt congue massa viverra penatibus venenatis vel. Nulla et in aliquam id cras. Tellus imperdiet malesuada at sit. Bibendum adipiscing id with the crypto nft on our instagram www.instagram.com/nft_denim45 ut placerat accumsan dolor and our twitter feeds www.twitter.com/nft_denim45 lectus integer nunc augue. Read more..</p>
                                                        <p className='text-xs font-normal text-gray_text'>Before buying this NFT, please read all the nessasary documents and licence information about NFTs and agreements at www.tim.blog/deminart. This explain your right and restrictions.</p>
                                                        </div>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton className='relative'>
                                                        <h5 className='text-sm text-white font-semibold capitalize'>Owner Details</h5>
                                                        <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                                            <CaretIcon/>
                                                        </button>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <div className='accordian_info pt-5'>
                                                        <ul>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Contract Address</span>
                                                            <span className='text-xs text-primary text-normal'>Oxc17....09B3m90f</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Token ID</span>
                                                            <span className='text-xs text-primary text-normal'>2568</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Token Standard</span>
                                                            <span className='text-xs text-primary text-normal'>FRC-256</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Chain</span>
                                                            <span className='text-xs text-white text-normal'>FRC-256</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Last Updated</span>
                                                            <span className='text-xs text-white text-normal'>10 days ago</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Creator Fee</span>
                                                            <span className='text-xs text-white text-normal'>8.6%</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton className='relative'>
                                                        <h5 className='text-sm text-white font-semibold capitalize'>Bids History</h5>
                                                        <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                                            <CaretIcon/>
                                                        </button>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <div className='accordian_info pt-[11px] '>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal '>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px] py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal '>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px] py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                        </div>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </Accordion>
                                            {/* accordian end    */}
                                        </div>
                                    </div>
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="activity_wrapper_chart rounded-2xl bg-gradient_border_1 p-[1px]">
                                            <div className="activity_wrapper_chart rounded-2xl bg-[#151427] p-5">
                                            <h4 className='text-[20px] text-white font-semibold capitalize mb-5'>Volume and Price</h4>
                                                <ChartWidget/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="activity_wrapper_chart"></div>
                            </div>
                            {/* CONTENT::END    */}
                        </TabPanel >
                        <TabPanel  className="nftTheme_panel">
                            {/* CONTENT::START  */}
                            <div className="activity_wrapper pt-[30px]">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="lg:col-span-7 md:col-span-8 col-span-12">
                                        <div className="activity_wrapper_accordian">
                                            {/* accordian start  */}
                                            <Accordion allowMultipleExpanded={true}>
                                                <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton className='relative'>
                                                        <h5 className='text-sm text-white font-semibold capitalize'>Owner Details</h5>
                                                        <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                                            <CaretIcon/>
                                                        </button>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <div className='accordian_info pt-5'>
                                                        <ul>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Contract Address</span>
                                                            <span className='text-xs text-primary text-normal'>Oxc17....09B3m90f</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Token ID</span>
                                                            <span className='text-xs text-primary text-normal'>2568</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Token Standard</span>
                                                            <span className='text-xs text-primary text-normal'>FRC-256</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Chain</span>
                                                            <span className='text-xs text-white text-normal'>FRC-256</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Last Updated</span>
                                                            <span className='text-xs text-white text-normal'>10 days ago</span>
                                                            </li>
                                                            <li className='flex justify-between items-center gap-2 flex-wrap last:mb-0 mb-[14px]'>
                                                            <span className='text-xs font-normal text-[#D3D3D3]'>Creator Fee</span>
                                                            <span className='text-xs text-white text-normal'>8.6%</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton className='relative'>
                                                        <h5 className='text-sm text-white font-semibold capitalize'>Bids History</h5>
                                                        <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                                            <CaretIcon/>
                                                        </button>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <div className='accordian_info pt-[11px] '>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal '>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px] py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal '>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px] py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                            <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                                                <span className='text-xs font-normal text-white'>01.</span>
                                                                <div className='eth_currency flex gap-2 mr-[3px]'>
                                                                    <BidIcon className="fill-primary"/>
                                                                    <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                                                </div>
                                                                <div className='flex gap-[10px] items-center mr-[14px]'>
                                                                    <LoadIcon3 className="fill-gray_text" />
                                                                    <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                                                </div>
                                                                <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                                            </div>
                                                        </div>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </Accordion>
                                            {/* accordian end    */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CONTENT::END    */}
                        </TabPanel>
                    </Tabs>
                {/* TAB::START  */}
                </div>
            </section>
        </Wrapper>
    );
};

export default ExploreDetails;