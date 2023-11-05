import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'
import { Input } from '../../Elements/index';
import data from '../../../pages/api/data.json';
import Navmenu from "../Headers/navMenu"
import MobileMenu from "../Headers/mobileMenu"
import useSticky from "../../../hooks/use-sticky"
import HeaderProfile from "../../widgets/HeaderProfile/HeaderProfile";

const Header = () => {
    const {headerSticky} = useSticky();
    const [isMobileMenuOpen , setMobileMenuOpen] = useState(false);
   
    const mobileMenuHandeler=()=> {
        setMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <header className={`nft_header left-0  w-full z-[100] ${headerSticky ? "navbar_fixed bg-secondary" : "absolute top-0"}`}>
            <div className="header_area">
                <div className="onestNft__navbar flex py-4 lg:py-[30px] bg-accent2 bg-bodyBg  xl:flex  lg:bg-transparent">
                    <div className="container  ">
                        <div className="flex items-center xxl:gap-x-[50px] xl:gap-x-[30px] lg:gap-x-8 justify-between ">
                            <div className="inline-flex lg:hidden">
                                <HeaderProfile/>
                            </div>
                            <div className="onestNft__navbar__left">
                                <div className="onestNft__logo">
                                    <Link href="/">
                                        <Image src={data.logo} alt="me" width="147" height="22" />
                                    </Link>
                                </div>
                            </div>
                            <div className="onestNft__navbar__middle flex-1  items-center justify-between hidden lg:flex">
                                <div className="form-control lg:w-[250px] xl:w-[300px] xxl:w-[364px]  rounded-lg bg-[#232333] border-none hidden  lg:inline-flex ">
                                    <div className="input-group h-[44px] items-center" >
                                        <button className="btn btn-square bg-transparent border-0 h-[44px] min-h-full  p-0 hover:bg-transparent focus:bg-transparent pl-[10px]" >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0918 15.9085L14.0002 12.8418C15.2002 11.3455 15.7814 9.44625 15.6242 7.53458C15.4669 5.62292 14.5832 3.84415 13.1548 2.56403C11.7263 1.28392 9.86167 0.599756 7.94427 0.652223C6.02686 0.70469 4.20243 1.4898 2.84612 2.84612C1.4898 4.20243 0.70469 6.02686 0.652223 7.94427C0.599756 9.86167 1.28392 11.7263 2.56403 13.1548C3.84415 14.5832 5.62292 15.4669 7.53458 15.6242C9.44625 15.7814 11.3455 15.2002 12.8418 14.0002L15.9085 17.0668C15.986 17.1449 16.0781 17.2069 16.1797 17.2492C16.2812 17.2915 16.3902 17.3133 16.5002 17.3133C16.6102 17.3133 16.7191 17.2915 16.8206 17.2492C16.9222 17.2069 17.0144 17.1449 17.0918 17.0668C17.242 16.9114 17.326 16.7038 17.326 16.4877C17.326 16.2716 17.242 16.0639 17.0918 15.9085ZM8.16683 14.0002C7.01311 14.0002 5.88529 13.658 4.926 13.0171C3.96672 12.3761 3.21904 11.4651 2.77753 10.3992C2.33602 9.33325 2.2205 8.16036 2.44558 7.0288C2.67066 5.89725 3.22624 4.85785 4.04204 4.04204C4.85785 3.22624 5.89725 2.67066 7.0288 2.44558C8.16036 2.2205 9.33325 2.33602 10.3992 2.77753C11.4651 3.21904 12.3761 3.96672 13.0171 4.926C13.658 5.88529 14.0002 7.01311 14.0002 8.16683C14.0002 9.71393 13.3856 11.1977 12.2916 12.2916C11.1977 13.3856 9.71393 14.0002 8.16683 14.0002Z" fill="#FAF9FD"/>
                                            </svg>
                                        </button>
                                        <Input title={'Search'} />
                                    </div>
                                </div>
                                {/* Navmenu::start*/}
                                <Navmenu/>
                                {/* Navmenu::end  */}
                            </div>
                            <div className="onestNft__navbar__right flex items-center lg:gap-[22px] gap-3">
                                {/* profile compontn  */}
                                <div className="hidden lg:inline-flex">
                                    <HeaderProfile/>
                                </div>
                                {/* profile compontn  */}
                                <Link href="/wallets" className="btn btn-primary  rounded-full hidden lg:inline-flex gap-2.5 lg:px-[25px] py-[6px] lg:h-11 lg:h-m-[44px] min-h-max w-10 h-10 p-0 lg:w-auto">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1667 4.66683V2.16683C12.1667 1.94582 12.0789 1.73385 11.9226 1.57757C11.7663 1.42129 11.5544 1.3335 11.3334 1.3335H3.00004C2.55801 1.3335 2.13409 1.50909 1.82153 1.82165C1.50897 2.13421 1.33337 2.55814 1.33337 3.00016M1.33337 3.00016C1.33337 3.44219 1.50897 3.86611 1.82153 4.17867C2.13409 4.49123 2.55801 4.66683 3.00004 4.66683H13C13.2211 4.66683 13.433 4.75463 13.5893 4.91091C13.7456 5.06719 13.8334 5.27915 13.8334 5.50016V8.00016M1.33337 3.00016V13.0002C1.33337 13.4422 1.50897 13.8661 1.82153 14.1787C2.13409 14.4912 2.55801 14.6668 3.00004 14.6668H13C13.2211 14.6668 13.433 14.579 13.5893 14.4228C13.7456 14.2665 13.8334 14.0545 13.8334 13.8335V11.3335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14.6667 8V11.3333H11.3334C10.8914 11.3333 10.4675 11.1577 10.1549 10.8452C9.84234 10.5326 9.66675 10.1087 9.66675 9.66667C9.66675 9.22464 9.84234 8.80072 10.1549 8.48816C10.4675 8.1756 10.8914 8 11.3334 8H14.6667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className=" text-base text-white capitalize font-medium hidden lg:block">Connect Wallet</span>
                                </Link>
                                <button onClick={mobileMenuHandeler} className="btn btn-primary  rounded-full inline-flex min-h-max w-10 h-10 p-0  lg:hidden">
                                    <Image src="/assets/imgs/svg/menu_line.png" sizes="100vw" width="20" height="20"  alt="#"></Image>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <MobileMenu isMobileMenuOpen={isMobileMenuOpen} mobileMenuHandeler={mobileMenuHandeler}/>
                </div>
            </div>
        </header>
        
    );
};

export default Header;