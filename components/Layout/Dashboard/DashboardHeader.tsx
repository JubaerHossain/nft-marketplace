import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Input } from '../../Elements';
import { CirclePlus, ProfileIcon } from '../../icons';
import HeaderProfile from '../../widgets/HeaderProfile/HeaderProfile';

const DashboardHeader = () => {
    return (
        <div className='dashboard-header flex justify-between p-[30px]'>
            <div className="form-control max-w-[725px] w-full  rounded-lg bg-[#232333] border-none hidden  lg:inline-flex ">
                <div className="input-group h-[44px] items-center" >
                    <button className="btn btn-square bg-transparent border-0 h-[44px] min-h-full  p-0 hover:bg-transparent focus:bg-transparent pl-[10px]" >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0918 15.9085L14.0002 12.8418C15.2002 11.3455 15.7814 9.44625 15.6242 7.53458C15.4669 5.62292 14.5832 3.84415 13.1548 2.56403C11.7263 1.28392 9.86167 0.599756 7.94427 0.652223C6.02686 0.70469 4.20243 1.4898 2.84612 2.84612C1.4898 4.20243 0.70469 6.02686 0.652223 7.94427C0.599756 9.86167 1.28392 11.7263 2.56403 13.1548C3.84415 14.5832 5.62292 15.4669 7.53458 15.6242C9.44625 15.7814 11.3455 15.2002 12.8418 14.0002L15.9085 17.0668C15.986 17.1449 16.0781 17.2069 16.1797 17.2492C16.2812 17.2915 16.3902 17.3133 16.5002 17.3133C16.6102 17.3133 16.7191 17.2915 16.8206 17.2492C16.9222 17.2069 17.0144 17.1449 17.0918 17.0668C17.242 16.9114 17.326 16.7038 17.326 16.4877C17.326 16.2716 17.242 16.0639 17.0918 15.9085ZM8.16683 14.0002C7.01311 14.0002 5.88529 13.658 4.926 13.0171C3.96672 12.3761 3.21904 11.4651 2.77753 10.3992C2.33602 9.33325 2.2205 8.16036 2.44558 7.0288C2.67066 5.89725 3.22624 4.85785 4.04204 4.04204C4.85785 3.22624 5.89725 2.67066 7.0288 2.44558C8.16036 2.2205 9.33325 2.33602 10.3992 2.77753C11.4651 3.21904 12.3761 3.96672 13.0171 4.926C13.658 5.88529 14.0002 7.01311 14.0002 8.16683C14.0002 9.71393 13.3856 11.1977 12.2916 12.2916C11.1977 13.3856 9.71393 14.0002 8.16683 14.0002Z" fill="#FAF9FD"/>
                        </svg>
                    </button>
                    <Input title={'Collection, item or user'} />
                </div>
            </div>
            <div className="onestNft__navbar__right flex items-center lg:gap-[22px] gap-3">
                <Link href="#" className="btn btn-primary  rounded-full hidden lg:inline-flex gap-2.5 lg:px-[25px] py-[6px] lg:h-10 lg:h-m-[40px] min-h-max w-10 h-10 p-0 lg:w-auto">
                    <CirclePlus/>
                    <span className=" text-base text-white capitalize font-medium hidden lg:block">Create New</span>
                </Link>
                {/* dashboardNotify::start  */}
                <div className="onestNft__navbar__profile w-10 h-10 user-img relative group ">
                    <div className="w-10 h-10 rounded-full bg-secondary flex justify-center items-center relative cursor-pointer">
                       <span className='w-[7.5px] h-[7.5px] bg-primary rounded-full absolute top-[9px] right-[9px]'></span>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11.0214C11.59 11.0214 11.25 10.6814 11.25 10.2714V6.94141C11.25 6.53141 11.59 6.19141 12 6.19141C12.41 6.19141 12.75 6.53141 12.75 6.94141V10.2714C12.75 10.6914 12.41 11.0214 12 11.0214Z" fill="#6F767E"/>
                            <path d="M12.0208 20.8483C9.44084 20.8483 6.87084 20.4383 4.42084 19.6183C3.51084 19.3183 2.82084 18.6683 2.52084 17.8483C2.22084 17.0283 2.32084 16.0883 2.81084 15.2683L4.08084 13.1483C4.36084 12.6783 4.61084 11.7983 4.61084 11.2483V9.14828C4.61084 5.05828 7.93084 1.73828 12.0208 1.73828C16.1108 1.73828 19.4308 5.05828 19.4308 9.14828V11.2483C19.4308 11.7883 19.6808 12.6783 19.9608 13.1483L21.2308 15.2683C21.7008 16.0483 21.7808 16.9783 21.4708 17.8283C21.1608 18.6783 20.4808 19.3283 19.6208 19.6183C17.1708 20.4483 14.6008 20.8483 12.0208 20.8483ZM12.0208 3.24828C8.76084 3.24828 6.11084 5.89828 6.11084 9.15828V11.2583C6.11084 12.0683 5.79084 13.2383 5.37084 13.9283L4.10084 16.0583C3.84084 16.4883 3.78084 16.9483 3.93084 17.3483C4.08084 17.7483 4.42084 18.0483 4.90084 18.2083C9.50084 19.7383 14.5608 19.7383 19.1608 18.2083C19.5908 18.0683 19.9208 17.7483 20.0708 17.3283C20.2308 16.9083 20.1808 16.4483 19.9508 16.0583L18.6808 13.9383C18.2608 13.2483 17.9408 12.0783 17.9408 11.2683V9.16828C17.9308 5.89828 15.2808 3.24828 12.0208 3.24828Z" fill="#6F767E"/>
                            <path d="M11.9999 23.4003C10.9299 23.4003 9.87992 22.9603 9.11992 22.2003C8.35992 21.4403 7.91992 20.3903 7.91992 19.3203H9.41992C9.41992 20.0003 9.69992 20.6603 10.1799 21.1403C10.6599 21.6203 11.3199 21.9003 11.9999 21.9003C13.4199 21.9003 14.5799 20.7403 14.5799 19.3203H16.0799C16.0799 21.5703 14.2499 23.4003 11.9999 23.4003Z" fill="#6F767E"/>
                        </svg>
                    </div>
                    <div className="peer-hover:block w-[231px] bg-[#151427] px-4 py-3 shadow-theme_shadow5 border-[1px] border-primary/20 rounded-[6px] mt-[3px] absolute lg:right-0 translate-y-6 group-hover:translate-y-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible left-0 lg:!left-auto right-0" >
                        <div className="user_profileInfo flex items-center gap-[9px]">
                            <div className="user_profileInfo_img">
                                <Image className="peer" src="/assets/imgs/user_img.png" width="40" height="40" alt='#'/>
                            </div>
                            <div className="Brooklyn Simmons">
                                <h5 className="text-white text-sm font-semibold mb-[4px]">Brooklyn Simmons</h5>
                                <p className="text-xs text-gray_text">simmonsart296</p>
                            </div>
                        </div>
                        <div className="border border-[#777E90]/20 mt-[12px] mb-[12px]"></div>
                        <ul>
                            <Link className="flex gap-[15px] items-center rounded-[4px] px-[10px] hover:bg-primary/5 py-[10px] group/list" href="/myProfile">
                                <ProfileIcon  className="fill-gray_text group-hover/list:fill-primary duration-300"/>
                                <span className="text-sm font-medium capitalize text-gray_text group-hover/list:text-primary  duration-300">My Profile</span>
                            </Link>
                        </ul>
                    </div>
                </div>
                {/* dashboardNotify:end  */   }
                <HeaderProfile/>
            </div>
        </div>
    );
};

export default DashboardHeader;