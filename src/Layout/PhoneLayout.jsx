import React from 'react'

const PhoneLayout = ({children}) => {

  return (
    <div className='p-0 sm:p-[60px]'>
        <div className="mobile-container grow w-full h-screen max-w-full rounded-none shadow-none sm:w-[675px] sm:h-[760px] sm:max-w-[675px] relative overflow-hidden flex flex-col items-center justify-center">
            {children}
        </div>
    </div>
  )
}

export default PhoneLayout