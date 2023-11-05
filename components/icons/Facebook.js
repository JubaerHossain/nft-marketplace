import React from 'react'
const Facebook = ({ fill = "", ...props }) => {
  return (
    <svg {...props} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3067_30729)">
        <path d="M16.7725 16.204H19.6134L20.7497 11.6585H16.7725V9.38577C16.7725 8.21531 16.7725 7.11303 19.0452 7.11303H20.7497V3.29483C20.3793 3.24597 18.9804 3.13574 17.5031 3.13574C14.4179 3.13574 12.227 5.01871 12.227 8.47668V11.6585H8.81787V16.204H12.227V25.8631H16.7725V16.204Z"/>
        </g>
        <defs>
        <clipPath id="clip0_3067_30729">
        <rect width="27.2729" height="27.2729"  transform="translate(0.863281 0.863281)"/>
        </clipPath>
        </defs>
    </svg>
  )
}

export default Facebook