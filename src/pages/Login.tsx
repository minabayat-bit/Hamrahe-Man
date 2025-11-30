import logo from "../assets/img/light-logo.svg"






const Login = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#0095da] flex flex-col pt-30">
 
 
  <div className="flex flex-col h-screen bg-white rounded-t-3xl mt-4 p-6 relative">
    <div className="mb-8">
        <img className="absolute -top-8 left-40" src={logo} alt="" />
        <p className="text-sm text-gray-800">ورود | ثبت‌ نام </p>
         <h2 className="text-sm text-gray-500 mb-2">سلام، لطفا شماره تلفن همراه خود را وارد کنید.</h2>
   
    </div>

   
    <div className="mb-6 flex flex-col gap-100">
      <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:bg-[#0095da] focus-within:ring-2 focus-within:ring-blue-200">
        <span className="text-gray-600 ml-2">+98</span>
        <input
          type="tel"
          placeholder="شماره تلفن همراه"
          className="flex-1 outline-none text-right placeholder:text-gray-400"
        />
        
      </div>
       <button className="w-full bg-[#0095da] text-white py-3 rounded-lg font-medium hover:bg-[#0095da] transition-colors">
      تایید و دریافت کد
    </button>
    </div>

   
   

   
  </div>
</div>

    </div>
  )
}

export default Login
