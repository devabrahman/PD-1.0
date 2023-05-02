import Breadcrumbs from 'components/common/Breadcrumbs';
import ImageDropDown from 'components/common/ImageDragDrop';
import Layout from 'components/common/Layout';
import categoryPic from 'assets/Images/common/CategoryPic.png';

const NewCategory = () => {
  return (
    <Layout title="Category">
      <Breadcrumbs rootTitle={{ title: 'Category', url: '/categories' }} subTitle="New" />
      <div className="flex mt-5">
        <div className="rounded-lg  w-8/12 ml-5 mr-0">
          <img
            src={categoryPic}
            alt="Category Icon"
            className="mt-20 object-contain dark:bg-lightDark rounded-[40px] px-6 dark:shadow-[0_10px_5px_rgba(4, 0, 34, 0.3))] "
          />
        </div>
        <form className="w-full h-auto mx-5">
          <div className="mb-4 mx-0">
            <label htmlFor="" className="text-left font-montserrat text-base mb-1.5 block pb-4">
              Title
            </label>
            <input
              type="text"
              className="rounded-2xl flex justify-center dark:bg-dark dark:text-white items-center border border-[#B9B9B9]/50 dark:border-darkBorder px-6 bg-opacity-10 p-3 font-montserrat text-sm w-10/12"
              required
              placeholder="Category Name"
            />

            <select
              type="text"
              className="rounded-3xl px-6 flex justify-center dark:bg-dark items-center border border-[#B9B9B9]/50 dark:border-darkBorder my-5 bg-opacity-10 p-3 font-montserrat text-sm text-gray-800 dark:text-white/80 outline-none"
              required
              placeholder="/angular">
              <option value="" disabled selected>
                select a parent category
              </option>
              <option value="">category</option>
              <option value="">category</option>
              <option value="">category</option>
            </select>
            <input
              type="text"
              className="rounded-3xl px-6 flex justify-center dark:bg-dark items-center border border-[#B9B9B9]/50 dark:border-darkBorder my-5 bg-opacity-10 p-3 font-montserrat text-sm w-5/12 italic"
              required
              placeholder="/angular"
            />
          </div>
          <div className="mx-0 space-y-3 pt-4">
            <label
              htmlFor=""
              className="text-[#302323] dark:text-[#E6E6E6]  font-montserrat text-xl mb-1.5 block">
              Description
            </label>
            <textarea
              placeholder="Please enter description"
              rows={6}
              className="w-9/12  border border-[#B9B9B9]/50 rounded-xl p-3 text-base text-[#161616]/70 dark:text-[#CDCDCD] dark:bg-lightDark input-accent-box-shadow py-2"
            />
          </div>
          <div className="py-5 mt-3">
            <label className="text-[#302323] dark:text-[#E6E6E6] font-montserrat text-xl mb-1.5 block">
              Categories Picture
            </label>
            <div className="p-2 max-w-sm">
              <ImageDropDown />
            </div>
          </div>
          <div className="flex justify-end gap-5 items-center mb-2 text-lg px-24">
            <button type="reset" className="px-6 py-1 text-[#DB2955] cursor-pointer">
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-1 mr-5 bg-[#1C92FF] text-white rounded-3xl cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewCategory;
