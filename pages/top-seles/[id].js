import React from 'react'
import Wrapper from "../../components/Layout/wrapper"
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import SectionTitleTwo from '../../components/Elements/SectionTitle/SectionTitleTwo';
import TopSelling from '../../components/widgets/TopSelling/TopSelling';

const SelesDetails = () => {
  return (
    <Wrapper>
      {/* AUCTION_DETAILS::START  */}
      <section className='auction_details lg:pb-160px pb-80px lg:pt-155px pt-80px'>
        <div className='container'>
          <div className='details_title mb-6 lg:mb-[57px]'>
            <SectionTitleTwo  title="Top Sells" />
          </div>
          <div className='auction_details_content grid lg:grid-cols-12 lg:gap-[50px] gap-5'>
            <div className='auction_details_content_img max-w-[648px] lg:col-span-6 col-span-12'>
              <img src="/assets/imgs/auctionsDeals/topSelling_details_img.png" className='max-w-full rounded-[30px]' alt="" />
            </div>
            {/* auction_details_content_info::start  */}
            <div className='lg:col-span-6 col-span-12'>
              <div className='lg:max-w-[511px]'>
                <div className='auction_details_content_info d-flex mb-6'>
                  <div className='flex gap-2 items-center' >
                    <Image width="30" height="30" src="/assets/imgs/auctionsDeals/small_icon.png" alt='small_icon'/>
                    <h5 className='text-base text-white font-medium'><span className='text-primary'>Cyborg_denim</span></h5>
                  </div>
                  <h3 className='text-white font-semibold text-4xl mt-[14px] mb-[12px]'>Mutant Ultra #0086</h3>
                  <p className='text-base text-white font-medium mt-[10px] mb-4'>New Owner  <span className='text-primary'>09B3m90f</span> </p>
                </div>
                {/* pricing_box  */}
                <div className='pricing_box border border-primary/30 rounded-2xl p-5 d-flex mb-6 flex-column'>
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
                {/* pricing_box  */}
                <div className='pricing_box border border-primary/30 rounded-2xl p-5  mb-6 items-center gap-4  '>
                    <div className='flex-1 mb-2'>
                      <h5 className='text-base text-white font-medium capitalize mb-2'>Minted by</h5>
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
                          <p className='text-gray_text text-xs font-normal'>16 hours ago | Nov 2022</p>
                      </div>
                    </div>
                    {/* accordian::start  */}
                    <Accordion className='pt-[8px]' allowMultipleExpanded={true}>
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
                                <h5 className='text-sm text-white font-semibold capitalize'>Bids History</h5>
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
                    </Accordion>
                    {/* accordian::end  */}
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
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AUCTION_DETAILS::END    */}

      {/* TopSelling::start  */}
      <TopSelling/>
      {/* TopSelling::end  */}
    </Wrapper>
  )
}

export default SelesDetails