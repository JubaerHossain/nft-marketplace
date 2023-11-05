import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from '../../Elements'
import menuData from './menu_data'

const MobileMenu = ({isMobileMenuOpen, mobileMenuHandeler}) => {
  return (
    <div className={`mobileMenu fixed left-0 top-0 max-w-xs shrink-0 overflow-x-auto min-w-[310px] z-20 bg-secondary p-[20px] h-screen transition-all ease-in duration-300    ${isMobileMenuOpen ? "translate-x-0 opacity-1" : "translate-x-[-100%] opacity-0"} `}>
        <div className='mobile_menu_header flex justify-between mb-6'>
            <Image src="/assets/imgs/logo.svg" alt="me" width="147" height="22" />
            <button onClick={()=>mobileMenuHandeler()}  className="btn btn-primary  rounded-full inline-flex min-h-max w-10 h-10 p-0  lg:hidden">
            <Image src="/assets/imgs/svg/close.png" sizes="100vw" width="20" height="20"  alt="#"></Image>
            </button>
        </div>
        <div className="form-control max-w-full  rounded-lg bg-[#232333] border-none flex mb-4">
            <div className="input-group h-[44px] items-center" >
                <button className="btn btn-square bg-transparent border-0 h-[44px] min-h-full  p-0 hover:bg-transparent focus:bg-transparent pl-[10px]" >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0918 15.9085L14.0002 12.8418C15.2002 11.3455 15.7814 9.44625 15.6242 7.53458C15.4669 5.62292 14.5832 3.84415 13.1548 2.56403C11.7263 1.28392 9.86167 0.599756 7.94427 0.652223C6.02686 0.70469 4.20243 1.4898 2.84612 2.84612C1.4898 4.20243 0.70469 6.02686 0.652223 7.94427C0.599756 9.86167 1.28392 11.7263 2.56403 13.1548C3.84415 14.5832 5.62292 15.4669 7.53458 15.6242C9.44625 15.7814 11.3455 15.2002 12.8418 14.0002L15.9085 17.0668C15.986 17.1449 16.0781 17.2069 16.1797 17.2492C16.2812 17.2915 16.3902 17.3133 16.5002 17.3133C16.6102 17.3133 16.7191 17.2915 16.8206 17.2492C16.9222 17.2069 17.0144 17.1449 17.0918 17.0668C17.242 16.9114 17.326 16.7038 17.326 16.4877C17.326 16.2716 17.242 16.0639 17.0918 15.9085ZM8.16683 14.0002C7.01311 14.0002 5.88529 13.658 4.926 13.0171C3.96672 12.3761 3.21904 11.4651 2.77753 10.3992C2.33602 9.33325 2.2205 8.16036 2.44558 7.0288C2.67066 5.89725 3.22624 4.85785 4.04204 4.04204C4.85785 3.22624 5.89725 2.67066 7.0288 2.44558C8.16036 2.2205 9.33325 2.33602 10.3992 2.77753C11.4651 3.21904 12.3761 3.96672 13.0171 4.926C13.658 5.88529 14.0002 7.01311 14.0002 8.16683C14.0002 9.71393 13.3856 11.1977 12.2916 12.2916C11.1977 13.3856 9.71393 14.0002 8.16683 14.0002Z" fill="#FAF9FD"/>
                    </svg>
                </button>
                <Input title={'Search'} />
            </div>
        </div>
        <ul>
            {
                menuData?.map((menuItem, i)=> (
                    <li key={i} >
                        <Link className="text-base font-medium capitalize text-white hover:text-primary transition-all duration-500 py-2 px-3 flex" href="/">{menuItem.title}</Link>
                    </li>
                ) )
            }
        </ul>
    </div>
  )
}

export default MobileMenu