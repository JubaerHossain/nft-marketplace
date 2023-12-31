import React from 'react'
const CirclePlus = ({ fill = "", ...props }) => {
  return (
    <svg  {...props} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0003 18.8337C14.6027 18.8337 18.3337 15.1027 18.3337 10.5003C18.3337 5.89795 14.6027 2.16699 10.0003 2.16699C5.39795 2.16699 1.66699 5.89795 1.66699 10.5003C1.66699 15.1027 5.39795 18.8337 10.0003 18.8337Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 7.16699V13.8337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66699 10.5H13.3337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default CirclePlus