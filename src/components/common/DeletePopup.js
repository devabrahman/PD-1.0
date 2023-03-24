import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import { BsXLg } from 'react-icons/bs';
import DeletePopupIcon from '../../assets/Images/common/DeletePopupIcon.png';

const DeletePopup = ({ isOpen, setIsOpen, setConfirmDelete }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="inline-block w-full min-w-[900px] max-w-lg overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="mx-9 my-5">
            <section className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <BsXLg className="w-6 text-[#C8C9CB]" />{' '}
              </button>
            </section>
            <div className="flex mt-5">
              <div className="grid grid-cols-2 auto-cols-max ">
                <div className="w-72 h-78  m-auto mt-8">
                  <img
                    src={DeletePopupIcon}
                    alt="Delete Pop-up Icon"
                    className="mx-auto align-middle ml-4.5 "
                  />
                </div>
                <div className="font-poppins font-semibold leading-10 m-24 text-left ml-4 mr-4">
                  <p className="text-3xl">Lorem Ipsum</p>
                  <p className="text-sm py-5 leading-6 text-[#848484]">
                    it is a long established fact that a reader will be{' '}
                    <span className="text-[#5798F6]">readable content</span> of a page layout.
                  </p>
                </div>
              </div>
            </div>
            <hr className="h-1 w-full"></hr>
            <div className="flex justify-end gap-5 items-center mt-5 mb-2 text-lg ">
              <button
                onClick={() => setIsOpen(false)}
                className="px-7 py-2.5 border-[#E6E6E6] rounded-3xl cursor-pointer border">
                Cancel
              </button>
              <button
                onClick={() => {
                  setConfirmDelete(true);
                  setIsOpen(false);
                }}
                className="px-7 py-2.5 mr-5 bg-[#DB2955] text-white rounded-3xl cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeletePopup;

DeletePopup.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
};
