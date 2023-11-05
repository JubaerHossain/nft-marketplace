import React from 'react';

const ThemeButton2 = ({children}) => {
    return (
        <button className='btn btn-primary rounded-full inline-flex px-[10px] py-[2px] h-8 h-m-[32px] min-h-max min-w-[110px] text-white capitalize text-sm shadow-theme_shadow font-medium lol '>
            {children}
        </button>
    );
};

export default ThemeButton2;