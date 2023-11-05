import React from 'react'
const TwitterIcon = ({ fill = "", ...props }) => {
  return (
    <svg {...props} width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.2635 5.35229C26.2637 5.15157 26.2106 4.9544 26.1097 4.78086C26.0089 4.60732 25.8638 4.46361 25.6894 4.36437C25.5149 4.26512 25.3172 4.21389 25.1165 4.21588C24.9158 4.21788 24.7192 4.27303 24.5468 4.37572C23.8816 4.77161 23.1655 5.0748 22.4184 5.27686C21.3513 4.36121 19.9903 3.86015 18.5842 3.86527C17.0417 3.86705 15.5602 4.46822 14.4526 5.54185C13.3451 6.61548 12.6981 8.07752 12.6483 9.61925C9.60733 9.13432 6.85124 7.54711 4.90557 5.1603C4.78833 5.01807 4.63862 4.90611 4.46904 4.83388C4.29947 4.76164 4.11501 4.73124 3.93122 4.74524C3.74754 4.76037 3.5703 4.82001 3.41485 4.91901C3.25939 5.018 3.13038 5.15338 3.03899 5.31343C2.57027 6.1314 2.30107 7.04839 2.25325 7.98993C2.20543 8.93146 2.38034 9.87101 2.76377 10.7323L2.76156 10.7345C2.58922 10.8406 2.447 10.9892 2.34849 11.166C2.24998 11.3428 2.19848 11.5419 2.19892 11.7443C2.19683 11.9113 2.20685 12.0782 2.22888 12.2437C2.34495 13.6736 2.97864 15.012 4.01112 16.0079C3.94108 16.1414 3.89833 16.2874 3.88537 16.4376C3.87241 16.5877 3.88951 16.7389 3.93565 16.8824C4.38578 18.2849 5.34304 19.4689 6.62011 20.2027C5.32265 20.7045 3.92171 20.8794 2.54071 20.7121C2.28511 20.68 2.0262 20.7358 1.80645 20.8702C1.58669 21.0046 1.41915 21.2097 1.33129 21.4519C1.24344 21.6941 1.24049 21.9589 1.32294 22.203C1.40538 22.447 1.56832 22.6558 1.78503 22.7951C4.16015 24.3248 6.92559 25.1381 9.75071 25.1378C12.9544 25.1738 16.0802 24.15 18.6419 22.2258C21.2036 20.3015 23.0575 17.5845 23.9153 14.4976C24.3165 13.1528 24.5214 11.7572 24.5235 10.3539C24.5235 10.2795 24.5235 10.2029 24.5224 10.1264C25.1157 9.48652 25.5753 8.73466 25.8743 7.91488C26.1733 7.0951 26.3056 6.22388 26.2635 5.35229V5.35229ZM22.506 9.00221C22.3183 9.22419 22.2233 9.50993 22.2407 9.80011C22.2518 9.98761 22.2507 10.1762 22.2507 10.3539C22.2484 11.5397 22.0746 12.719 21.7347 13.8551C21.0341 16.4817 19.4724 18.7972 17.2996 20.4308C15.1267 22.0644 12.4685 22.9216 9.75071 22.865C8.77443 22.8653 7.80152 22.7506 6.85209 22.5232C8.06279 22.1331 9.19481 21.5315 10.1957 20.7465C10.3801 20.6014 10.515 20.4027 10.582 20.1779C10.6489 19.953 10.6447 19.7129 10.5698 19.4906C10.4949 19.2682 10.353 19.0745 10.1636 18.9359C9.97427 18.7974 9.74667 18.7209 9.51208 18.7168C8.56756 18.7021 7.66562 18.3214 6.9963 17.6548C7.1661 17.6226 7.33478 17.5827 7.50235 17.535C7.74782 17.4651 7.96263 17.3146 8.1122 17.1078C8.26176 16.901 8.33738 16.6499 8.32687 16.3949C8.31636 16.1399 8.22034 15.8959 8.05427 15.7021C7.8882 15.5083 7.66173 15.376 7.41135 15.3266C6.8631 15.2183 6.34719 14.9851 5.90375 14.645C5.4603 14.3049 5.10126 13.8671 4.85452 13.3657C5.0599 13.3937 5.26658 13.4111 5.47375 13.4178C5.71987 13.4216 5.96079 13.3469 6.16168 13.2047C6.36257 13.0624 6.51301 12.86 6.59126 12.6266C6.66623 12.3911 6.66237 12.1376 6.58027 11.9045C6.49816 11.6714 6.34228 11.4714 6.13627 11.3349C5.63643 11.0019 5.22699 10.5501 4.94462 10.02C4.66225 9.48996 4.51576 8.89812 4.51827 8.29753C4.51827 8.22208 4.52048 8.14661 4.52493 8.07226C7.07183 10.4476 10.3753 11.8478 13.8534 12.0262C14.0289 12.0332 14.2038 12.0001 14.3647 11.9295C14.5256 11.859 14.6684 11.7528 14.7822 11.619C14.8949 11.4839 14.9747 11.3244 15.0154 11.1532C15.056 10.982 15.0563 10.8038 15.0163 10.6324C14.9513 10.3612 14.9182 10.0834 14.9176 9.80455C14.9186 8.83243 15.3052 7.90042 15.9926 7.21302C16.68 6.52563 17.612 6.139 18.5842 6.13798C19.0843 6.13664 19.5793 6.239 20.0379 6.4386C20.4965 6.6382 20.9088 6.93071 21.2486 7.29765C21.3797 7.43866 21.5447 7.54378 21.7278 7.60304C21.911 7.66229 22.1063 7.67369 22.2951 7.63617C22.7619 7.54532 23.222 7.42297 23.6723 7.26996C23.3652 7.89834 22.9727 8.48127 22.506 9.00221V9.00221Z"/>
    </svg>
    
  )
}

export default TwitterIcon