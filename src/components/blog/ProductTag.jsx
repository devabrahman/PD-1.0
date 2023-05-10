/* eslint-disable no-unused-vars */
import React from 'react';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductTag = () => {
  return (
    <div className="w-full rounded-xl input-accent-box-shadow mt-5 px-5 py-3 bg-white">
      <div className="flex justify-between">
        <p className="text-[#424141] dark:text-white font-medium text-base block">Tags</p>
        <Link
          to="/tags"
          className="text-[10px] text-blue-500 dark:text-gray-300 flex justify-end m-0 p-0">
          Manage
        </Link>
      </div>
      <form>
        <input
          type="text"
          name="tag"
          autoComplete="off"
          className="border border-gray-200 focus:ring-1 focus:ring-blue-200 focus:ring-opacity-5  h-9 mt-3 rounded-xl w-full px-2.5 py-1 dark:bg-lightDark"
          placeholder="Find or create tags"
        />
      </form>
      <div className="flex mt-3 flex-wrap gap-x-2 gap-y-2">
        <div className="bg-gray-50 rounded-md flex items-center h-8 shadow-sm">
          <span className="text-xs pl-2 font-medium">Macbook</span>
          <BiX className="cursor-pointer h-full w-6 rounded-r-md p-1 ml-1.5 hover:bg-red-500 hover:text-white" />
        </div>
        <div className="bg-gray-50 rounded-md flex items-center h-8 shadow-sm">
          <span className="text-xs pl-2 font-medium">Apple</span>
          <BiX className="cursor-pointer h-full w-6 rounded-r-md p-1 ml-1.5 hover:bg-red-500 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductTag;
