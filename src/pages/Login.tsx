import "../i18next/index";
import logo from "../assets/img/light-logo.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";



const Login = () => {
    
const navigate = useNavigate();
  

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="min-h-screen bg-[#0095da] flex flex-col pt-30">
        <div className="flex flex-col h-screen bg-white rounded-t-3xl mt-4 p-6 relative">
          <div className="mb-8">
            <img className="absolute -top-8 left-40" src={logo} alt="" />
            <p className="text-sm text-gray-800">{t("login_register")}</p>
            <h2 className="text-sm text-gray-500 mb-2">{t("welcome")}</h2>
          </div>

          <div className="mb-6 flex flex-col gap-100">
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:bg-[#0095da] focus-within:ring-2 focus-within:ring-blue-200">
              <span className="text-gray-600 ml-2">+98</span>
              <input
                type="tel"
                placeholder={t("phone")}
                className="flex-1 outline-none text-right placeholder:text-gray-400"
              />
            </div>
            <button onClick={() => navigate("/Password")} className="w-full bg-[#0095da] text-white py-3 rounded-lg font-medium hover:bg-[#0095da] transition-colors">
              {t("confirm_button")}
            </button>
          </div>

          <div className="flex flex-row gap-5 p-8">
            <button
              onClick={() => i18n.changeLanguage("fa")}
              className=" bg-[#0095da] p-4"
            >
              فارسی
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className=" bg-[#0095da] p-4"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
