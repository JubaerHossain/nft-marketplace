import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthWrapper = ({children}:any) => {
    return (
        <section className='login_wrapper bg-loginBg min-h-screen flex justify-center items-center py-[100px] px-[20px]  bg-fixed'>
            <div className="login_wrapper_box max-w-[776px] w-full text-center bg-[#232333] p-12 shadow-theme_shadow8 py-[100px] rounded-2xl">
                <div className="logo_icon flex justify-center ">
                    <Link href="/">
                        <Image src="/assets/imgs/logo.svg" width="300" height="48" alt='#'/>
                    </Link>
                </div>
                {children}
            </div>
        </section>
    );
};

export default AuthWrapper;