import React from 'react'
import { useNavigate } from 'react-router';

const Footer = () => {

    const navigate = useNavigate();

  return (
    <div>
      <footer className="bg-white p-4 py-8 rounded-t-md flex flex-row gap-6 justify-center">
        <div className='flex flex-col justify-center items-center text-4 text-gray-500 gap-2'>
        <button onClick={() => navigate("/Home")} className="flex p-2 rounded-2xl border border-gray-300 bg-white">
          <svg
            className="w-8"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#0095da"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20 20v-8.32a4 4 0 00-1.71-3.279l-4.008-2.8a4 4 0 00-4.585.004L5.705 8.4A4 4 0 004 11.677V20"
            ></path>
            <path
              stroke="#0095da"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20 20v-9.362a2 2 0 00-.855-1.64l-6.01-4.197a2 2 0 00-2.292.001l-5.99 4.196A2 2 0 004 10.636V20"
            ></path>
            <path
              stroke="#ff4f00"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9.5 20v-4a2 2 0 012-2h1a2 2 0 012 2v4"
            ></path>
          </svg>
        </button>
        <span>خانه</span>
        </div>
        <div className='flex flex-col justify-center items-center text-4 text-gray-500 gap-2'>
        <button
          onClick={() => navigate("/Invoice")}
          className="flex p-2 rounded-2xl border border-gray-300 bg-white"
        >
          <svg
            className="w-8"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              fill="#0095da"
              d="M4.975 3.55l.714-.232a.75.75 0 00-1.094-.415l.38.646zm14.05 0l.38-.647a.75.75 0 00-1.094.415l.713.231zM15.554 3h.75a.75.75 0 00-.75-.75V3zm-1.777 0v-.75a.75.75 0 00-.75.75h.75zm-3.556 0h.75a.75.75 0 00-.75-.75V3zM8.444 3v-.75a.75.75 0 00-.75.75h.75zM3.75 7c0-1.194.643-2.238 1.606-2.804l-.76-1.293A4.748 4.748 0 002.25 7h1.5zm0 10V7h-1.5v10h1.5zM7 20.25A3.25 3.25 0 013.75 17h-1.5A4.75 4.75 0 007 21.75v-1.5zm10 0H7v1.5h10v-1.5zM20.25 17A3.25 3.25 0 0117 20.25v1.5A4.75 4.75 0 0021.75 17h-1.5zm0-10v10h1.5V7h-1.5zm-1.606-2.804A3.248 3.248 0 0120.25 7h1.5a4.748 4.748 0 00-2.345-4.097l-.76 1.293zm-1.31 1.332a2.529 2.529 0 002.404-1.747l-1.427-.463c-.134.413-.522.71-.978.71v1.5zM14.805 3a2.528 2.528 0 002.527 2.528v-1.5c-.567 0-1.027-.46-1.027-1.028h-1.5zm-1.028.75h1.777v-1.5h-1.777v1.5zm-.75-.75c0 .568-.46 1.028-1.028 1.028v1.5A2.528 2.528 0 0014.528 3h-1.5zM12 4.028c-.568 0-1.028-.46-1.028-1.028h-1.5A2.528 2.528 0 0012 5.528v-1.5zM8.444 3.75h1.778v-1.5H8.444v1.5zM7.694 3c0 .568-.46 1.028-1.027 1.028v1.5A2.528 2.528 0 009.194 3h-1.5zM6.667 4.028c-.456 0-.844-.297-.978-.71l-1.427.463a2.529 2.529 0 002.405 1.747v-1.5z"
            ></path>
            <path
              stroke="#ff4f00"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16 11h-4.8m-2.8 0H8M16 15h-4.8m-2.8 0H8"
            ></path>
          </svg>
        </button>
        <span>صورت‌حساب</span>
        </div>
        <div className='flex flex-col justify-center items-center text-4 text-gray-500 gap-2'>
        <button onClick={() => navigate("/Packages")} className="flex p-2 rounded-2xl border border-gray-300 bg-white">
         <svg className='w-8' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs></defs><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v-.818a3 3 0 011.436-2.56l.564-.344 1-.611.5-.306"></path><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 10.361l-.5.306-1 .61-.436.267a3 3 0 01-3.128 0L10 11.278l-1-.611-.5-.306"></path><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5v-1.318a3 3 0 00-1.436-2.56L10 11.279l-.5-.306-.5-.305"></path><path stroke="#0095da" stroke-linejoin="round" stroke-width="1.5" d="M9.572 3.349a5 5 0 014.856 0l4 2.222A5 5 0 0121 9.942v4.116a5 5 0 01-2.572 4.37l-4 2.223a5 5 0 01-4.856 0l-4-2.222A5 5 0 013 14.058V9.942a5 5 0 012.572-4.37l4-2.223z"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12V9.637a1.479 1.479 0 00-2.25-1.262v0l-1.125.688"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 4.5l2.195 1.22a1.537 1.537 0 01.055 2.655v0l-1.125.688"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 4.5l2.25 1.25a1.5 1.5 0 01.055 2.592l-.055.033-1.125.688M3 12V9.637a1.479 1.479 0 012.25-1.262v0l1.125.688"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 4.5L5.25 5.75a1.5 1.5 0 00-.055 2.592l.055.033 1.125.688"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 4.5L5.25 5.75a1.5 1.5 0 00-.055 2.592l.055.033 1.125.688M12 18v1.45a1.5 1.5 0 01-2.228 1.312L7.5 19.5"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v1.45a1.5 1.5 0 002.229 1.312L16.5 19.5"></path></svg>
        </button>
        <span>بسته ها</span>
        </div>
        <div className='flex flex-col justify-center items-center text-4 text-gray-500 gap-2'>
        <button onClick={() => navigate("/Servises")} className="flex p-2 rounded-2xl border border-gray-300 bg-white">
          <svg
            className="w-8"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#ff4f00"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16.31 6.872c-.723.307-1.341.483-1.756.501-.416.019-.606-.122-.542-.4.065-.278.38-.678.898-1.137.518-.46 1.21-.954 1.967-1.405.757-.452 1.539-.836 2.224-1.093.684-.257 1.234-.372 1.563-.33.33.044.42.244.258.57-.163.326-.568.76-1.155 1.234"
            ></path>
            <path
              stroke="#0095da"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.7 7.375c.47.02.834.097 1.056.225.222.129.294.304.21.508-.085.204-.323.43-.692.657a7.228 7.228 0 01-1.413.637c-.558.19-1.167.346-1.768.45a9.02 9.02 0 01-1.66.147c-.489-.008-.876-.076-1.124-.195-.249-.12-.35-.287-.294-.486M5 21h3a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2zM16 21h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2zM3 8V5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            ></path>
          </svg>
        </button>
        <span>خدمات</span>
        </div>
        <div className='flex flex-col justify-center items-center text-4 text-gray-500 gap-2'>
        <button className="flex p-2 rounded-2xl border border-gray-300 bg-white">
         <svg className='w-8' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs></defs><path stroke="#ff4f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6.038v-.126c0-1.527-1.147-2.804-2.672-2.867-2.866-.12-7.494-.075-11.137 1.082C3.794 4.571 3 5.953 3 7.417V10.5"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.989 6.058c-4.772-.054-8.996-.102-12.773 1.2C3.812 7.74 3 9.141 3 10.626v6.372a4 4 0 004 4h11a3 3 0 003-3V9.081a3.032 3.032 0 00-3-3.023h-.011z"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 11l-3.53.706A1.83 1.83 0 0016 13.5v0a1.83 1.83 0 001.47 1.794L21 16"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.608 11.478l-1.137.228a1.83 1.83 0 000 3.588l1.137.228A2 2 0 0021 13.56v-.12a2 2 0 00-2.392-1.962z"></path><path stroke="#0095da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 18v-.36a2 2 0 00-1.608-1.962l-1.921-.384A1.83 1.83 0 0116 13.5v0a1.83 1.83 0 011.47-1.794l1.922-.384A2 2 0 0021 9.36V9"></path></svg>
        </button>
        <span>کیف پول</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
