import React from 'react'

const PhoneLayout = ({children}) => {

  return (
    <div className='p-0 md:p-[60px] flex justify-center md:items-center'>
      <div className="mobile-container grow w-full min-h-screen max-w-full rounded-none shadow-none sm:w-[675px] sm:h-[760px] sm:max-w-[675px] relative overflow-hidden flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}

export default PhoneLayout