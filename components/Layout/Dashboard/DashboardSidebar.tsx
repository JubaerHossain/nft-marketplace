import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const DashboardSidebar = () => {
    return (
        <div className='max-w-[290px] flex-shrink-0 w-full py-[30px] pl-[30px]'>
            <div className='max-w-[258px] w-full bg-[#232333] h-full rounded-lg pt-[35px] px-[10px]'>
                <div className="sidebar__header text-center flex justify-center pb-5">
                    <Link className='texn-center' href="#">
                        <Image src="/assets/imgs/logo.svg" width="147" height="30" alt='sidebar logo' />
                    </Link>
                </div>
                <div className='gradient_border_2 h-[.2px] w-full'></div>
                <div className="sidebarNav">
                    <ul>
                        <li>
                            <a href="#"></a>
                            <ul>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;