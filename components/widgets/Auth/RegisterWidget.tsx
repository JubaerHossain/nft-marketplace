import Link from 'next/link';
import React from 'react';
import { InputWidget } from '../../Elements';
import { Emailicon, Facebook, TwitterIcon } from '../../icons';
import AuthWrapper from './AuthWrapper';

const RegisterWidget = () => {
    return (
        <AuthWrapper>
            <h2 className='text-3xl text-white font-medium mt-10 mb-6'>Register</h2>
            <InputWidget className="mb-[18px]" label="First Name" type="text" />
            <InputWidget className="mb-[18px]" label="Last Name" type="text" />
            <InputWidget className="mb-[18px]" label="Email" type="email" />
            <InputWidget className="mb-[18px]" label="Password" type="password" />
            <InputWidget className="mb-[18px]" label="Confirm Password" type="password" />
            <InputWidget className="mb-[18px]" label="Generate my address" type="text" />
            <div className="flex justify-between items-center mb-[4px]">
                <div className="form-control">
                    <label className="label cursor-pointer gap-[12px]">
                    {/* checked  */}
                        <input type="checkbox"  className="checkbox border border-gray-border2 rounded w-5 h-5 "/>
                        <span className="label-text text-base font-normal text-[#E6E6E6]">Remember me</span> 
                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className="form-control">
                    <label className="label cursor-pointer gap-[12px]">
                    {/* checked  */}
                        <input type="checkbox"  className="checkbox border border-gray-border2 rounded w-5 h-5 "/>
                        <span className="label-text text-base font-normal text-[#E6E6E6]">I agree to all the <Link className="text-primary hover:underline transition-all duration-300 hover:!text-primary" href="#">Terms</Link> and <Link className="text-primary hover:underline transition-all duration-300 hover:!text-primary"  href="#">Privacy policy</Link> </span> 
                    </label>
                </div>
            </div>
            <button className="btn btn-primary w-full text-[18px] font-bold capitalize rounded-xl text-white py-[10px] leading-none h-[60px]">Submit</button>
            <p className='text-gray_text text-base font-medium tracking-[0.5px] mt-6 mb-[50px]'>Already have an account? <Link className='text-primary hover:underline transition-all duration-300'  href="/auth/"> Log In</Link></p>
            
        </AuthWrapper>
    );
};

export default RegisterWidget;