import React from 'react';
import SearchEngineIcon from 'assets/Images/icons/SearchEngineIcon.png';
import ReactQuill from 'react-quill';

const MetaSection = () => {
  return (
    <div className="mt-16 mb-5 bg-white dark:bg-dark rounded-lg p-5">
      <div className="flex gap-2">
        <img src={SearchEngineIcon} alt="Option icon" className="h-6 w-5" />
        <h4 className="font-medium">Search engine listing</h4>
      </div>
      <p className="text-xs text-gray-600 pt-2 dark:text-gray-50">
        Add a title and description to see how this product might appear in a search engine listing
      </p>

      <form action="">
        <div className="mt-5">
          <label htmlFor="title" className="font-medium dark:text-gray-50 text-[#302323]">
            Page Title
          </label>
          <input
            type="text"
            name="Title"
            id="title"
            className="border border-gray-200 dark:border-darkBorder dark:bg-lightDark  mt-3 rounded-xl w-full py-2 pl-3 pr-1.5 dark:placeholder:text-white/40"
            placeholder="Add a title "
          />
        </div>

        <div className="mt-6">
          <div>
            <label className="block font-medium mb-2 mt-6">Meta description</label>
            <ReactQuill theme="snow" className="long_description" />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="title" className="text-[19px] font-medium dark:text-white text-[#302323]">
            URL
          </label>
          <input
            type="text"
            name="Title"
            id="title"
            placeholder="https://yourdomain.com/productname"
            className="border text-gray-600 text-sm dark:placeholder:text-white/50 dark:bg-lightDark  border-gray-200 dark:border-darkBorder dark:text-white italic mt-3 rounded-xl w-full py-2 pl-3 pr-1.5"
          />
        </div>
      </form>
    </div>
  );
};

export default MetaSection;
