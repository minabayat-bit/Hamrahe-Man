import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import { useState } from "react";

const Invoice = () => {
  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState<"invoice" | "debt" | "credit">(
    "invoice"
  );

  return (
    <div className="bg-gray-200 h-full">
      <div className="flex flex-col">
        <div className="bg-white flex flex-row justify-between p-4  rounded-sm">
          <h2 className="text-[20px] font-medium">{t("my_invoice")}</h2>
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
        <div className="flex flex-row justify-center p-4 bg-white pt-8 gap-6">
          <button
            onClick={() => setActiveTab("invoice")}
            className=" hover:text-orange-600 cursor-pointer text-gray-700"
          >
            {t("my_invoice")}
          </button>
          <button
            onClick={() => setActiveTab("debt")}
            className=" hover:text-orange-600 cursor-pointer text-gray-700"
          >
            {t("debt_installment")}
          </button>
          <button
            onClick={() => setActiveTab("credit")}
            className=" hover:text-orange-600 cursor-pointer text-gray-700"
          >
            {t("increase_indebtedness")}
          </button>
        </div>
      </div>
      {/* invoce */}
      {activeTab === 'invoice' && (
      <div>
      
        <div className="flex flex-row gap-6 bg-white p-4 m-4 rounded-2xl">
          <div className="flex flex-row gap-2 px-6 focus:bg-blue-300">
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
                d="M7.5 13h5m-5-3h9"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 9v7a4 4 0 004 4h8a4 4 0 004-4V9a4 4 0 00-4-4H8a4 4 0 00-4 4zm0 0c0-1.413 1.055-3.014 2.545-3.682C7.301 4.98 8 4.328 8 3.5m-4 5c0-1.269 1.05-2.647 2.534-3.223C7.307 4.977 8 5.672 8 6.5m0 0V7 3v.5m0 3A1.5 1.5 0 019.5 5M8 3.5A1.5 1.5 0 009.5 5M16 6.5c0-.828.693-1.522 1.466-1.223C18.95 5.853 20 7.231 20 8.5c0-1.408-1.048-2.71-2.53-3.244C16.692 4.975 16 4.328 16 3.5m0 3V7 3v.5m0 3A1.5 1.5 0 0014.5 5M16 3.5A1.5 1.5 0 0114.5 5m0 0h-5m-2 11h1m3 0h1m3-3h1"
              ></path>
            </svg>
            <span> {t("mid_course")} </span>
          </div>
          <div className="flex flex-row gap-2 px-6">
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
                d="M7.5 13h5m-5-3h9"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 9v7a4 4 0 004 4h8a4 4 0 004-4V9a4 4 0 00-4-4H8a4 4 0 00-4 4zm0 0c0-1.413 1.055-3.014 2.545-3.682C7.301 4.98 8 4.328 8 3.5m-4 5c0-1.269 1.05-2.647 2.534-3.223C7.307 4.977 8 5.672 8 6.5m0 0V7 3v.5m0 3A1.5 1.5 0 019.5 5M8 3.5A1.5 1.5 0 009.5 5M16 6.5c0-.828.693-1.522 1.466-1.223C18.95 5.853 20 7.231 20 8.5c0-1.408-1.048-2.71-2.53-3.244C16.692 4.975 16 4.328 16 3.5m0 3V7 3v.5m0 3A1.5 1.5 0 0014.5 5M16 3.5A1.5 1.5 0 0114.5 5m0 0h-5m-2 11h1m3 0h1m3-3h1"
              ></path>
            </svg>
            <span> {t("end_course")} </span>
          </div>
        </div>
      
      <div className="flex flex-col gap-6 bg-white p-4 m-4 rounded-2xl font-medium text-gray-700 text-[18px]">
        <h2>
          {t("phone")} <span className="text-red-500">*</span>
        </h2>
        <div className="relative">
          <input
            className="border border-gray-300 p-3 w-full rounded-md"
            type="number"
            placeholder="number"
          />
          <button className="absolute top-3 left-2 text-blue-500">
            {t("change_phone")}
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-6 bg-white p-4 m-4 rounded-2xl ">
        <div className="flex flex-col gap-4 w-full text-[18px] text-gray-600">
          <h2>شماره همراه</h2>
          <h2>مبلغ قابل پرداخت</h2>
          <h2>بدهی پیشین</h2>
          <h2>صورت‌حساب دوره</h2>
        </div>
        <div dir="ltr" className="flex flex-col gap2 w-full">
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
        </div>
      </div>
      <button className='w-full bg-orange-600 text-white text-[20px] rounded-[20px] p-4'>پرداخت صورت حساب</button>
      </div> )}
      {/* debt */}
      {activeTab === "debt" && (
        <div>
          <div className="flex flex-row justify-between p-3 bg-white text-orange-600 m-4 rounded-2xl">
            <h2 className="font-bold">توضیحات و مقررات</h2>
            <button className="border border-orange-600 px-5 py-2 rounded-2xl font-medium text-[18px]">
              مشاهده
            </button>
          </div>
          <div className="p-4 bg-white m-4 rounded-2xl text-[20px] font-medium">
            <p>
              مشترک گرامی، انجام تقسیط به دلیل نداشتن شرایط لازم امکانپذیر نمی
              باشد. لطفا قوانین مربوط به تقسیط را مطالعه فرمایید. درصورتی که طی
              دقایق گذشته نسبت به تقسیط بدهی خود اقدام نموده اید، نمایش اقساط
              ممکن است بین ۱۰ تا ۳۰ دقیقه به طول بیانجامد. لذا در صورت انجام
              تقسیط و عدم مشاهده اقساط، در دقایق آتی به این صفحه مراجعه نمایید.
            </p>
          </div>
        </div>
      )}
      {/* increase */}

      {activeTab === "credit" && (
        <div className="flex flex-col gap-6 bg-white p-4 m-4 rounded-2xl">
          <div className="flex flex-row justify-between p-3 bg-white text-orange-600 m-4 rounded-2xl">
            <h2 className="font-bold">توضیحات و مقررات</h2>
            <button className="border border-orange-600 px-5 py-2 rounded-2xl font-medium text-[18px]">
              مشاهده
            </button>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">انتخاب مبلغ بستانکاری</h2>
            <div className="h-[1.2px] bg-gray-300 w-full mt-4"></div>
            <h2 className="text-gray-600 text-[20px]"> مبلغ بستانکاری (ریال) </h2>
          </div>
          <div className="*:px-4 *:py-2 *:bg-gray-300 flex flex-wrap gap-2 *:text-gray-600 *:rounded-2xl">
          <button>500000</button>
          <button>1000000</button>
          <button>1500000</button>
          <button>200000</button>
          <button>2500000</button>
          <button>5000000</button>
          <button>مبلغ دلخواه</button>
          </div>
          
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Invoice;
