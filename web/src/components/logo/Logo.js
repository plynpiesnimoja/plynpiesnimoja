import React from 'react';

import { cn } from 'src/lib/helpers'

import './styles.scss';

const Logo = ({ className, focusable }) => {
  const classes = ['ppm-Logo', className]
  return (
    <div
      className={cn(classes)}
      role='banner'
      aria-label='Logo zespołu Płyń pieśni moja'
      tabIndex={focusable ? '0' : '-1'}
    >
      <Vector />
    </div>
  )
}

export default Logo;



const Vector = ({ extended }) => {
  if (!extended) {
    return(
      <svg
        width='60'
        height='30'
        viewBox='0 0 60 30' 
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M56.25 24.75H3.75V25.25H56.25V24.75Z' className='five-line-element'/>
          <path d='M56.25 19.75H3.75V20.25H56.25V19.75Z' className='five-line-element'/>
          <path d='M56.25 14.778H3.75V15.2225H56.25V14.778Z' className='five-line-element'/>
          <path d='M56.25 9.75H3.75V10.25H56.25V9.75Z' className='five-line-element'/>
          <path d='M56.25 4.75H3.75V5.25H56.25V4.75Z' className='five-line-element'/>
          <path d='M56.25 4.75H55V25.25H56.25V4.75Z' className='five-line-element'/>
          <path d='M33.746 14.8335C33.6956 13.5597 33.1606 12.3532 32.2503 11.4607C31.34 10.5683 30.1231 10.0572 28.8486 10.0321C27.574 10.0069 26.338 10.4695 25.3932 11.3254C24.4483 12.1812 23.8661 13.3657 23.7655 14.6365C23.7553 14.7017 23.7501 14.7675 23.75 14.8335V25H26.25V19.331C27.0102 19.7699 27.8725 20.0009 28.7502 20.0009C29.628 20.0008 30.4903 19.7697 31.2504 19.3308C32.0105 18.8918 32.6417 18.2605 33.0805 17.5003C33.5192 16.7401 33.7502 15.8778 33.75 15C33.75 14.944 33.75 14.889 33.746 14.8335ZM28.75 17.5C28.0872 17.4992 27.4518 17.2356 26.9831 16.7669C26.5144 16.2982 26.2508 15.6628 26.25 15C26.25 14.9435 26.255 14.8885 26.2585 14.8335C26.2994 14.2081 26.574 13.621 27.0277 13.1888C27.4815 12.7565 28.0812 12.5107 28.7078 12.5002C29.3344 12.4897 29.942 12.7152 30.41 13.132C30.878 13.5488 31.1722 14.1264 31.234 14.75C31.234 14.778 31.231 14.806 31.231 14.8345C31.2309 14.9052 31.2369 14.9758 31.249 15.0455C31.2364 15.7002 30.9677 16.324 30.5005 16.7829C30.0333 17.2417 29.4049 17.4992 28.75 17.5V17.5Z' />
          <path d='M18.746 19.8335C18.6956 18.5597 18.1606 17.3532 17.2503 16.4608C16.34 15.5683 15.1231 15.0572 13.8486 15.0321C12.574 15.0069 11.338 15.4696 10.3932 16.3254C9.44833 17.1813 8.86611 18.3657 8.7655 19.6365C8.75525 19.7017 8.75007 19.7676 8.75 19.8335V30H11.25V24.331C12.0102 24.7699 12.8725 25.0009 13.7502 25.0009C14.628 25.0009 15.4903 24.7698 16.2504 24.3308C17.0105 23.8919 17.6417 23.2606 18.0805 22.5003C18.5192 21.7401 18.7502 20.8778 18.75 20C18.75 19.944 18.75 19.889 18.746 19.8335ZM13.75 22.5C13.0872 22.4992 12.4518 22.2356 11.9831 21.7669C11.5144 21.2982 11.2508 20.6628 11.25 20C11.25 19.9435 11.255 19.8885 11.2585 19.8335C11.2994 19.2082 11.574 18.6211 12.0277 18.1888C12.4815 17.7565 13.0812 17.5107 13.7078 17.5002C14.3344 17.4897 14.942 17.7152 15.41 18.132C15.878 18.5488 16.1722 19.1264 16.234 19.75C16.234 19.778 16.231 19.806 16.231 19.8345C16.2309 19.9052 16.2369 19.9758 16.249 20.0455C16.2364 20.7003 15.9677 21.324 15.5005 21.7829C15.0333 22.2418 14.4049 22.4992 13.75 22.5V22.5Z' />
          <path d='M50.657 3.3275C50.4758 3.21555 50.2689 3.15178 50.0561 3.14224C49.8433 3.1327 49.6315 3.17771 49.441 3.273L39.441 8.273C39.2334 8.37681 39.0587 8.53639 38.9367 8.73385C38.8147 8.93131 38.75 9.15886 38.75 9.391V20H41.25V10.1635L43.75 8.9135V17.5H46.25V7.6635L48.75 6.4135V15H51.25V4.391C51.25 4.17788 51.1955 3.9683 51.0918 3.78216C50.988 3.59602 50.8383 3.43951 50.657 3.3275V3.3275Z' />
        </g>
      </svg>
    );
  } else {
    return(
      <svg 
        width='150' 
        height='30' 
        viewBox='0 0 150 30' 
        fill='none' 
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M148.75 24.75H0V25.25H148.75V24.75Z' fill='white'/>
        <path d='M148.75 19.75H0V20.25H148.75V19.75Z' fill='white'/>
        <path d='M148.75 14.78H0V15.225H148.75V14.78Z' fill='white'/>
        <path d='M148.75 9.75H0V10.25H148.75V9.75Z' fill='white'/>
        <path d='M148.75 4.75H0V5.25H148.75V4.75Z' fill='white'/>
        <path d='M148.75 4.75H147.5V25.25H148.75V4.75Z' fill='white'/>
        <path d='M115.655 3.33002C115.285 3.10002 114.825 3.08002 114.44 3.27502L104.44 8.27502C104.015 8.48502 103.75 8.92002 103.75 9.39502V10.7V12.6V20H106.25V12.6V10.7V10.165L108.75 8.91502V17.5H111.25V7.66502L113.75 6.41502V11.75V15H116.25V11.75V5.70002V4.39002C116.25 3.96002 116.025 3.55502 115.655 3.33002Z' fill='white'/>
        <path d='M128.75 5.02002V14.75V15.02V16C128.75 16.69 128.19 17.25 127.5 17.25H126.25V19.75H127.5C129.57 19.75 131.25 18.07 131.25 16V15.02V14.75V5.02002H128.75Z' fill='white'/>
        <path d='M122.5 5C119.74 5 117.5 7.24 117.5 10C117.5 12.76 119.74 15 122.5 15C125.26 15 127.5 12.76 127.5 10C127.5 7.24 125.26 5 122.5 5ZM122.5 12.5C121.12 12.5 120 11.38 120 10C120 8.62 121.12 7.5 122.5 7.5C123.88 7.5 125 8.62 125 10C125 11.38 123.88 12.5 122.5 12.5Z' fill='white'/>
        <path d='M142.5 12.5V10C142.5 7.24 140.26 5 137.5 5C134.74 5 132.5 7.24 132.5 10C132.5 12.76 134.74 15 137.5 15C138.625 15 139.665 14.63 140.5 14C140.955 14.605 141.685 15 142.5 15H143.75V12.5H142.5ZM137.5 12.5C136.12 12.5 135 11.38 135 10C135 8.62 136.12 7.5 137.5 7.5C138.88 7.5 140 8.62 140 10V10.01C139.995 11.385 138.88 12.5 137.5 12.5Z' fill='white'/>
        <path d='M131.25 15H128.75V15.2H131.25V15Z' fill='white'/>
        <path d='M128.75 1.25V4.045L131.25 2.795V0L128.75 1.25Z' fill='white'/>
        <path d='M59.995 14.835C59.905 12.15 57.705 10 55 10C52.36 10 50.2 12.045 50.015 14.635C50.005 14.7 50 14.765 50 14.83V25H52.5V19.33C53.235 19.755 54.09 20 55 20C57.76 20 60 17.76 60 15C60 14.945 60 14.89 59.995 14.835ZM55 17.5C53.62 17.5 52.5 16.38 52.5 15C52.5 14.945 52.505 14.89 52.51 14.835C52.595 13.535 53.68 12.5 55 12.5C56.295 12.5 57.355 13.49 57.485 14.75C57.485 14.78 57.48 14.805 57.48 14.835C57.48 14.905 57.485 14.975 57.5 15.045C57.475 16.4 56.365 17.5 55 17.5Z' fill='white'/>
        <path d='M98.75 9.96997H96.2499V19.97H98.75V9.96997Z' fill='white'/>
        <path d='M96.2499 6.25V9.045L98.75 7.795V5L96.2499 6.25Z' fill='white'/>
        <path d='M63.75 9.96997H61.25V19.97H63.75V9.96997Z' fill='white'/>
        <path d='M61.25 6.25V9.045L63.75 7.795V5L61.25 6.25Z' fill='white'/>
        <path d='M91.2799 9.96497C91.2199 9.96497 90.8899 9.96997 90.5149 10.055C90.3649 10.09 90.1349 10.165 90.0099 10.21L89.9299 10.235L87.4999 11.455V9.99997H84.9999V20H87.4999V14.26L90.8999 12.55C90.9749 12.525 91.0549 12.5 91.0899 12.49C91.1699 12.47 91.2549 12.465 91.2899 12.465C91.9549 12.47 92.4999 13.01 92.4999 13.675V20H94.9999V13.68C94.9999 11.63 93.3299 9.96497 91.2799 9.96497Z' fill='white'/>
        <path d='M82.2499 4.98499L78.4999 6.85999V9.65499L82.2499 7.77999V4.98499Z' fill='white'/>
        <path d='M82.47 14.255C81.74 13.845 80.86 13.7 80.1 13.615H80.095C79.635 13.565 78.98 13.485 78.62 13.295C78.53 13.245 78.46 13.2 78.445 13.09C78.435 13.01 78.44 12.915 78.49 12.85C78.535 12.795 78.6 12.76 78.66 12.73C78.95 12.575 79.41 12.485 79.93 12.48C80.35 12.48 81.34 12.535 81.585 13.015L83.8099 11.875C83.3649 11.01 82.335 9.98499 79.925 9.98499H79.915C77.5 9.99999 75.94 11.19 75.94 13.015C75.94 14.115 76.48 15 77.455 15.515C78.18 15.895 79.055 16.03 79.82 16.11C80.065 16.135 80.305 16.17 80.545 16.22C80.77 16.265 81.005 16.32 81.21 16.43C81.335 16.495 81.415 16.615 81.435 16.755C81.49 17.195 80.95 17.365 80.62 17.435C80.365 17.485 80.105 17.51 79.845 17.51C78.38 17.51 78.145 16.995 78.035 16.745C78.015 16.705 77.925 16.5 77.87 16.39L75.625 17.495C75.65 17.55 75.715 17.695 75.755 17.775C76.425 19.26 77.8 20.01 79.845 20.01C80.875 20.01 81.785 19.79 82.48 19.365C83.4199 18.795 83.9399 17.89 83.9399 16.815C83.9399 15.695 83.415 14.79 82.47 14.255Z' fill='white'/>
        <path d='M71.94 16.88C70.705 17.5 70.315 17.5 70 17.5C69.53 17.5 69.085 17.37 68.71 17.14L72.485 15.25L74.9049 14.04C74.7399 13.19 74.3599 12.42 73.83 11.785C72.915 10.695 71.535 10 70 10C67.24 10 65 12.24 65 15C65 15.39 65.045 15.77 65.13 16.135C65.325 16.975 65.73 17.73 66.29 18.35C67.205 19.36 68.53 20 70 20C70.69 20 71.375 19.89 72.5 19.385C72.675 19.305 72.86 19.22 73.06 19.12C73.28 19.01 73.515 18.895 73.75 18.775V15.98C73.33 16.19 72.905 16.4 72.5 16.6C72.31 16.7 72.12 16.79 71.94 16.88ZM70 12.5C70.545 12.5 71.05 12.675 71.46 12.97L67.5 14.95C67.525 13.595 68.635 12.5 70 12.5Z' fill='white'/>
        <path d='M41.28 14.965C41.22 14.965 40.89 14.97 40.515 15.055C40.365 15.09 40.135 15.165 40.01 15.21L39.93 15.235L37.5 16.46V15H35V25H37.5V19.26L40.9 17.55C40.975 17.525 41.055 17.5 41.09 17.49C41.17 17.47 41.255 17.465 41.29 17.465C41.955 17.47 42.5 18.01 42.5 18.675V25H45V18.68C45 16.63 43.33 14.965 41.28 14.965Z' fill='white'/>
        <path d='M42.4999 10L38.7499 11.875V14.675L42.4999 12.8V10Z' fill='white'/>
        <path d='M14.995 19.835C14.91 17.15 12.705 15 10 15C7.36 15 5.2 17.045 5.015 19.635C5.005 19.7 5 19.765 5 19.83V30H7.5V24.33C8.235 24.755 9.09 25 10 25C12.76 25 15 22.76 15 20C15 19.945 15 19.89 14.995 19.835ZM10 22.5C8.62 22.5 7.5 21.38 7.5 20C7.5 19.945 7.505 19.89 7.51 19.835C7.595 18.535 8.68 17.5 10 17.5C11.295 17.5 12.355 18.49 12.485 19.75C12.485 19.78 12.48 19.805 12.48 19.835C12.48 19.905 12.485 19.975 12.5 20.045C12.475 21.4 11.365 22.5 10 22.5Z' fill='white'/>
        <path d='M33.6351 15H30.9751L29.58 18.825L29.555 18.815L28.64 21.315L26.3351 15H23.675L27.3101 24.96L27.14 25.425L27.1201 25.485C26.8851 26.255 26.555 26.915 26.39 27.09C26.155 27.335 25.83 27.5 25.505 27.5H25.455H24V30H25.405H25.505C26.525 30 27.5 29.59 28.215 28.84C28.89 28.14 29.35 26.825 29.53 26.26L31.93 19.68H31.9251L33.6351 15Z' fill='white'/>
        <path d='M16.25 17.35V20.15L21.25 17.65V14.85L16.25 17.35Z' fill='white'/>
        <path d='M21.25 22.5V22.495C20.56 22.495 20 21.935 20 21.25V18.275L21.25 17.65V14.85L20 15.475V10H17.5V16.725L16.25 17.35V20.15L17.5 19.525V21.25C17.5 23.3 19.155 24.97 21.2 25H22.45V22.5H21.25Z' fill='white'/>
      </svg>
    )
  }
}