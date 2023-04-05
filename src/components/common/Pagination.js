import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex flex-col items-center my-12 mt-6 w-full">
      <div className="flex text-gray-700 w-min">
        <div className="h-12 w-12 mr-2 flex justify-center items-center rounded-2xl bg-[#F8FAFB] dark:bg-lightDark cursor-pointer">
          <ChevronLeftIcon className="w-5 hover:text-[#1C92FF] duration-300 stroke-2 dark:text-white" />
        </div>
        <div className="flex items-center h-12 font-medium rounded-2xl bg-[#F8FAFB] dark:bg-lightDark dark:text-white w-full lg:w-9/12 justify-around">
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            1
          </div>
          <div className="w-10 h-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-[#1C92FF] text-white">
            <p>2</p>
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            3
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            4
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            5
          </div>

          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            . . . .
          </div>

          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            37
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            38
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            39
          </div>
          <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
            40
          </div>
        </div>
        <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-2xl bg-[#F8FAFB]  dark:bg-lightDark dark:text-white cursor-pointer">
          <ChevronRightIcon className="w-5 hover:text-[#1C92FF] duration-300 stroke-2" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
