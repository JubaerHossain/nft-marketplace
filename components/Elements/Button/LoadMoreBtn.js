
import Link from 'next/link';
import React from 'react';
import { LoadIcon } from '../../icons';

const LoadMoreBtn = ({handleClick}) => {
    console.log(handleClick)
    return (
        <button onClick={()=>handleClick() } className='ot_line_btn btn btn-outline btn-primary max-w-[300px] w-full mx-auto group flex gap-2'>
            <LoadIcon/>
            <span className='group-hover:text-white transition-all'>Load More</span>
        </button>
    );
};

export default LoadMoreBtn;