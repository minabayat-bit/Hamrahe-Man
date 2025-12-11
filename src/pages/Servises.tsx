import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import png1 from "../assets/img/bservice1.jpg";
import png2 from "../assets/img/bservice2.jpg";
import png3 from "../assets/img/bservice3.jpg";
import png4 from "../assets/img/bservice4.jpg";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Servises = () => {
  return (
    <div className="h-full bg-gray-200 ">
      <div className="bg-white flex flex-row justify-between p-4  rounded-sm">
        <h2 className="text-[20px] font-medium"> خدمات </h2>
      </div>

      <Swiper
        className="bg-white "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        //   navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="bg-white py-2   border  border-gray-300 flex flex-row gap-4  text-gray-600 rounded-2xl">
          خدمات پرکاربرد
        </SwiperSlide>
        <SwiperSlide className="bg-white py-1   border  border-gray-300 flex flex-row gap-4  text-gray-600 rounded-2xl">
          خدمات سیم‌کارت
        </SwiperSlide>
        <SwiperSlide className="bg-white py-2   border  border-gray-300 flex flex-row gap-4  text-gray-600 rounded-2xl">
          خدمات مکالمه
        </SwiperSlide>
        <SwiperSlide className="bg-white py-2   border  border-gray-300 flex flex-row gap-4  text-gray-600 rounded-2xl">
          خدمات پیامک
        </SwiperSlide>
        <SwiperSlide className="bg-white py-2   border  border-gray-300 flex flex-row gap-4  text-gray-600 rounded-2xl">
          خدمات دیجیتال
        </SwiperSlide>
        <SwiperSlide className="bg-white py-2   border  border-gray-300 flex flex-row gap-4  text-gray-600 rounded-2xl">
          سایر خدمات
        </SwiperSlide>
      </Swiper>


      <h2 className="p-6 text-2xl font-semibold flex flex-row items-center gap-2"> <div className="w-3 h-3 bg-blue-400 rounded-full"></div>خدمات پرکاربرد</h2>


      
        <div className="flex flex-col  p-4 gap-2  pb-24">
        
        <div className="bg-white p-4 grid grid-cols-4 gap-4 rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg className="w-8"
                fill="none"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <g
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path
                    stroke="#0095da"
                    d="M5.667 21h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2zM16.667 21h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2zM3.667 8V5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2z"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    d="M14.667 9.176V6.5a3.5 3.5 0 113.5 3.5H15.49a.824.824 0 01-.823-.824z"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    d="M19.167 6.5a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">خدمت در محل</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg className="w-8"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.5 11h-.202c-.82 0-1.596-.373-2.11-1.014l-2.377-2.972A2.702 2.702 0 008.701 6H8.5A2.5 2.5 0 006 8.5v0A2.5 2.5 0 008.5 11h.202c.82 0 1.596-.373 2.11-1.014l2.377-2.972A2.701 2.701 0 0115.299 6h.201A2.5 2.5 0 0118 8.5v0a2.5 2.5 0 01-2.5 2.5z"
                ></path>
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M16.5 21h.5a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h.5M9 17.068L12 14m0 0l3 3.068M12 14v6"></path>
                  <path d="M15 17l-.78-.78c-.82-.82-2.22-.24-2.22.919V18.5M9 17l.78-.78c.82-.82 2.22-.24 2.22.919V21"></path>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">تبدیل به دائمی</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.5 2.5H7a3 3 0 00-3 3v11a3 3 0 003 3h3m-1.5-17L9 3h2l.5-.5m-3 0h3m0 0H13a3 3 0 013 3V9"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 15h1.5m2.3 0h.2M13 18h1.5m2.3 0h.2M13 12h1.5m2.3 0h.2"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M16.585 21.5v.75a.75.75 0 00.707-.5l-.707-.25zm-.172 0l-.706.252a.75.75 0 00.706.498v-.75zm2.787-.4l-.6.45a.75.75 0 001.05.15l-.45-.6zm-8.4 0l-.45.6a.75.75 0 001.05-.15l-.6-.45zm2.615.4l-.707.25c.105.3.389.5.707.5v-.75zm.172 0v.75c.317 0 .6-.2.706-.498l-.706-.252zm2.998-.75h-.172v1.5h.172v-1.5zm.707 1a.75.75 0 01.708-.5v-1.5a2.25 2.25 0 00-2.122 1.5l1.415.5zm.708-.5c.245 0 .462.116.6.3l1.2-.9a2.248 2.248 0 00-1.8-.9v1.5zm1.25-1.75c0 .408-.195.771-.5 1l.9 1.2c.667-.5 1.1-1.3 1.1-2.2h-1.5zm0-8.5v8.5h1.5V11h-1.5zM18 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0018 8.25v1.5zm-6 0h6v-1.5h-6v1.5zM10.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 009.25 11h1.5zm0 8.5V11h-1.5v8.5h1.5zm.5 1c-.305-.229-.5-.592-.5-1h-1.5c0 .9.433 1.7 1.1 2.2l.9-1.2zm.75-.75c-.737 0-1.39.355-1.8.9l1.2.9a.748.748 0 01.6-.3v-1.5zm2.122 1.5A2.25 2.25 0 0012 19.75v1.5a.75.75 0 01.707.5l1.415-.5zm-.535-.5h-.172v1.5h.172v-1.5zm.706 1.002a.75.75 0 01.707-.498v-1.5a2.25 2.25 0 00-2.12 1.494l1.413.504zm.707-.498a.75.75 0 01.707.498l1.413-.504A2.25 2.25 0 0015 19.754v1.5z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">
              خلاصه کارکرد
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M26 17.333v-6.666m3.333 5v-3.334m-6.666 3.334v-3.334"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.793 23.398L8.98 18.377a2 2 0 01-.161-2.578l1-1.345a2 2 0 00-.082-2.49L7.32 9.123c-.57-.668-1.516-.885-2.208-.344-2.107 1.65-5.378 6.072 2.903 14.748 8.203 8.593 13.048 5.672 14.992 3.614.658-.698.454-1.751-.29-2.356l-2.51-2.035a2 2 0 00-2.403-.089l-1.424.993a2 2 0 01-2.587-.258z"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.333 12A4.666 4.666 0 1124 7.333m-6.047.953l1.38-.952V5.632"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">آوای انتظار</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.333 2.667h-2a4 4 0 00-4 4v16a4 4 0 004 4H10m1.333-24l.667.666h2.667l.666-.667m-4 0h4m0 0h2a4 4 0 014 4V18"
                ></path>
                <path
                  fill="#ff4f00"
                  fillRule="evenodd"
                  d="M12.7 20a.7.7 0 00-.7.7v5.6a.7.7 0 00.7.7h2.8a.7.7 0 100-1.4h-2.1v-4.9a.7.7 0 00-.7-.7zm7 1.4H19v4.9a.7.7 0 11-1.4 0v-4.9h-.7a.7.7 0 110-1.4h2.8a.7.7 0 110 1.4zm3.5 0h2.1a.7.7 0 100-1.4h-2.8a.7.7 0 00-.7.7v5.6a.7.7 0 00.7.7h2.8a.7.7 0 100-1.4h-2.1v-1.4h2.1a.7.7 0 100-1.4h-2.1v-1.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">VoLTE/ViLTE</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  fill="#0095da"
                  d="M20.29 4.482a.75.75 0 10-1.064 1.058 9.75 9.75 0 010 13.792.75.75 0 001.065 1.058 11.25 11.25 0 000-15.908zM2.584 12.44a9.75 9.75 0 012.858-6.893.753.753 0 10-1.065-1.065 11.25 11.25 0 000 15.908.75.75 0 001.065-1.058 9.75 9.75 0 01-2.858-6.892z"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M17.628 7.137a.75.75 0 10-1.057 1.065 6 6 0 010 8.475.75.75 0 001.057 1.065 7.5 7.5 0 000-10.605zm-9.532 0a.75.75 0 00-1.058 0 7.5 7.5 0 000 10.605.75.75 0 001.058-1.065 6 6 0 010-8.475.75.75 0 000-1.065zm6.615 4.62L10.96 9.59a.75.75 0 00-1.125.652v4.328a.75.75 0 001.125.652l3.75-2.167a.75.75 0 000-1.298zm-3.375 1.5V11.54l1.5.862-1.5.855z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">سینما همراه</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  d="M3 17c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5.036 5.036 0 0012.93 2H8C5 2 3 4 3 7v5.98"
                  stroke="#0095DA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3zM12 9.5v9M7.5 14h9"
                  stroke="#FF4F00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">قبض دیگران</p>
          </div>
        </div>


      </div>


      <div className="px-6 flex flex-row gap-3 rounded-md">
        <img className="w-22" src={png1} />
        <img className="w-22" src={png2} />
        <img className="w-22" src={png3} />
        <img className="w-22" src={png4} />

      </div>


      </div>
    
  );
};

export default Servises;
