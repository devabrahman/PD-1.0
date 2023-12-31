import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import TransitionChild from './TransitionChild';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CreateTag = ({ isOpen, setIsOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <TransitionChild>
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild>
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50 flex justify-between items-center">
                  <span>Create tag</span>
                  <XMarkIcon
                    className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </Dialog.Title>

                <form className="mt-">
                  <p className="text-sm text-gray-500 dark:text-gray-50">
                    Create a tag to use while creating category
                  </p>

                  <div className="mt-6">
                    <label htmlFor="title" className="dark:text-gray-50">
                      Tag title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full block dark:text-gray-50 px-2 py-1 border border-gray-200 dark:bg-dark dark:border-darkBorder rounded-lg mt-1"
                    />
                  </div>

                  <button className="bg-blue-500 text-white w-full mt-5 py-2 rounded-lg">
                    Create
                  </button>
                </form>
              </Dialog.Panel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateTag;
