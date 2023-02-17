import { Dialog } from '@headlessui/react';
import { BsXLg } from 'react-icons/bs';
import CategoryPic from '../../Images/CategoryPic.png';

const NewTag = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6  shadow-xl transition-all text-center">
          <div className="mx-0 my-0">
            <section className="flex justify-end">
              <BsXLg className="w-6 text-[#C8C9CB]" />{' '}
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
                    className="rounded-xl flex justify-center items-center border border-primary bg-primary bg-opacity-10 p-4 font-montserrat text-sm w-full"
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
                    className="rounded-xl flex justify-center items-center border border-primary bg-primary bg-opacity-10 py-2  px-2 font-montserrat text-sm w-full"
                    required
                    placeholder="Tags Name"
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
