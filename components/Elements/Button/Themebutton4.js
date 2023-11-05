import React from 'react';

const Themebutton4 = ({buttonProps, children}) => {
    const {block, button_size , shadow } = buttonProps;
    return (
        <button className={`bg-primary rounded-full text-sm items-center py-[6px] px-[17px] ${button_size == '30' ? "h-[30px] h-m-[30px]" : '' } text-white capitalize  ${block ? "block w-full" : "inline-flex"} ${shadow ?  "shadow-theme_shadow" : "hover:shadow-theme_shadow" } `}>
            {children}
        </button>
    );
};

export default Themebutton4;