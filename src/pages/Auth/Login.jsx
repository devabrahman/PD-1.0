import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="md:grid md:grid-cols-12 sm:gap-5 md:gap-10 h-screen">
      <div className=" md:col-span-6 lg:col-span-7 hidden md:flex justify-center items-center">
        <div className="w-[800px] h-[800px]">
          <img
            src="/assets/images/auth/amazing_ecom.gif"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="md:col-span-6 lg:col-span-5 mt-8 md:pr-12 md:flex justify-center items-center">
        <div className="w-4/5 mx-auto md:w-[95%] md:mx-0">
          <div className="mb-7">
            <h2 className="text-2xl md:text-4xl text-[#2B3674] font-bold mb-2">Log In</h2>
            <p className="text-sm text-[#A3AED0]">
              Let&apos;s enter login details to use application
            </p>
          </div>

          <div className="grid gap-6 mb-7">
            <div className="grid grid-cols-3 justify-center w-3/5 mx-auto items-center gap-2 rounded-lg py-3">
              <div className="bg-white w-10 p-2 rounded-lg border border-gray-50 shadow-md shadow-blue-100 hover:scale-95 transform transition-all duration-150 cursor-pointer">
                <img src="/assets/images/auth/google.png" />
              </div>
              <div className="bg-white w-10 p-2 rounded-lg border border-gray-50 shadow-md shadow-blue-100 hover:scale-95 transform transition-all duration-150 cursor-pointer">
                <img src="/assets/images/auth/twitter.png" />
              </div>
              <div className="bg-white w-10 p-2 rounded-lg border border-gray-50 shadow-md shadow-blue-100 hover:scale-95 transform transition-all duration-150 cursor-pointer">
                <img src="/assets/images/auth/facebook.png" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#E0E5F2] h-[1px] block w-full"></span>
              <span className="text-sm text-[#A3AED0] font-medium">or</span>
              <span className="bg-[#E0E5F2] h-[1px] block w-full"></span>
            </div>
          </div>

          <from>
            <div className="flex flex-col gap-3 mb-6">
              <label className="text-[#2B3674] font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-[#A3AED0] placeholder:text-sm bg-white"
                type="email"
                name="email"
                id="email"
                placeholder="mail@simmmple.com"
              />
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <label className="text-[#2B3674] font-medium" htmlFor="password">
                Password
              </label>
              <div className="flex items-center justify-between w-full border border-gray-200 rounded-lg py-[2px]">
                <input
                  className="placeholder:text-[#A3AED0] placeholder:text-sm outline-none w-full border-none focus:outline-none focus:ring-0 bg-white"
                  type={showPassword === true ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Min. 8 characters"
                />

                {showPassword === true ? (
                  <EyeSlashIcon
                    className="h-10 w-10 cursor-pointer hover:bg-gray-100 p-1 px-2 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeIcon
                    className="h-10 w-10 cursor-pointer hover:bg-gray-100 p-1 px-2 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm md:text-base text-gray-900 dark:text-gray-300">
                  Keep me logged in
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-blue-400 text-sm md:text-base"
                href="http://">
                Forget password?
              </Link>
            </div>

            <div className="space-y-4">
              <button
                className="w-full mx-auto bg-blue-500 text-white py-2 md:py-2.5 rounded-lg transform transition-all duration-500 hover:scale-95 text-sm md:text-base"
                type="submit">
                Sign In
              </button>
              <Link
                to="/signup"
                className="w-full mx-auto hover:bg-blue-50 transform transition-all duration-150 py-2 md:py-2.5 rounded-lg text-blue-400 text-center text-sm md:text-base"
                type="submit">
                Don&apos;t have an account?
              </Link>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Login;
