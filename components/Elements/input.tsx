import React from 'react'



const  Input = ({title}: {title: any}) => {
  return (
    <>
      <input type="text" placeholder={title} className="input input-bordered w-full bg-transparent border-0 h-full border-none focus:outline-none block text-sm font-medium text-white placeholder:text-[#6F767E] placeholder:font-medium pl-[2px]" />
    </>
  )
}

export default Input;

