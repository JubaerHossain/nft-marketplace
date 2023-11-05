import React from 'react';

const Themebutton3 = ({buttonProps}) => {
    const {text,block, button_size , shadow } = buttonProps;
    return (
        <button className={`btn btn-primary rounded-full  gap-2.5 px-[25px] py-[6px] ${button_size ? "h-11 h-m-[44px]" : '' }  min-h-max min-w-[150px] text-white capitalize  ${block ? "block w-full" : "inline-flex"} ${shadow ?  "shadow-theme_shadow" : "hover:shadow-theme_shadow" } `}>
            {text}
        </button>
    );
};

export default Themebutton3;