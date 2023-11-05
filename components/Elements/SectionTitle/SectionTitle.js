import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <div className='SectionTitle'>
            <h3 className='md:text-[38px] text-3xl  font-bold capitalize text-white  '>{children}</h3>
        </div>
    );
};

export default SectionTitle;