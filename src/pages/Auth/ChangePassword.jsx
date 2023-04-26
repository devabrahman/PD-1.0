import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-7 flex justify-center items-center">
        <div className="w-[800px] h-[800px]">
          <img src="/assets/images/auth/amazing_ecom.gif" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="col-span-5 mt-8 pr-12 flex justify-center items-center">
        <div className="w-[95%]">
          <div className="mb-7">
            <h2 className="text-4xl text-[#2B3674] font-bold mb-2">Reset Password</h2>
            <p className="text-[#A3AED0]">Let&apos;s enter passwords to continue</p>
          </div>

          <from>
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
                    className="h-10 w-10 cursor-pointer hover:bg-gray-200 p-1 px-2 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeIcon
                    className="h-10 w-10 cursor-pointer hover:bg-gray-200 p-1 px-2 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <label className="text-[#2B3674] font-medium" htmlFor="password">
                Confirm Password
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
                    className="h-10 w-10 cursor-pointer hover:bg-gray-300 p-1 px-2 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeIcon
                    className="h-10 w-10 cursor-pointer hover:bg-gray-300 p-1 px-2 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <div className="grid gap-6">
              <button
                className="w-full mx-auto bg-blue-500 text-white py-2.5 rounded-lg transform transition-all duration-500 hover:scale-95"
                type="submit">
                Reset Password
              </button>
              <Link
                to="/login"
                className="w-full mx-auto hover:bg-blue-50 transform transition-all duration-150 py-2.5 rounded-lg text-blue-400 text-center"
                type="submit">
                Go Back
              </Link>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
