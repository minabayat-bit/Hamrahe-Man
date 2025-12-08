import React from 'react'
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const Packages = () => {

const { t, i18n } = useTranslation();


  return (
    <div className='bg-gray-200 h-full'>
       <div className="flex flex-col">
        <div className="bg-white flex flex-row justify-between p-4  rounded-sm">
          <h2 className="text-[20px] font-medium"> بسته‌های من </h2>
          <svg
            className="w-10"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <circle cx="12" cy="20" r="2" fill="#0095da"></circle>
            <circle cx="12" cy="12" r="2" fill="#ff4f00"></circle>
            <circle cx="12" cy="4" r="2" fill="#0095da"></circle>
          </svg>
        </div>
        <div className="flex flex-row justify-center p-4 bg-white pt-8 gap-6 mt-10 m-4 rounded-2xl">
            <svg className='w-8' fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs></defs><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24.5 21v14l-5.834-4.667"></path><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24.5 21v11.503c0 1.007-1.165 1.566-1.95.937l-3.884-3.107M31.499 35V21l5.833 4.667"></path><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.499 35V23.497c0-1.006 1.164-1.566 1.95-.937l3.883 3.107"></path><path stroke="#0095da" stroke-linejoin="round" stroke-width="2" d="M25.572 6.016a5 5 0 014.856 0l16 8.889A5 5 0 0149 19.275v17.45a5 5 0 01-2.572 4.37l-16 8.89a5 5 0 01-4.856 0l-16-8.89A5 5 0 017 36.726v-17.45a5 5 0 012.572-4.37l16-8.89z"></path></svg>
          <button
            
            className=" hover:text-orange-600 cursor-pointer text-gray-700"
          >
            {t("internet")}
          </button>
          <svg className='w-8' fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs></defs><path stroke="#ff4f00" stroke-linejoin="round" stroke-width="2" d="M28.947 31.082l-4.001-4.175a2 2 0 01-.252-2.445l.286-.457a2 2 0 00-.173-2.358l-1.95-2.288c-.57-.669-1.518-.888-2.194-.327-1.84 1.527-4.378 5.39 2.683 12.788 6.982 7.315 11.184 5.095 12.973 3.311.68-.677.475-1.735-.27-2.34l-1.881-1.526a2 2 0 00-2.413-.082l-.211.15a2 2 0 01-2.597-.251z"></path><path stroke="#0095da" stroke-linejoin="round" stroke-width="2" d="M25.572 6.016a5 5 0 014.856 0l16 8.889A5 5 0 0149 19.275v17.45a5 5 0 01-2.572 4.37l-16 8.89a5 5 0 01-4.856 0l-16-8.89A5 5 0 017 36.725v-17.45a5 5 0 012.572-4.37l16-8.89z"></path></svg>
          <button
            
            className=" hover:text-orange-600 cursor-pointer text-gray-700"
          >
            {t("conversation")}
          </button>
          <svg className='w-8' fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs></defs><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.833 21.704a2 2 0 012-2h13.5a2 2 0 012 2V33.11a2 2 0 01-2 2h-11.75c-.166 0-.332.02-.493.062l-4.424 1.123 1.109-4.505a2 2 0 00.058-.478v-9.61z"></path><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.833 21.704a2 2 0 012-2h13.5a2 2 0 012 2V33.11a2 2 0 01-2 2h-11.75c-.166 0-.332.02-.493.062l-2.808.713a1 1 0 01-1.218-1.208l.71-2.887a2 2 0 00.059-.478v-9.61z"></path><path stroke="#0095da" stroke-linejoin="round" stroke-width="2" d="M25.572 6.016a5 5 0 014.856 0l16 8.889A5 5 0 0149 19.275v17.45a5 5 0 01-2.572 4.37l-16 8.89a5 5 0 01-4.856 0l-16-8.89A5 5 0 017 36.725v-17.45a5 5 0 012.572-4.37l16-8.89z"></path></svg>
          <button
            
            className=" hover:text-orange-600 cursor-pointer text-gray-700"
          >
            {t("sms")}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center py-30 px-4 bg-white pt-8 gap-6 mt-10 m-4 rounded-2xl">
            <svg className='w-20' fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs></defs><path stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.334 50.667h-2.667a5.333 5.333 0 01-5.333-5.334v-2.666m16 8H24M42.667 24v-2.667m0-6.666v-1.334A5.333 5.333 0 0037.333 8h-2.666M5.334 22.667v12M20 8h6.667-1.778a5.333 5.333 0 00-5.333 5.333v3.734a5.333 5.333 0 01-5.334 5.333h-3.555a5.333 5.333 0 00-5.333 5.333V32m8.889-9.604h-8.89l14.223-14.4v9.067m-5.334 5.333a5.333 5.333 0 005.334-5.333m-5.334 5.333h-2.507c-2.367 0-3.56-2.856-1.897-4.54l5.174-5.24c1.675-1.695 4.564-.509 4.564 1.875v2.572M55.704 43.852C55.704 37.306 50.398 32 43.852 32S32 37.306 32 43.852s5.306 11.852 11.852 11.852c3.29 0 6.265-1.34 8.413-3.503a11.815 11.815 0 003.44-8.349zm0 0c0 1.648-.336 3.22-.944 4.646-.976 2.289-1.084 5.13.666 6.899l3.241 3.272m-14.815-2.957c1.652 0 3.225-.338 4.654-.949 2.316-.99 5.203-1.095 6.976.695l3.185 3.217m0-.008l-5.334-5.334"></path></svg>
       
       <h2>بسته‌ فعالی ندارید.</h2>
        </div>
        <button className='w-full bg-orange-600 text-white text-2xl rounded-[20px] p-4'>خرید بسته جدید</button>
      </div>
      <Footer />
    </div>
  )
}

export default Packages
