import { Dialog } from '@headlessui/react';
import { BsXLg } from 'react-icons/bs';
import CategoryPic from 'assets/Images/common/CategoryPic.png';

const NewTag = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6  shadow-xl transition-all text-center">
          <div className="mx-0 my-0">
            <section
              onClick={() => setIsOpen(false)}
              className="flex justify-end group-hover cursor-pointer">
              <BsXLg className="w-6 text-[#C8C9CB] hover:text-[#F4316B] duration-200" />
            </section>
            <section className="flex mb-16">
              <img src={CategoryPic} className="w-60 h-44" />
              <form className="mt-6 space-y-8 w-full">
                <div className="mb-4 mx-0">
                  <label htmlFor="" className="text-left font-montserrat text-base mb-1.5 block">
                    Title
                  </label>
                  <input
                    type="text"
                    className="rounded-xl flex justify-center items-center border border-[#B9B9B9]/50  p-4 font-montserrat text-sm w-full input-box-shadow"
                    required
                    placeholder="Tags Name"
                  />
                </div>
                <div className="mb-5 mx-0">
                  <label htmlFor="" className="text-left font-montserrat text-sm mb-1.5 block">
                    Description
                  </label>
                  <textarea
                    type="text"
                    rows="5"
                    className="rounded-xl flex justify-center items-center border border-[#B9B9B9]/50
                     p-3 font-montserrat text-sm w-full outline-none"
                    required
                    placeholder="Please input description"
                  />
                </div>
              </form>
            </section>
            <hr className="h-1 w-full"></hr>
            <div className="flex justify-end gap-5 items-center mt-5 mb-2 text-lg ">
              <button className="px-6 py-2 text-[#F4316B] rounded-3xl cursor-pointer">
                Cancel
              </button>
              <button className="px-6 py-1 mr-5 bg-[#1C92FF] text-white rounded-3xl cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default NewTag;
