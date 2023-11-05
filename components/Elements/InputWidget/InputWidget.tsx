import React from 'react';

const InputWidget = ({...props}:any) => {
    
    // const {label } = children
    console.log(props);
    const {label, type="text", className="mb-0" } = props
    return (
        <div className={`form-control w-full max-w-full ${className}` }>
            <label className="label p-0 mb-[5px]">
                <span className="label-text text-base text-light_gray capitalize font-normal">{label}</span>
            </label>
            <input type={type} placeholder="Type here" className="input input-bordered w-full max-w-full border border-gray-border2 rounded-xl bg-transparent h-[60px] placeholder:text-gray_text text-base  text-white"/>
        </div>
    );
};

export default InputWidget;