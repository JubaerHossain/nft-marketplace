import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionTitleTwo from '../../components/Elements/SectionTitle/SectionTitleTwo';
import Wrapper from '../../components/Layout/wrapper';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { ThemeLineButton, ThemeLineButton2 } from '../../components/Elements/Button';

const CollectionDetails = () => {
    return (
        <Wrapper>
        {/* AUCTION_DETAILS::START  */}
        <section className='auction_details lg:pb-160px md:pb-80px lg:pt-155px pt-80px'>
            <div className='container'>
                <div className='details_title mb-6 lg:mb-[57px]'>
                    <SectionTitleTwo  title="Discover More NFT" />
                    <div className='details_title_bottom flex gap-[10px] md:items-center flex-wrap flex-col md:flex-row'>
                        <div className='flex gap-[10px] items-center flex-wrap'>
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7358 8.2501L15.7375 8.85093C15.7993 8.88793 15.8504 8.94031 15.8859 9.00296C15.9214 9.06562 15.9401 9.13641 15.9401 9.20843C15.9401 9.28045 15.9214 9.35125 15.8859 9.4139C15.8504 9.47656 15.7993 9.52894 15.7375 9.56593L7.99996 14.2084L0.26246 9.56593C0.200666 9.52894 0.149515 9.47656 0.113999 9.4139C0.078483 9.35125 0.0598145 9.28045 0.0598145 9.20843C0.0598145 9.13641 0.078483 9.06562 0.113999 9.00296C0.149515 8.94031 0.200666 8.88793 0.26246 8.85093L1.26413 8.2501L7.99996 12.2918L14.7358 8.2501ZM14.7358 12.1668L15.7375 12.7676C15.7993 12.8046 15.8504 12.857 15.8859 12.9196C15.9214 12.9823 15.9401 13.0531 15.9401 13.1251C15.9401 13.1971 15.9214 13.2679 15.8859 13.3306C15.8504 13.3932 15.7993 13.4456 15.7375 13.4826L8.42913 17.8676C8.29952 17.9455 8.15116 17.9866 7.99996 17.9866C7.84876 17.9866 7.7004 17.9455 7.57079 17.8676L0.26246 13.4826C0.200666 13.4456 0.149515 13.3932 0.113999 13.3306C0.078483 13.2679 0.0598145 13.1971 0.0598145 13.1251C0.0598145 13.0531 0.078483 12.9823 0.113999 12.9196C0.149515 12.857 0.200666 12.8046 0.26246 12.7676L1.26413 12.1668L7.99996 16.2084L14.7358 12.1668ZM8.42829 0.590932L15.7375 4.97593C15.7993 5.01293 15.8504 5.06531 15.8859 5.12796C15.9214 5.19062 15.9401 5.26141 15.9401 5.33343C15.9401 5.40545 15.9214 5.47625 15.8859 5.5389C15.8504 5.60156 15.7993 5.65394 15.7375 5.69093L7.99996 10.3334L0.26246 5.69093C0.200666 5.65394 0.149515 5.60156 0.113999 5.5389C0.078483 5.47625 0.0598145 5.40545 0.0598145 5.33343C0.0598145 5.26141 0.078483 5.19062 0.113999 5.12796C0.149515 5.06531 0.200666 5.01293 0.26246 4.97593L7.57079 0.590932C7.7004 0.513062 7.84876 0.471924 7.99996 0.471924C8.15116 0.471924 8.29952 0.513062 8.42913 0.590932H8.42829Z" fill="url(#paint0_linear_3485_7738)"/>
                            <defs>
                            <linearGradient id="paint0_linear_3485_7738" x1="-24.7847" y1="-20.6024" x2="1.73851" y2="37.23" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.5"/>
                            <stop offset="1" stopColor="#FFA011" stopOpacity="0.5"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <h5 className='text-white font-medium text-sm mr-[2px]'>Item by <span className='text-primary'>denim369</span> </h5>
                            <Link href='#' className="text-sm text-primary font-medium capitalize rounded-full px-[15px] h-[33px] inline-flex items-center  border border-primary transition-all duration-300 hover:text-white hover:bg-primary " >
                            See Collections
                            </Link>
                        </div>

                        <div className='auction_tags flex items-center gap-3 flex-wrap sm:flex-nowrap md:justify-end flex-1' >
                            {/* auction_tag_box  */}
                            <div className='auction_tag_box items-center border border-primary rounded-full gap-[10px] h-[33px] inline-flex px-4' >
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4583 6.37508C13.4583 7.40216 13.1537 8.34426 12.6295 9.13051C11.8645 10.2638 10.6533 11.0643 9.24371 11.2697C9.00288 11.3122 8.75496 11.3334 8.49996 11.3334C8.24496 11.3334 7.99704 11.3122 7.75621 11.2697C6.34663 11.0643 5.13538 10.2638 4.37038 9.13051C3.84621 8.34426 3.54163 7.40216 3.54163 6.37508C3.54163 3.63383 5.75871 1.41675 8.49996 1.41675C11.2412 1.41675 13.4583 3.63383 13.4583 6.37508Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.0521 13.0829L13.8833 13.3591C13.6213 13.4229 13.4158 13.6212 13.3592 13.8833L13.1113 14.9245C12.9767 15.4912 12.2542 15.6612 11.8788 15.215L8.50002 11.3333L5.12126 15.222C4.74585 15.6683 4.02335 15.4983 3.88876 14.9316L3.64085 13.8904C3.5771 13.6283 3.37168 13.4229 3.11668 13.3662L1.94793 13.09C1.4096 12.9625 1.21835 12.2895 1.60793 11.8999L4.37043 9.13745C5.13543 10.2708 6.34668 11.0712 7.75627 11.2766C7.9971 11.3191 8.24502 11.3404 8.50002 11.3404C8.75502 11.3404 9.00293 11.3191 9.24377 11.2766C10.6533 11.0712 11.8646 10.2708 12.6296 9.13745L15.3921 11.8999C15.7817 12.2824 15.5904 12.9554 15.0521 13.0829Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.91077 4.23575L9.32869 5.07158C9.38536 5.18491 9.53411 5.29825 9.66869 5.3195L10.4266 5.447C10.9083 5.52491 11.0216 5.87908 10.6745 6.22617L10.0866 6.81407C9.98744 6.91324 9.93077 7.1045 9.96619 7.24617L10.1362 7.97575C10.2708 8.5495 9.96619 8.77616 9.45619 8.47157L8.74786 8.05366C8.62036 7.97574 8.40786 7.97574 8.28036 8.05366L7.57202 8.47157C7.06202 8.76907 6.75744 8.5495 6.89202 7.97575L7.06202 7.24617C7.09036 7.11159 7.04077 6.91324 6.94161 6.81407L6.35369 6.22617C6.00661 5.87908 6.11994 5.532 6.60161 5.447L7.35952 5.3195C7.48702 5.29825 7.63577 5.18491 7.69244 5.07158L8.11036 4.23575C8.31577 3.78242 8.68411 3.78242 8.91077 4.23575Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='text-sm text-white'>Rank: 68</span>
                            </div>
                            {/* auction_tag_box  */}
                            <div className='auction_tag_box items-center border border-primary rounded-full gap-[10px] h-[33px] inline-flex px-4' >
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.836548 6.5C1.50238 2.87333 4.68067 0.125 8.50001 0.125C12.3193 0.125 15.4969 2.87333 16.1635 6.5C15.4976 10.1267 12.3193 12.875 8.50001 12.875C4.68067 12.875 1.50309 10.1267 0.836548 6.5V6.5ZM8.50001 10.0417C9.43931 10.0417 10.3402 9.66853 11.0043 9.00434C11.6685 8.34014 12.0417 7.43931 12.0417 6.5C12.0417 5.56069 11.6685 4.65985 11.0043 3.99566C10.3402 3.33147 9.43931 2.95833 8.50001 2.95833C7.5607 2.95833 6.65986 3.33147 5.99567 3.99566C5.33148 4.65985 4.95834 5.56069 4.95834 6.5C4.95834 7.43931 5.33148 8.34014 5.99567 9.00434C6.65986 9.66853 7.5607 10.0417 8.50001 10.0417ZM8.50001 8.625C7.93642 8.625 7.39592 8.40112 6.9974 8.0026C6.59889 7.60409 6.37501 7.06358 6.37501 6.5C6.37501 5.93641 6.59889 5.39591 6.9974 4.9974C7.39592 4.59888 7.93642 4.375 8.50001 4.375C9.06359 4.375 9.60409 4.59888 10.0026 4.9974C10.4011 5.39591 10.625 5.93641 10.625 6.5C10.625 7.06358 10.4011 7.60409 10.0026 8.0026C9.60409 8.40112 9.06359 8.625 8.50001 8.625Z" fill="white"/>
                            </svg>
                                <span className='text-sm text-white'>36.59 Views</span>
                            </div>
                            {/* auction_tag_box  */}
                            <div className='auction_tag_box items-center border border-primary rounded-full gap-[10px] h-[33px] inline-flex px-4' >
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.10335 1.41675C6.28746 1.42193 4.54291 2.12431 3.23002 3.37883V2.12508C3.23002 1.93722 3.15539 1.75705 3.02256 1.62421C2.88972 1.49138 2.70955 1.41675 2.52169 1.41675C2.33383 1.41675 2.15366 1.49138 2.02082 1.62421C1.88798 1.75705 1.81335 1.93722 1.81335 2.12508V5.31258C1.81335 5.50044 1.88798 5.68061 2.02082 5.81345C2.15366 5.94629 2.33383 6.02091 2.52169 6.02091H5.70919C5.89705 6.02091 6.07722 5.94629 6.21006 5.81345C6.34289 5.68061 6.41752 5.50044 6.41752 5.31258C6.41752 5.12472 6.34289 4.94455 6.21006 4.81171C6.07722 4.67888 5.89705 4.60425 5.70919 4.60425H4.00919C4.65498 3.92213 5.46021 3.41125 6.35245 3.11755C7.24468 2.82386 8.19593 2.75658 9.12062 2.92175C10.0453 3.08692 10.9144 3.47936 11.6498 4.06378C12.3852 4.6482 12.9638 5.40626 13.3335 6.26977C13.7032 7.13328 13.8524 8.07515 13.7678 9.01066C13.6832 9.94617 13.3673 10.846 12.8487 11.6291C12.33 12.4123 11.6248 13.0542 10.7964 13.4971C9.96812 13.9401 9.04267 14.1702 8.10335 14.1667C7.91549 14.1667 7.73533 14.2414 7.60249 14.3742C7.46965 14.5071 7.39502 14.6872 7.39502 14.8751C7.39502 15.0629 7.46965 15.2431 7.60249 15.3759C7.73533 15.5088 7.91549 15.5834 8.10335 15.5834C9.98197 15.5834 11.7836 14.8371 13.112 13.5088C14.4404 12.1804 15.1867 10.3787 15.1867 8.50008C15.1867 6.62146 14.4404 4.81979 13.112 3.49141C11.7836 2.16303 9.98197 1.41675 8.10335 1.41675V1.41675ZM8.10335 5.66675C7.91549 5.66675 7.73533 5.74138 7.60249 5.87421C7.46965 6.00705 7.39502 6.18722 7.39502 6.37508V8.50008C7.39502 8.68794 7.46965 8.86811 7.60249 9.00095C7.73533 9.13379 7.91549 9.20841 8.10335 9.20841H9.52002C9.70788 9.20841 9.88805 9.13379 10.0209 9.00095C10.1537 8.86811 10.2284 8.68794 10.2284 8.50008C10.2284 8.31222 10.1537 8.13205 10.0209 7.99921C9.88805 7.86638 9.70788 7.79175 9.52002 7.79175H8.81169V6.37508C8.81169 6.18722 8.73706 6.00705 8.60422 5.87421C8.47138 5.74138 8.29122 5.66675 8.10335 5.66675Z" fill="white"/>
                            </svg>
                                <span className='text-sm text-white'>1.2k Listed</span>
                            </div>
                            </div>
                    </div>
                </div>
                <div className='auction_details_content grid lg:grid-cols-12 lg:gap-[50px] gap-5'>
                    <div className='auction_details_content_img max-w-[648px] lg:col-span-6 col-span-12'>
                        {/* liveAuctionWidget::start  */}
                        <div className="auction_widget border-2 border-white/30 lg:p-14 md:p-6 py-8 p-5 flex justify-center text-center flex-col rounded-2xl justify-center">
                            <h4 className='lg:text-3xl font-bold text-white mb-7 text-2xl'>The Art | Smart Tech Fusion</h4>
                            <div className="thumb lg:mx-auto  ">
                                <Image src="/assets/imgs/Auctions/1.png" width="240" height="398" className='mx-auto'  alt='#'></Image>
                            </div>
                            <div className="counter_box p-[22px] rounded-2xl mb-5 border-[1px] border-white/30 glass_effect_1 ">
                                <span className='lg:text-lg text-white/70 font-medium text-base'>Auction Ends in</span>
                                <div className="flex gap-6 justify-center">
                                    <span className='text-white lg:text-[35px] font-semibold text-2xl w-full'>18 : 25 : 44</span>
                                </div>
                            </div>
                            <span className='text-gray_text font-normal lg:text-[26px] text-xl'>Current Bid</span>
                            <h3 className='text-white font-medium text-2xl md:text-[35px] mb-7 mt-5 '>0.0840 ETH</h3>
                            <button className="btn btn-primary rounded-full w-full inline-flex gap-2.5 px-[25px] py-[6px] h-[50px] h-m-[50px] min-h-max text-base text-white capitalize font-medium">
                                Place a Bid
                            </button>
                        </div>
                        {/* liveAuctionWidget::end    */}
                    </div>
                    {/* auction_details_content_info::start  */}
                    <div className='lg:col-span-6 col-span-12'>
                        <div className='max-w-[511px]'>
                        {/* pricing_box  */}
                        <div className='pricing_box border border-primary/30 rounded-2xl p-5 d-flex mb-6'>
                            <h5 className='text-base text-white font-medium capitalize mb-2'>Floor Price</h5>
                            <div className='flex items-center gap-[15px] flex-wrap'>
                            <div className='flex gap-2 items-center'>
                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                </svg>
                                <span className='text-sm text-primary font-normal'>0.145 ETH</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                </svg>
                                <span className='text-sm text-gray_text font-normal'>Exchange</span>
                            </div>
                            </div>
                        </div>
                        <div className='pricing_box border border-primary/30 rounded-2xl p-5 flex mb-6 items-center flex-wrap gap-4  '>
                            <div className='flex-1'>
                                <h5 className='text-base text-white font-medium capitalize mb-2'>Current Bid</h5>
                                <div className='flex items-center gap-[15px] mb-[11px] flex-wrap'>
                                <div className='flex gap-2 items-center'>
                                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                    </svg>
                                    <span className='text-sm text-primary font-normal'>0.145 ETH</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                    </svg>
                                    <span className='text-sm text-gray_text font-normal'>Exchange</span>
                                </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex gap-[4px] items-center border border-[#8F6839] rounded-full h-[30px] px-2 min-w-[105px]  ">
                                        <Image src="/assets/imgs/topSelling/small_1.png" width='16' height="16" alt='#'></Image>
                                        <p className='text-xs font-normal text-gray_text'>(09B3m90f)</p>
                                    </div>
                                    <p className='text-gray_text text-xs font-normal'>5 mints ago</p>
                                </div>
                            </div>
                            <ThemeLineButton2 buttonProps={{link :"#", button_size:"44"}}>
                                Make Offer
                            </ThemeLineButton2>
                        </div>
                        {/* Accordion  */}
                        <Accordion allowMultipleExpanded={true}>
                            <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='relative'>
                                    <h5 className='text-sm text-white font-semibold capitalize'>Bids History</h5>
                                    <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.00005 0.499945L7.53589 4.03578L6.35672 5.21411L4.00006 2.85661L1.64339 5.21411L0.464222 4.03578L4.00005 0.499945Z" fill="#FF9900"/>
                                        </svg>
                                    </button>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='accordian_info pt-[11px] '>
                                        <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                            <span className='text-xs font-normal text-white'>01.</span>
                                            <div className='eth_currency flex gap-2 mr-[3px]'>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                                </svg>
                                                <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                            </div>
                                            <div className='flex gap-[10px] items-center mr-[14px]'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                                </svg>
                                                <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                            </div>
                                            <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                        </div>
                                        <div className='history_single flex items-center gap-[10px] py-[5px] flex-wrap'>
                                            <span className='text-xs font-normal text-white'>02.</span>
                                            <div className='eth_currency flex gap-2 mr-[3px]'>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                                </svg>
                                                <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                            </div>
                                            <div className='flex gap-[10px] items-center mr-[14px]'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                                </svg>
                                                <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                            </div>
                                            <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                        </div>
                                        <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                            <span className='text-xs font-normal text-white'>03.</span>
                                            <div className='eth_currency flex gap-2 mr-[3px]'>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                                </svg>
                                                <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                            </div>
                                            <div className='flex gap-[10px] items-center mr-[14px]'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                                </svg>
                                                <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                            </div>
                                            <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                        </div>
                                        <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                            <span className='text-xs font-normal text-white'>04.</span>
                                            <div className='eth_currency flex gap-2 mr-[3px]'>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                                </svg>
                                                <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                            </div>
                                            <div className='flex gap-[10px] items-center mr-[14px]'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                                </svg>
                                                <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                            </div>
                                            <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                        </div>
                                        <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                            <span className='text-xs font-normal text-white'>05.</span>
                                            <div className='eth_currency flex gap-2 mr-[3px]'>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                                </svg>
                                                <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                            </div>
                                            <div className='flex gap-[10px] items-center mr-[14px]'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                                </svg>
                                                <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                            </div>
                                            <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                        </div>
                                        <div className='history_single flex items-center gap-[10px]  py-[5px] flex-wrap'>
                                            <span className='text-xs font-normal text-white'>06.</span>
                                            <div className='eth_currency flex gap-2 mr-[3px]'>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.88839 8.64396L4.44566 11.4278L0 8.64396L4.44566 0.820557L8.88839 8.64396ZM4.44566 12.3217L0 9.5379L4.44566 16.1794L8.89131 9.5379L4.44566 12.3217Z" fill="#FF9900"/>
                                                </svg>
                                                <span className='text-sm text-primary font-normal'>0.089ETH</span>
                                            </div>
                                            <div className='flex gap-[10px] items-center mr-[14px]'>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0217 12.86C10.7364 13.9738 9.09203 14.5858 7.39132 14.5834C3.47919 14.5834 0.307983 11.4122 0.307983 7.50008C0.307983 3.58796 3.47919 0.416748 7.39132 0.416748C11.3034 0.416748 14.4746 3.58796 14.4746 7.50008C14.4746 9.01308 14.0001 10.4156 13.1926 11.5659L10.933 7.50008H13.058C13.0579 6.19406 12.6066 4.92817 11.7806 3.91654C10.9546 2.90492 9.80451 2.20968 8.52489 1.94842C7.24526 1.68716 5.91468 1.87593 4.75821 2.48279C3.60175 3.08965 2.69041 4.07735 2.17835 5.27881C1.6663 6.48026 1.58497 7.82171 1.94812 9.07622C2.31128 10.3307 3.09662 11.4213 4.17129 12.1634C5.24597 12.9056 6.544 13.2537 7.84581 13.149C9.14763 13.0442 10.3733 12.493 11.3155 11.5886L12.0217 12.86Z" fill="#838080"/>
                                                </svg>
                                                <span className='text-xs text-gray_text font-normal'>Exchange</span>
                                            </div>
                                            <p className='text-xs font-normal text-primary'>Oxc17....09B3m90f</p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                          <AccordionItemHeading>
                              <AccordionItemButton className='relative'>
                                <h5 className='text-sm text-white font-semibold capitalize'>Listed</h5>
                                <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.00005 0.499945L7.53589 4.03578L6.35672 5.21411L4.00006 2.85661L1.64339 5.21411L0.464222 4.03578L4.00005 0.499945Z" fill="#FF9900"/>
                                  </svg>
                                </button>
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <div className='accordian_info pt-[11px] '>
                                <div className='overflow-x-auto block w-full sm:max-w-full max-[400px]:w-[210px]  '>
                                  <table className='table table-compact w-full'>
                                    <thead>
                                      <tr>
                                        <th className='text-sm font-medium text-white capitalize bg-transparent p-0 border-b border-primary/30 pb-[4px] px-[7px] first:px-0 last:px-0' >Price</th>
                                        <th className='text-sm font-medium text-white capitalize bg-transparent p-0 border-b border-primary/30 pb-[4px] px-[7px] first:px-0 last:px-0'>USD Price</th>
                                        <th className='text-sm font-medium text-white capitalize bg-transparent p-0 border-b border-primary/30 pb-[4px] px-[7px] first:px-0 last:px-0'>Expirations</th>
                                        <th className='text-sm font-medium text-white capitalize bg-transparent p-0 border-b border-primary/30 pb-[4px] px-[7px] first:px-0 last:px-0'>From</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className='text-xs text-primary font-normal bg-transparent py-[7px] border-0 pt-[13px] px-2 first:px-0 last:px-0 '>1.399 ETH</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0 pt-[13px] px-2 first:px-0 last:px-0'>$1681.51</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0 pt-[13px] px-2 first:px-0 last:px-0'>7 days</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0 pt-[13px] px-2 first:px-0 last:px-0'>09B3m90f</td>
                                      </tr>
                                      <tr>
                                        <td className='text-xs text-primary font-normal bg-transparent py-[7px] border-0 px-2 first:px-0 last:px-0 '>1.399 ETH</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>$1681.51</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>7 days</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>09B3m90f</td>
                                      </tr>
                                      <tr>
                                        <td className='text-xs text-primary font-normal bg-transparent py-[7px] border-0 px-2 first:px-0 last:px-0 '>1.399 ETH</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>$1681.51</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>7 days</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>09B3m90f</td>
                                      </tr>
                                      <tr>
                                        <td className='text-xs text-primary font-normal bg-transparent py-[7px] border-0 px-2 first:px-0 last:px-0 '>1.399 ETH</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>$1681.51</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>7 days</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>09B3m90f</td>
                                      </tr>
                                      <tr>
                                        <td className='text-xs text-primary font-normal bg-transparent py-[7px] border-0 px-2 first:px-0 last:px-0 '>1.399 ETH</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>$1681.51</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>7 days</td>
                                        <td className='text-xs text-[#6F767E] font-normal bg-transparent py-[7px] border-0  px-2 first:px-0 last:px-0'>09B3m90f</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                          </AccordionItemPanel>
                      </AccordionItem>
                            <AccordionItem className='border border-primary/30 rounded-2xl px-5 py-[19px] mb-6 last:mb-0'>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='relative'>
                                    <h5 className='text-sm text-white font-semibold capitalize'>Descriptions</h5>
                                    <button className='arrow_btn w-5 h-5 rounded-full flex items-center justify-center bg-white/18 absolute right-0 top-0'>
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.00005 0.499945L7.53589 4.03578L6.35672 5.21411L4.00006 2.85661L1.64339 5.21411L0.464222 4.03578L4.00005 0.499945Z" fill="#FF9900"/>
                                        </svg>
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
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.00005 0.499945L7.53589 4.03578L6.35672 5.21411L4.00006 2.85661L1.64339 5.21411L0.464222 4.03578L4.00005 0.499945Z" fill="#FF9900"/>
                                        </svg>
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
                                        <span className='text-xs text-white text-normal'>Ethereum</span>
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
                        </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* AUCTION_DETAILS::END    */}
        </Wrapper>
    );
}

export default CollectionDetails;
