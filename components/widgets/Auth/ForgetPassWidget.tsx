import Link from 'next/link';
import React from 'react';
import { InputWidget } from '../../Elements';
import AuthWrapper from './AuthWrapper';

const ForgetPassWidget = () => {
    return (
        <AuthWrapper>
            <InputWidget className="mb-6 mt-10" label="Enter Your mail" type="email" />
            <button className="btn btn-primary w-full text-[18px] font-bold capitalize rounded-xl text-white py-[10px] leading-none h-[60px]">Submit</button>
            
        </AuthWrapper>
    );
};

export default ForgetPassWidget;