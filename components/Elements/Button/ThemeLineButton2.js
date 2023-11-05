
import Link from 'next/link';
import React from 'react';

const ThemeLineButton2 = ({buttonProps, children}) => {
    const {text,block, button_size , shadow } = buttonProps;
    return (
        <Link href="#" className={`border-[1.5px] border-primary rounded-full flex items-center   text-base font-medium capitalize hover:bg-primary transition-all duration-500 hover:text-white text-primary text-center justify-center px-[35px] ${button_size == "44" && "h-[44px]"} ${block && "block w-full"} hover:shadow-theme_shadow  `}>
            {children}
        </Link>
    );
};

export default ThemeLineButton2;