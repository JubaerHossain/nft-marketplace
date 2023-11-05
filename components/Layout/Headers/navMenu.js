import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import menuData from './menu_data'
export default function navMenu() {
  const router = useRouter();
  const {pathname} = router
  return (
    <ul className="main_menu flex items-center lg:gap-[15px] xl:gap-[16px]  xxl:gap-[33px]">
        {
            menuData?.map((menuItem, i)=> {
                return ( 
                <li key={i} >
                    <Link className={`text-base font-medium capitalize text-white hover:text-primary transition-all duration-500  ${menuItem?.link == pathname && "text-primary"}` } href={menuItem?.link}>{menuItem?.title}</Link>
                </li>
                )
            } )
        }
    </ul>
  )
}
