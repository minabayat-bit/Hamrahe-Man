import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Invoice from "../pages/Invoice";

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
        conversation: "مکالمه",
        internet: "اینترنت",
        sms: "پیامک",
        s1: "آوای انتظار",
        s2: "اعتبار همراهی",
        s3: "قرعه کشی",
        s4: "اینترنت",
        s5: "باشگاه مشتریان",
        s6: "صورت حساب",
        s7: "خدمت در محل",
        Interim_Bill: "صورت حساب میان‌دوره:",
        Details_Pay: " جزییات و پرداخت ",
        encouragement: "تشویقی",
        Suggestion: "پیشنهادی",
        Charging_service: "خدمات شارژ",
        my_invoice: "صورت حساب من",
        debt_installment: "تسقیط بدهی",
        increase_indebtedness: " افزایش بستانکاری ",
        mid_course:"میان‌دوره",
        end_course:"پایان‌دوره",
        change_phone:"تغییر شماره همراه",


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
        conversation: "conversation",
        internet: "internet",
        sms: "sms",
        s1: "Call Waiting Tone",
        s2: "Companion Credit",
        s3: "Lottery",
        s4: "Internet",
        s5: "Customer Club",
        s6: "Bill",
        s7: "On-site Service",
        Interim_Bill: "Interim Bill Statement",
        Details_Pay: "View Details & Pay",
        encouragement: "encouragement",
        Suggestion: "Suggestion",
        Charging_service: " Charging service",
        my_invoice: "My Invoice",
        debt_installment: "debt-installment",
        increase_indebtedness: "increase indebtedness",
        mid_course:"mid course",
        end_course:"end course",
        change_phone:"Change Phone Number",
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
