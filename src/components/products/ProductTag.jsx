/* eslint-disable no-unused-vars */
import React from 'react';
import { BiX } from 'react-icons/bi';

const ProductTag = () => {
  return (
    <div className="w-full rounded-xl input-accent-box-shadow mt-5 px-5 py-3 bg-white">
      <label className="text-[#424141] dark:text-white font-medium text-base block">Tags</label>
      <p className="text-[10px] text-[#939090] dark:text-gray-300 flex justify-end m-0 p-0">
        Manage
      </p>
      <form>
        <input
          type="text"
          name="tag"
          id=""
          autoComplete="off"
          className="border border-accent/30 h-9 mt-3 rounded-xl w-full px-2.5 py-1 dark:bg-lightDark"
          placeholder="Find or create tags"
        />
      </form>
      <div className="flex mt-3 flex-wrap gap-x-2 gap-y-2">
        <div className="bg-green-50 rounded-md flex items-center pr-2">
          <span className="text-xs py-1.5 pl-2 font-medium">Macbook</span>
          <BiX className="cursor-pointer py-1.5 h-7 w-7" />
        </div>
        <div className="bg-green-50 rounded-md flex items-center pr-2">
          <span className="text-xs py-1.5 pl-2 font-medium">Apple</span>
          <BiX className="cursor-pointer py-1.5 h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default ProductTag;
