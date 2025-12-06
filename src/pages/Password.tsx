import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/img/light-logo.svg";
import { useNavigate } from "react-router";

function Password() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleConfirm = () => {
    const isComplete = code.every((digit) => digit !== "");
    if (isComplete) {
      navigate("/Home");
    } else {
      alert("لطفا کد را وارد کنید");
    }
  };

  return (
    <div dir={i18n.language === "fa" ? "rtl" : "ltr"}>
      <div className="min-h-screen bg-[#0095da] flex flex-col pt-30">
        <div className="flex flex-col h-screen bg-white rounded-t-3xl mt-4 p-6 relative">
          <div className="mb-8">
            <img className="absolute -top-8 left-40" src={logo} alt="" />
            <p className="text-sm text-gray-800">{t("enter_code")}</p>
            <h2 className="text-sm text-gray-500 mb-2">{t("sent_code")}</h2>
          </div>

          <div className="mb-6 flex flex-col gap-100">
            <div dir="ltr" className="flex gap-3 mb-8 ">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { if (el) inputsRef.current[index] = el;}}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                />
              ))}
            </div>

            <button
              onClick={handleConfirm}
              className="w-full bg-[#0095da] text-white py-3 rounded-lg font-medium hover:bg-[#0095da] transition-colors"
            >
              {t("confirm_code_button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
