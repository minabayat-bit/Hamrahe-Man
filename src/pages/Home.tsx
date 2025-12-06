import { useState } from "react";
import s1 from "../assets/img/story1.jpeg";
import s2 from "../assets/img/story2.jpg";
import s3 from "../assets/img/story3.jpg";
import s4 from "../assets/img/story4.jpg";
import s5 from "../assets/img/story5.jpg";
import s6 from "../assets/img/story6.jpg";
import s7 from "../assets/img/story7.jpg";
import sl1 from "../assets/img/s1.jpg";
import sl2 from "../assets/img/s2.jpg";
import sl3 from "../assets/img/s3.jpg";
import sl4 from "../assets/img/s4.jpg";
import sl5 from "../assets/img/s5.jpg";
import sl6 from "../assets/img/s6.jpg";
import Donut from "../components/Donut";
import "../i18next/index";
import { useTranslation } from "react-i18next";

interface SelectedImage {
  img: string;
  label: string;
}

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const { t, i18n } = useTranslation();

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null
  );
  const handleImageClick = (imgSrc: string, label: string) => {
    setSelectedImage({ img: imgSrc, label: label });
  };

  return (
    <div className="bg-gray-100 h-full">
      <div className="flex flex-row items-center p-6 gap-2">
        <div className="flex justify-between px-3 w-full gap-8 border border-gray-100 py-2 bg-white rounded-2xl">
          <div className="flex flex-row items-center">
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
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 12h16"
              ></path>
              <g
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M4 6h16M4 18h16"></path>
              </g>
            </svg>
            <span>number</span>
          </div>
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
              d="M6 9l6 6 3-3"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 9l-1.5 1.5M6 9l4.586 4.586a2 2 0 002.828 0L15 12"
            ></path>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 9l-1.5 1.5"
            ></path>
          </svg>
        </div>
        <button className="p-2 border border-gray-100  bg-white rounded-2xl">
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
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7 5c0 1.105.96 2 2.143 2H12s.143-4-2.857-4C7.959 3 7 3.895 7 5zM17.143 5c0 1.105-.96 2-2.143 2h-2.857S12 3 15 3c1.183 0 2.143.895 2.143 2z"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 12v4.998a4 4 0 01-4 4H7a4 4 0 01-4-4V12m18 0v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1m18 0h-7M3 12h7"
            ></path>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14 21V7zM10 21V7z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button className="p-2 border border-gray-100  bg-white rounded-2xl ">
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
              fill="#B6C2CF"
              d="M5.25 18.884a.725.725 0 01-.534-.215.726.726 0 01-.216-.535c0-.212.072-.39.216-.534a.726.726 0 01.534-.215h1.058V9.923c0-1.345.415-2.534 1.245-3.567a5.517 5.517 0 013.197-1.983V3.75c0-.347.121-.642.364-.885.243-.244.538-.365.885-.365s.642.122.885.365c.244.243.366.538.366.885v.623a5.517 5.517 0 013.197 1.983c.83 1.033 1.245 2.222 1.245 3.567v7.462h1.058c.212 0 .39.072.534.215a.726.726 0 01.216.535c0 .212-.072.39-.216.534a.726.726 0 01-.534.215H5.25zm6.748 2.808c-.497 0-.923-.177-1.276-.53a1.742 1.742 0 01-.53-1.277h3.616c0 .498-.177.924-.532 1.277-.354.354-.78.53-1.278.53zm-4.19-4.307h8.384V9.923c0-1.158-.409-2.146-1.228-2.964C14.146 6.14 13.159 5.73 12 5.73s-2.146.41-2.964 1.228c-.819.818-1.228 1.806-1.228 2.964v7.462z"
            ></path>
          </svg>
        </button>
        <button className="p-2 border border-gray-100  bg-white rounded-2xl">
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
              stroke="#9FADBC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.333 10.889a4.444 4.444 0 01-4.444 4.444M10.889 19.778a8.889 8.889 0 118.889-8.89m-8.89 8.89a8.861 8.861 0 006.31-2.628 8.86 8.86 0 002.58-6.261m-8.89 8.889a8.848 8.848 0 004.74-1.368c.94-.593 2.207-.616 2.99.174L22 22m-2.222-11.111c0 1.73-.495 3.345-1.35 4.711-.583.93-.607 2.18.165 2.96L22 22m0 0l-4.82-4.831"
            ></path>
          </svg>
        </button>
      </div>
      {/* //story */}
      <div className="bg-white rounded-sm m-2 p-2">
        <Swiper
          className="swiper1"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide onClick={() => handleImageClick(s1, t("s1"))}>
            {" "}
            <div className="flex flex-col justify-center items-center text-sm gap-2">
              <img src={s1} />
              <span>{t("s1")}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleImageClick(s2, t("s2"))}>
            <div className="flex flex-col justify-center items-center text-sm gap-2">
              <img src={s2} />
              <span>{t("s2")}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleImageClick(s3, t("s3"))}>
            {" "}
            <div className="flex flex-col justify-center items-center text-sm gap-2">
              <img src={s3} />
              <span>{t("s3")}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleImageClick(s4, t("s4"))}>
            {" "}
            <div className="flex flex-col justify-center items-center text-sm gap-2">
              <img src={s4} />
              <span>{t("s4")}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleImageClick(s5, t("s5"))}>
            {" "}
            <div className="flex flex-col justify-center items-center text-[13px] gap-2">
              <img src={s5} />
              <span>{t("s5")}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleImageClick(s6, t("s6"))}>
            {" "}
            <div className="flex flex-col justify-center items-center text-sm gap-2">
              <img src={s6} />
              <span>{t("s6")}</span>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={() => handleImageClick(s7, t("s7"))}>
            <div className="flex flex-col justify-center items-center text-sm gap-2">
              <img src={s7} />
              <span>{t("s7")}</span>
            </div>
          </SwiperSlide>
        </Swiper>

        {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,

              zIndex: 9999,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage.img}
             
              style={{
                width: "100vh",
                height: "100vh",
              }}
            />
          </div>
        )}
      </div>
      {/* chart */}
      <div className="bg-white p-4 flex flex-row m-2 rounded-sm text-gray-500">
        <div className="flex flex-col items-center">
          <span>{t("conversation")}</span>
          <Donut />
        </div>
        <div className="flex flex-col items-center">
          <span>{t("internet")}</span>
          <Donut />
        </div>
        <div className="flex flex-col items-center">
          <span>{t("sms")}</span>
          <Donut />
        </div>
      </div>
      {/* bill */}
      <div className="bg-white rounded-sm flex flex-row justify-between p-4 m-2 text-sm">
        <div className="flex flex-col gap-2">
          <h3>{t("Interim_Bill")}</h3>
          <span>ریال</span>
        </div>
        <button className="bg-orange-600 py-3 px-4 rounded-sm text-white">
          {t("Details_Pay")}
        </button>
      </div>
      {/* buttons */}
      <div className="bg-white rounded-sm flex flex-row justify-between  p-4 m-2 text-[10px]">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <button className="flex p-2 rounded-2xl border border-gray-300 bg-white">
            <svg
              className="w-8"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              // fit=""
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12.366 13.278l-1.592-1.66a1.01 1.01 0 01-.127-1.235 1.01 1.01 0 00-.088-1.19l-.343-.404c-.494-.58-1.359-.78-1.802-.161-.609.85-.873 2.427 1.592 5.01 2.54 2.661 4.223 2.377 5.142 1.762.603-.403.444-1.23-.119-1.688l-.345-.28a.926.926 0 00-1.117-.038.926.926 0 01-1.201-.116z"
              ></path>
              <path
                stroke="#0095da"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.572 3.349a5 5 0 014.856 0l4 2.222A5 5 0 0121 9.942v4.116a5 5 0 01-2.572 4.37l-4 2.223a5 5 0 01-4.856 0l-4-2.222A5 5 0 013 14.058V9.942a5 5 0 012.572-4.37l4-2.223z"
              ></path>
            </svg>
          </button>
          <span className="">{t("Charging_service")}</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ">
          <button className="flex p-2 rounded-2xl border border-gray-300 bg-white">
            <svg
              className="w-8"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              // fit=""
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
                d="M10.5 9v6L8 13"
              ></path>
              <path
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.5 9v3.503c0 1.006-1.164 1.566-1.95.937L8 13M13.5 15V9l2.5 2"
              ></path>
              <path
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.5 15v-3.503c0-1.006 1.164-1.566 1.95-.937L16 11"
              ></path>
              <path
                stroke="#0095da"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.572 3.349a5 5 0 014.856 0l4 2.222A5 5 0 0121 9.942v4.116a5 5 0 01-2.572 4.37l-4 2.223a5 5 0 01-4.856 0l-4-2.222A5 5 0 013 14.058V9.942a5 5 0 012.572-4.37l4-2.223z"
              ></path>
            </svg>
          </button>
          <span>{t("internet")}</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ">
          <button className="flex p-2 rounded-2xl border border-gray-300 bg-white">
            <svg
              className="w-8"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              // fit=""
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <circle
                cx="7"
                cy="19"
                r="2"
                stroke="#ff4f00"
                stroke-linejoin="round"
                stroke-width="1.5"
                transform="rotate(-90 7 19)"
              ></circle>
              <circle
                cx="15.5"
                cy="2.5"
                r="1.5"
                stroke="#ff4f00"
                stroke-linejoin="round"
                stroke-width="1.5"
                transform="rotate(-90 15.5 2.5)"
              ></circle>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.424 16.094c-.612-.708-.56-1.625.148-2.617.707-.993 2.034-2.01 3.788-2.905 1.753-.894 3.843-1.619 5.965-2.07 2.123-.45 4.168-.603 5.84-.436 1.672.167 2.884.645 3.46 1.365.576.72.486 1.645-.256 2.64-.742.995-2.099 2.01-3.873 2.896-1.635.816-3.546 1.485-5.496 1.925"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.798 13.776c-.466.1-.921.167-1.34.196-.417.029-.79.02-1.097-.027-.307-.046-.541-.13-.69-.244-.148-.116-.208-.26-.176-.426.032-.167.155-.35.363-.543a4.16 4.16 0 01.848-.576 8.751 8.751 0 011.203-.522c.443-.156.91-.288 1.376-.389.466-.1.921-.167 1.34-.196.417-.029.79-.02 1.097.027.307.046.541.13.69.245.148.115.209.26.177.426-.033.166-.156.35-.364.542a4.163 4.163 0 01-.848.576 8.757 8.757 0 01-1.203.522c-.443.156-.91.288-1.376.389h0z"
              ></path>
            </svg>
          </button>
          <span>{t("Suggestion")}</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <button className="flex p-2 rounded-2xl border border-gray-300 bg-white">
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
                d="M15 19.5a2.5 2.5 0 002.5-2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 00-2.5-2.5z"
              ></path>
              <path
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M18.239 18.913a.937.937 0 10-1.326 1.326.937.937 0 001.326-1.326zM5 5a2 2 0 002-2 2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2z"
              ></path>
              <path
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M7.59 4.53a.75.75 0 10-1.06 1.061.75.75 0 001.06-1.06z"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.055 2.93l.578-.455a2.205 2.205 0 012.734 0l.578.455c.41.323.917.49 1.436.474l.732-.023a2.225 2.225 0 012.204 1.62l.211.738c.143.5.454.934.88 1.228l.625.434a2.257 2.257 0 01.837 2.606l-.26.738a2.267 2.267 0 000 1.51l.26.738c.271.766.107 1.602-.393 2.201M3.967 7.401a2.257 2.257 0 00-.837 2.606l.26.738a2.266 2.266 0 010 1.51l-.26.738c-.34.96.004 2.03.837 2.606l.626.434c.425.294.736.728.879 1.228l.21.738a2.225 2.225 0 002.205 1.62l.732-.023a2.208 2.208 0 011.436.474l.578.455c.402.317.884.475 1.367.475M14.5 9.5l-5 5M9.5 14.5l2.938-2.938c.76-.76 2.062-.222 2.062.855v0"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9.5 14.5l2.938-2.938c.76-.76.222-2.062-.855-2.062v0"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.334 9.5H14.5v4.167"
              ></path>
            </svg>
          </button>
          <span>{t("encouragement")}</span>
        </div>
      </div>
      {/* slider */}
      <div className="bg-white p-4 m-2 rounded-sm ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide>
            <img src={sl1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sl2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sl3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sl4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sl5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sl6} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
