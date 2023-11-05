
import Link from 'next/link';
import React from 'react';

const ThemeLineButton3 = ({buttonProps, children}) => {
    const { link} = buttonProps;
    return (
        <Link href={link} className="btn btn-outline btn-primary ot_line_btn2 hover:!text-white">
            {children}
        </Link>
    );
};

export default ThemeLineButton3;