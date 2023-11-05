import React from 'react'
const Emailicon = ({ fill = "", ...props }) => {
  return (
    <svg {...props} width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1814 1.54492H3.27225C2.01705 1.54492 0.999512 2.56246 0.999512 3.81766V15.1813C0.999512 16.4365 2.01705 17.4541 3.27225 17.4541H19.1814C20.4366 17.4541 21.4542 16.4365 21.4542 15.1813V3.81766C21.4542 2.56246 20.4366 1.54492 19.1814 1.54492Z"  strokeWidth="1.70455" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M0.999512 3.81738L11.2268 10.6356L21.4542 3.81738" strokeWidth="1.70455" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Emailicon