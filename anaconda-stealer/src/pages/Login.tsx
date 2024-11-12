import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../public/assets/Logo.svg";
import userIcon from "../public/assets/userIcon.svg";
import passwordIcon from "../public/assets/password.svg";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background bg-cover bg-center flex relative items-center justify-center overflow-y-scroll xl:min-h-screen">
      <img src={logo} alt="logo" className="absolute right-0 top-2 p-1" />
      <div
        id="login_box"
        className="bg-opacity-30 backdrop-blur-md flex items-center justify-center"
      >
        <form
          onSubmit={handleLogin}
          className="gradientBorder p-8 w-[23rem] md:w-[35rem] lg:w-[30rem] xl:w-[30rem] max-h-[20rem]"
        >
          <div className="relative z-10 flex flex-col w-full space-y-7">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-lg font-semibold mb-2 text-textColor font-MontserratBold"
              >
                Username:
              </label>
              <div className="gradientBorder relative">
                <img src={userIcon} className="absolute right-0 py-1 px-2" />
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 bg-white bg-opacity-30 backdrop-blur-sm rounded-md relative z-10 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-lg font-semibold mb-2 text-textColor font-MontserratBold"
              >
                Password:
              </label>
              <div className="gradientBorder relative">
                <img
                  src={passwordIcon}
                  className="absolute right-0 py-1 px-2"
                />
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 bg-white bg-opacity-30 backdrop-blur-sm rounded-md relative z-10 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className="w-full p-3 font-semibold text-black uppercase rounded-md bg-primaryColor hover:bg-[#84FFA7] focus:outline-none relative z-10 font-MontserratBold"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
