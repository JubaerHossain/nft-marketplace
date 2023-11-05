
import Link from 'next/link';
import React from 'react';

const ThemeLineButton = ({buttonProps}) => {
    const {text, url = "" } = buttonProps;
    return (
        <Link href={url} className='border-[1px] border-primary rounded-full flex items-center gap-[10px] py-[9px] px-[16px] hover:bg-primary transition-all group whitespace-nowrap'>
            <span className='text-primary text-sm font-medium group-hover:text-white transition-all'>{text}</span>
            <svg className="stroke-primary group-hover:stroke-white transition-all" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 4H12.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.25 7L12.25 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.25 1L12.25 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    );
};

export default ThemeLineButton;