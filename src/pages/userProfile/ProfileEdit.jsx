import { useState } from 'react';
import Layout from 'components/common/LeftLayout';
import check from 'assets/Images/common/check.png';
import profile from 'assets/Images/common/profile.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const ProfileEdit = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout title="">
      <section>
        <div className="w-[492px] mx-auto mb-20">
          <h3 className="text-xl font-medium text-[#302323] dark:text-white">Edit profile</h3>
          <div className="w-[130px] h-[130px] mx-auto rounded-full shadow-lg shadow-[#87ceeb40] p-1 relative mb-10">
            <img className="w-full" src={profile} alt="Profile" />
            <div className="w-5 h-5 absolute right-2 bottom-3">
              <img className="w-full" src={check} alt="check" />
            </div>
          </div>
          <form className="w-full">
            <div className="flex items-center gap-7 mb-5">
              <div>
                <label
                  className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                  htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="w-full border dark:bg-dark border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Amantony"
                />
              </div>
              <div>
                <label
                  className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                  htmlFor="lastName">
                  Lastst Name
                </label>
                <input
                  className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Rojario"
                />
              </div>
            </div>
            <div className="mb-5 w-full">
              <label
                className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                htmlFor="email">
                Email<sup className="text-[#5798F7]">*</sup>
              </label>
              <input
                className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="mail@simmmple.com"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                htmlFor="phoneNumber">
                Contact Number
              </label>
              <input
                className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="666-598-8965"
              />
            </div>
            <div className="flex items-center gap-7 mb-5">
              <div>
                <label
                  className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                  htmlFor="city">
                  City
                </label>
                <input
                  className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Mcaliem"
                />
              </div>
              <div>
                <label
                  className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                  htmlFor="state">
                  State
                </label>
                <input
                  className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="state"
                  id="state"
                  placeholder="New York"
                />
              </div>
            </div>
            <div className="flex items-center gap-7 mb-5">
              <div>
                <label
                  className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                  htmlFor="zipCode">
                  Zip code
                </label>
                <input
                  className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="111356"
                />
              </div>
              <div>
                <label
                  className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                  htmlFor="country">
                  Country
                </label>
                <input
                  className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="United States"
                />
              </div>
            </div>
            <div className="mb-8 w-full relative">
              <label
                className="text-sm text-[#2B3674] dark:text-white font-medium mb-3 block"
                htmlFor="password">
                Password
              </label>
              <input
                className="dark:bg-dark w-full border border-[#E0E5F2] dark:border-darkBorder rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Min. 8 characters"
              />
              <div
                onClick={() => setShowPassword(showPassword ? false : true)}
                className="absolute right-5 top-[43%] translate-y-1/2">
                {showPassword ? (
                  <EyeIcon className="w-6 text-[#A3AED0] dark:text-white" />
                ) : (
                  <EyeSlashIcon className="w-6 text-[#A3AED0] dark:text-white" />
                )}
              </div>
            </div>
            <button className="bg-[#5798F7] w-full text-white text-sm font-bold rounded-xl px-5 py-3">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileEdit;
