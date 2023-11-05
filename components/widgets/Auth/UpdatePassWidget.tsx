import Link from 'next/link';
import React from 'react';
import { InputWidget } from '../../Elements';
import AuthWrapper from './AuthWrapper';

const UpdatePassWidget = () => {
    return (
        <AuthWrapper>
            <InputWidget className="mb-[18px] mt-10" label="Enter Your Old Password" type="password" />
            <InputWidget className="mb-[18px]" label="Enter Your New Password" type="password" />
            <InputWidget className="mb-[18px]" label="Confirm Your new Password" type="password" />
            <button className="btn btn-primary w-full text-[18px] font-bold capitalize rounded-xl text-white py-[10px] leading-none h-[60px]">Submit</button>
        </AuthWrapper>
    );
};

export default UpdatePassWidget;