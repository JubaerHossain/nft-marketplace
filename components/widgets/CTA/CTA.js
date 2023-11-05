import React from 'react';

const CTA = () => {
    return (
        <div className='otech_cta_area  lg:pb-160px md:pb-80px pb-60px'>
            <div className="container">
                <div className=" bg-secondary rounded-[32px]  text-center px-6 py-8 md:p-14  flex justify-center border-[.5px] border-white/30">
                    <div className="max-w-[532px]  text-center flex flex-col items-center  ">
                        <h3 className='text-3xl text-white font-medium  mb-[23px]'>Get It A Unique and Ordinary Assets</h3>
                        <p className='text-[#838080] font-normal text-lg mb-[34px] max-w-[445px] leading-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis praesent phasellus nunc ut nibh. Gravida egestas</p>
                        <div className="NewsLetter_email_form  sm:border-primary sm:border rounded-full w-full sm:h-[57px] sm:flex relative  z-0 border-0">
                            <input type="text" placeholder="Enter your email here" className=" input input-bordered w-full max-w-full bg-transparent border  border-primary sm:border-none focus:outline-none h-full placeholder:text-primary text-white font-normal font-base pl-6 h-[57px] sm:h-full rounded-full" />
                            <button className="btn btn-primary rounded-full inline-flex gap-[10px] px-[27px] py-[6px] h-[57px]  border-none absolute right-[-1px] top-[-1px] border-none min-w-[179px] z-10 relative mt-2 sm:mt-0"><span className=" text-base text-white capitalize font-normal">Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;