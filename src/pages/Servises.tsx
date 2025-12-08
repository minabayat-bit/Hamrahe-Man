import React from 'react'

const Servises = () => {
  return (
    <div className='h-full bg-gray-200'>
      <div className="bg-white flex flex-row justify-between p-4  rounded-sm">
          <h2 className="text-[20px] font-medium">  خدمات </h2>
          
        </div>
        <div className='bg-white *:py-1 *:border  *:border-gray-300 flex flex-row gap-4 *:px-6 *:text-gray-600 *:rounded-2xl'>
            <button>خدمات پرکاربرد</button>
            <button>خدمات سیم‌کارت</button>
            <button>خدمات مکالمه</button>
            <button>خدمات پیامک</button>
            <button>خدمات دیجیتال</button>
            <button>سایر خدمات</button>
        </div>
    </div>
  )
}

export default Servises
