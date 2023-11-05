import Link from 'next/link';
import React from 'react';

const Themebutton = ({buttonProps, children}) => {
    return (
        <Link href={buttonProps?.link ? buttonProps.link : "#" } className='btn btn-primary rounded-full inline-flex gap-2.5 px-[25px] py-[6px] h-11 h-m-[44px] min-h-max min-w-[150px] text-white capitalize hover:shadow-theme_shadow'>
            {children}
        </Link>
    );
};

export default Themebutton;