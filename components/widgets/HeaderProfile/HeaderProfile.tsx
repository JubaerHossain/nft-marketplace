import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DashboardIcon, MyItemIcon, ProfileIcon, SignoutIcon } from '../../icons';

const HeaderProfile = () => {
    return (
        <div className="onestNft__navbar__profile w-10 h-10 user-img relative group ">
            <Image className=" cursor-pointer" src="/assets/imgs/user_img.png" width="40" height="40" alt='#'/>
            <div className="peer-hover:block w-[231px] bg-[#151427] px-4 py-3 shadow-theme_shadow5 border-[1px] border-primary/20 rounded-[6px] mt-[3px] absolute lg:right-0 translate-y-6 group-hover:translate-y-2 transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible left-0 lg:!left-auto right-0" >
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
                    <Link className="flex gap-[15px] items-center rounded-[4px] px-[10px] bg-transparent py-[10px] transition-all duration-300 hover:bg-primary/5 group/list" href="/myProfile">
                        <DashboardIcon  className="fill-gray_text group-hover/list:fill-primary duration-300"/>
                        <span className="text-sm font-medium capitalize text-gray_text group-hover/list:text-primary  duration-300">My Dashboard</span>
                    </Link>
                    <Link className="flex gap-[15px] items-center rounded-[4px] px-[10px] bg-transparent py-[10px] transition-all duration-300 hover:bg-primary/5 group/list" href="/myProfile">
                        <MyItemIcon  className="fill-gray_text group-hover/list:fill-primary duration-300"/>
                        <span className="text-sm font-medium capitalize text-gray_text group-hover/list:text-primary  duration-300">My Items</span>
                    </Link>
                    <Link className="flex gap-[15px] items-center rounded-[4px] px-[10px] bg-transparent py-[10px] transition-all duration-300 hover:bg-primary/5 group/list" href="/myProfile">
                        <ProfileIcon  className="fill-gray_text group-hover/list:fill-primary duration-300"/>
                        <span className="text-sm font-medium capitalize text-gray_text group-hover/list:text-primary  duration-300">Transaction</span>
                    </Link>
                    <Link className="flex gap-[15px] items-center rounded-[4px] px-[10px] bg-transparent py-[10px] transition-all duration-300 hover:bg-primary/5 group/list" href="/myProfile">
                        <ProfileIcon  className="fill-gray_text group-hover/list:fill-primary duration-300"/>
                        <span className="text-sm font-medium capitalize text-gray_text group-hover/list:text-primary  duration-300">Settings</span>
                    </Link>
                    <Link className="flex gap-[15px] items-center rounded-[4px] px-[10px] bg-transparent py-[10px] transition-all duration-300 hover:bg-primary/5 group/list" href="/myProfile">
                        <SignoutIcon  className="fill-gray_text group-hover/list:fill-primary duration-300"/>
                        <span className="text-sm font-medium capitalize text-gray_text group-hover/list:text-primary  duration-300">Sign Out</span>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default HeaderProfile;