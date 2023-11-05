import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import data from '../../pages/api/data.json';
const Footer = () => {
    return (
        <section className='onest__Footer__area bg-secondary pt-60px pb-40px lg:pt-[145px] lg:pb-[78px] md:pt-[95px] md:pb-[40px] '>
            <div className='container grid gap-6 md:grid-cols-12 grid-cols-1 pb-10'>
                {/* FOOTER__WIDGET::START  */}
                <div className="footer_widget lg:col-span-5  md:col-span-6 ">
                    <div className="footer_logo mb-5">
                        <Link href="/">
                            <Image src={data.logo} width='178' height="34" alt='#'></Image>
                        </Link>
                    </div>
                    <p className=' font-sm font-normal text-[#BABABA] leading-[22px] mb-8 max-w-[420px]'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    <div className="social_media_links flex gap-4">
                        <Link href="#" className='w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#3B5998] hover:bg-primary transition-all'>
                            <svg width="11" height="25" viewBox="0 0 11 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5254 12.604H7.3135V24.3709H2.44723V12.604H0.132812V8.46871H2.44723V5.79268C2.44723 3.87902 3.35624 0.882446 7.35681 0.882446L10.9614 0.897527V4.91157H8.34605C7.91705 4.91157 7.31382 5.12591 7.31382 6.03878V8.47256H10.9505L10.5254 12.604Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link href="#" className='w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#55ACEE] transition-all  hover:bg-primary'>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0257 2.83534C20.2544 3.17738 19.4246 3.40873 18.5544 3.51204C19.4429 2.97973 20.1247 2.13746 20.4466 1.1322C19.6152 1.62536 18.694 1.98313 17.7144 2.17597C16.9296 1.34012 15.8114 0.817749 14.5731 0.817749C12.1975 0.817749 10.2707 2.74454 10.2707 5.12022C10.2707 5.45744 10.3089 5.78569 10.3827 6.10078C6.80695 5.92141 3.63649 4.20864 1.5143 1.60483C1.14402 2.24014 0.931609 2.97973 0.931609 3.76809C0.931609 5.26043 1.69174 6.5779 2.84556 7.34926C2.14062 7.32712 1.47676 7.13364 0.896956 6.81053C0.896635 6.82882 0.896635 6.84711 0.896635 6.86508C0.896635 8.94973 2.38031 10.6885 4.34817 11.0835C3.98752 11.1823 3.60665 11.2346 3.21488 11.2346C2.93701 11.2346 2.66781 11.208 2.40534 11.1579C2.95273 12.8668 4.54133 14.1108 6.42448 14.1458C4.95172 15.3 3.0968 15.9876 1.08049 15.9876C0.733957 15.9876 0.390632 15.9673 0.0546875 15.9272C1.95773 17.1484 4.21982 17.8604 6.64941 17.8604C14.5632 17.8604 18.891 11.3046 18.891 5.61852C18.891 5.4321 18.8868 5.24632 18.8785 5.06214C19.7198 4.45571 20.4491 3.69815 21.0257 2.83534Z" fill="#F1F2F2"/>
                            </svg>
                        </Link>
                        <Link href="#" className='w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#007AB9] transition-all  hover:bg-primary'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7547 12.3477V19.7687H16.4521V12.845C16.4521 11.1066 15.8309 9.91934 14.2731 9.91934C13.0843 9.91934 12.3781 10.7186 12.0662 11.4926C11.9529 11.7691 11.9238 12.1532 11.9238 12.5411V19.7684H7.62092C7.62092 19.7684 7.67868 8.04195 7.62092 6.82811H11.9241V8.66187C11.9154 8.6763 11.9032 8.69042 11.8955 8.70422H11.9241V8.66187C12.4959 7.78205 13.5156 6.52425 15.8018 6.52425C18.6324 6.52425 20.7547 8.37373 20.7547 12.3477ZM3.1198 0.590454C1.64798 0.590454 0.685059 1.55659 0.685059 2.82594C0.685059 4.06833 1.62006 5.06238 3.06333 5.06238H3.09124C4.59194 5.06238 5.52502 4.06833 5.52502 2.82594C5.49646 1.55659 4.59194 0.590454 3.1198 0.590454ZM0.940789 19.7687H5.24201V6.82811H0.940789V19.7687Z" fill="#F1F2F2"/>
                        </svg>
                        </Link>
                    </div>
                </div>
                {/* FOOTER__WIDGET::END    */}

                {/* FOOTER__WIDGET::START  */}
                <div className="footer_widget lg:col-span-2  md:col-span-6">
                    <div className="footer__title mb-[20px]">
                        <h4 className=' font-base font-semibold text-white capitalize '>Market Place</h4>
                    </div>
                    <ul>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">All NFTs</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">New</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">Art</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">Sports</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">Utility</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">Music</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">New Arival</Link>
                        </li>
                    </ul>
                </div>
                {/* FOOTER__WIDGET::END  */}

                 {/* FOOTER__WIDGET::START  */}
                 <div className="footer_widget lg:col-span-2  md:col-span-6">
                    <div className="footer__title mb-[20px]">
                        <h4 className=' font-base font-semibold text-white capitalize '>My Account</h4>
                    </div>
                    <ul>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all' href="#">Profile</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">Favorite</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">My Collections</Link>
                        </li>
                        <li>
                            <Link className='font-base font-normal text-[#BABABA] hover:text-primary transition-all leading-[35px] block' href="#">Settings</Link>
                        </li>
                    </ul>
                </div>
                {/* FOOTER__WIDGET::END  */}
                 {/* FOOTER__WIDGET::START  */}
                 <div className="footer_widget lg:col-span-3  md:col-span-6">
                    <div className="footer__title mb-[20px]">
                        <h4 className=' font-base font-semibold text-white capitalize '>Stay in the loop</h4>
                    </div>
                    <p className='font-sm font-normal text-[#BABABA] leading-[22px]'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                </div>
                {/* FOOTER__WIDGET::END  */}
            </div>
            <div className="footer_copyright_area">
                <div className="container text-center border-[#BCBCBC] border-t-[.5px]">
                    <p className='font-base font-normal text-[#807E7E] mt-8'>Copyright © 2023 <Link className='inline-flex' href="#">Onest <span className='text-primary'>C</span> rypto</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Footer;