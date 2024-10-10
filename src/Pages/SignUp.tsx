import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [isHide, setHide] = useState(true);
  let navigate = useNavigate();

  return (
    <main className="flex flex-col items-center">
      <img src="/sgnup.png" alt="" className="w-[200px] h-[188px] mt-6" />
      <h1 className="text-[25px] text-[#101010] leading-[29px] font-[700] mt-5">
        Create your account
      </h1>
      <section className="flex flex-col gap-4 mt-[46px]">
        <label
          htmlFor="email"
          className="w-[343px] flex flex-col p-[10px] rounded-[10px] bg-input"
        >
          <span className="text-sm text-[#858888] font-[500] leading-[16px]">
            Email
          </span>
          <input
            id="email"
            type="text"
            className="outline-none appearance-none w-[280px] bg-transparent text-base text-[#000] font-400 leading-[19px]"
          />
        </label>
        <label
          htmlFor="password"
          className="w-[343px] flex flex-col p-[10px] rounded-[10px] bg-input relative"
        >
          <span className="text-sm text-[#858888] font-[500] leading-[16px]">
            Password
          </span>
          <input
            id="password"
            type={isHide ? "password" : "text"}
            className={`${
              isHide ? "text-2xl tracking-[6px]" : "text-base tracking-normal"
            } outline-none appearance-none w-[280px] h-[19px] pl-1 bg-transparent  text-[#000] font-400 leading-[19px] `}
          />
          {!isHide ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-slash absolute right-[15px] top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setHide(true)}
            >
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye absolute right-[16px] top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setHide(false)}
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
          )}
        </label>
      </section>
      <section className="flex flex-col gap-4 mt-40 mb-[50px]">
        <button className="w-[343px] h-[50px] rounded-[10px] bg-[#274d76] flex items-center justify-center text-base text-[#fff] font-normal leading-[19px]">
          Sign up
        </button>
        <button
          className="w-[343px] h-[50px] rounded-[10px] bg-[#fff] border-[2px] border-solid border-input flex items-center justify-center text-base text-[#274d76] font-normal leading-[19px]"
          onClick={() => navigate("/Sign_in")}
        >
          Already have an account
        </button>
      </section>
    </main>
  );
}

export default SignUp;
