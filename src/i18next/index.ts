import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    fa: {
      translation: {
        login_register: "ورود | ثبت‌ نام",
        welcome: ".سلام، لطفا شماره تلفن همراه خود را وارد کنید",
        phone_placeholder: "شماره تلفن همراه",
        confirm_button: "تایید و دریافت کد",
        phone: "تلفن همراه",
        enter_code: "کد تائید را وارد کنید",
        sent_code: "کد 5 رقمی به شماره ارسال شد",
        confirm_code_button: "تائید و ادامه",
      },
    },
    en: {
      translation: {
        login_register: "Login | Register",
        welcome: "Hello, please enter your mobile number.",
        phone_placeholder: "Mobile number",
        confirm_button: "Confirm and get code",
        phone: "Phone Number",
        enter_code: "Please enter the code",
        sent_code: "Code sent to the number",
        confirm_code_button: "confirm",
      },
    },
  },
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
