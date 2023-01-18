import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { BsQuestionLg } from 'react-icons/bs';

const AuthRight = () => {
  return (
    <>
      <div className="px-3 py-6 flex flex-col justify-between relative overflow-auto overflow-x-auto">
        <div className="">
          <div className="mb-10 ml-14">
            <button className="bg-[#99C3FF] py-1.5 px-8 rounded-2xl text-xs font-bold ">
              logo
            </button>
          </div>
          <div className="">
            <p className="text-base ml-5">Dashboard</p>

            <div className="text-base text-[#878787]  m-5 mr-0">
              <ul>
                <li className="text-[#302323] flex flex-row justify-between items-center">
                  Products
                  <IoIosArrowUp className="text-[#5798F7]" />{' '}
                </li>
                <li>Products</li>
                <li>New</li>
                <li>Edit</li>
                <li>Single Product</li>
              </ul>
            </div>

            <div className="text-base text-[#302323] m-5 mr-0">
              <ul>
                <li className="py-2 flex flex-row justify-between items-center">
                  Categories
                  <IoIosArrowDown className="text-[#99C3FF]" />
                </li>
                <li className="py-2 flex flex-row justify-between items-center">
                  Tags
                  <IoIosArrowDown className="text-[#99C3FF]" />
                </li>
                <li className="py-2 flex flex-row justify-between items-center">
                  Orders
                  <IoIosArrowDown className="text-[#99C3FF]" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#FBF0DE] to-[#E3E2F6] m-4 rounded-[10px] h-56 flex flex-col mt-20">
          <div className="flex justify-center">
            <div className="bg-white w-16 relative -top-6 h-16 rounded-full shadow-[0px_33px_24px_rgba(0,0,0,0.16)]">
              <div className="bg-[#FF886A] w-10 h-10 rounded-full m-3 items-center flex">
                <BsQuestionLg className="text-white m-2" size="32" />
              </div>
            </div>
          </div>
          <div className="px-6">
            <p className="text-center text-base font-semibold">Help Center</p>
            <p className="text-center text-[#757575] text-xs mt-1">
              Having trouble in Planti. Please contact us for more questions.
            </p>
          </div>
          <div className="m-5 ">
            <button className="bg-[#FF8465] py-1.5 w-11/12 h-10 px-2 text-white rounded-2xl text-xs font-bold ">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthRight;
