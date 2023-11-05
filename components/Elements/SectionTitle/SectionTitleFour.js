import React from 'react';

const SectionTitleFour = ({title}) => {
    return (
        <div className='details_title_inner flex gap-4 border-b-[.5px] border-[#FFA011]/40 items-center pb-4 mb-[15px]'>
          <h3 className='lg:text-[36px] font-semibold text-white leading-normal text-xl'>{title}</h3>
        </div>
    );
};

export default SectionTitleFour;