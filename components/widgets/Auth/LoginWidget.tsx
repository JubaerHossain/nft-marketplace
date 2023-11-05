import Link from 'next/link';
import React from 'react';
import { InputWidget } from '../../Elements';
import { Emailicon, Facebook, TwitterIcon } from '../../icons';
import AuthWrapper from './AuthWrapper';

const LoginWidget = () => {
    return (
        <AuthWrapper>
            <h2 className='text-3xl text-white font-medium mt-10 mb-6'>Login</h2>
            <InputWidget className="mb-[18px]" label="Email" type="text" />
            <InputWidget className="mb-[18px]" label="Crypto Address" type="text" />
            <InputWidget className="mb-[18px]" label="Password" type="password" />
            <div className="flex justify-between items-center mb-4">
                <div className="form-control">
                    <label className="label cursor-pointer gap-[12px]">
                    {/* checked  */}
                        <input type="checkbox"  className="checkbox border border-gray-border2 rounded w-5 h-5 "/>
                        <span className="label-text text-base font-normal text-[#E6E6E6]">Remember me</span> 
                    </label>
                </div>
                <Link href="/auth/forget-password" className='text-primary text-base font-normal tracking-[0.5px] hover:underline transition-all duration-300'>Forgot password?</Link>
            </div>
            <button className="btn btn-primary w-full text-[18px] font-bold capitalize rounded-xl text-white py-[10px] leading-none h-[60px]">Log In</button>
            <p className='text-gray_text text-base font-medium tracking-[0.5px] mt-6 mb-[50px]'>New User? <Link className='text-primary hover:underline transition-all duration-300'  href="/auth/register">Create an account</Link></p>
            <p className='text-base text-white font-medium mb-6 '>Or Sign in with</p>
            <div className="signIn_with_social flex justify-center items-center gap-[27px]">
                <Link href="#" className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#E6E6E6] hover:border-primary  ease-in-out duration-300 group">
                    <Emailicon className="stroke-light_gray group-hover:stroke-primary transition-all duration-300"/>
                </Link>
                <Link href="#" className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#E6E6E6] hover:border-primary  ease-in-out duration-300 group">
                    <Facebook className="fill-light_gray group-hover:fill-primary transition-all duration-300"/>
                </Link>
                <Link href="#" className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#E6E6E6] hover:border-primary  ease-in-out duration-300 group">
                    <TwitterIcon className="stroke-light_gray group-hover:stroke-primary transition-all duration-300"/>
                </Link>
                <Link href="#" className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#E6E6E6] hover:border-primary  ease-in-out duration-300 group">
                    <Emailicon className="stroke-light_gray group-hover:stroke-primary transition-all duration-300"/>
                </Link>
            </div>
        </AuthWrapper>
    );
};

export default LoginWidget;