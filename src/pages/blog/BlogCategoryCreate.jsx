/* eslint-disable no-unused-vars */
import Breadcrumbs from 'components/common/Breadcrumbs';
import ImageDropDown from 'components/common/ImageDragDrop';
import Layout from 'components/common/Layout';
import categoryPic from 'assets/Images/common/CategoryPic.png';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const BlogCategoryCreate = () => {
  const [editSlug, setEditSlug] = useState(false);
  const [slugValue, setSlugValue] = useState('');

  return (
    <Layout title="Category">
      <Breadcrumbs title="Category" link="/category/create" />

      <div className="grid grid-cols-12 mt-5 w-11/12 mx-auto">
        <div className="col-span-6 rounded-lg w-[450px] h-auto mr-0">
          <img
            src={categoryPic}
            alt="Category Icon"
            className="object-contain dark:bg-lightDark w-full"
          />
        </div>

        <form className="col-span-6 w-full h-auto mx-5">
          <div className="mb-4 mx-0">
            <label htmlFor="" className="text-lg font-montserrat mb-1.5 block pb-">
              Category title
            </label>
            <input
              type="text"
              className="rounded-xl flex justify-center dark:bg-dark dark:text-white items-center border border-[#B9B9B9]/50 dark:border-darkBorder px-6 bg-opacity-10 p-3 font-montserrat text-sm w-full"
              placeholder="Category Name"
              onChange={(e) => setSlugValue(e.target.value)}
            />

            {editSlug === true && (
              <input
                type="text"
                className="rounded-xl px-6 flex justify-center dark:bg-dark items-center border border-[#B9B9B9]/50 dark:border-darkBorder mb-5 bg-opacity-10 p-3 font-montserrat text-sm w-9/12 italic mt-4"
                placeholder="/angular"
                value={slugValue}
              />
            )}

            {!editSlug && (
              <div className="flex items-center mt-2">
                <p className="text-blue-400 italic">https://my-amazing-website.com/category-name</p>
                <button
                  className="mt-1 ml-2 bg-white px-2 py-1 rounded-md shadow"
                  type="button"
                  onClick={() => setEditSlug(true)}>
                  <PencilIcon className="h-4 w-4 cursor-pointer" />
                </button>
              </div>
            )}

            <label className="text-lg mt-6 block">Parenet category</label>
            <select
              type="text"
              className="rounded-xl px-6 flex justify-center dark:bg-dark items-center border border-gray-200 dark:border-darkBorder mt-1 bg-opacity-10 p-3 font-montserrat text-sm text-gray-800 dark:text-white/80 outline-none w-2/5"
              placeholder="/angular">
              <option value="" selected>
                Select category
              </option>
              <option value="">Apple</option>
              <option value="">- Laptop</option>
              <option value="">-- Macbook Air</option>
            </select>
          </div>

          <div className="mx-0 space-y-3 pt-4">
            <label
              htmlFor=""
              className="text-[#302323] dark:text-[#E6E6E6]  font-montserrat text-xl mb-1.5 block">
              Description
            </label>
            <textarea
              placeholder="Please enter description"
              rows={3}
              className="w-full  border border-[#B9B9B9]/50 rounded-xl p-3 text-base text-[#161616]/70 dark:text-[#CDCDCD] dark:bg-lightDark input-accent-box-shadow py-2"
            />
          </div>

          <div className="py-5 mt-3">
            <label className="text-[#302323] dark:text-[#E6E6E6] font-montserrat text-xl mb-1.5 block">
              Categories picture
            </label>
            <div className="p-2 max-w-sm">
              <ImageDropDown />
            </div>
          </div>

          <div className="mt-2 mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-xl w-full cursor-pointer">
              Create
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default BlogCategoryCreate;
