import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const CategoryListEdit = () => {
  return (
    <div className="rounded-xl input-accent-box-shadow w-full bg-white py-3">
      <Tab.Group>
        <Tab.List className="flex justify-between rounded-full px-2.5 py-1.5 bg-blue-50 mx-4 mb-4">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`font-medium text-sm mr-4 outline-none ${
                  selected ? 'bg-blue-500 px-4 py-1 rounded-full text-white' : 'pl-3'
                }`}>
                Categories
              </button>
            )}
          </Tab>

          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`font-medium text-sm outline-none ${
                  selected ? 'bg-blue-500 px-4 py-1 rounded-full text-white' : 'pr-3'
                }`}>
                Most Used
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels className="">
          <Tab.Panel>
            <section className="max-h-36 overflow-y-auto px-6">
              <div className="">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      id="laptop"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="laptop"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Laptop
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-4">
                  <div className="flex items-center">
                    <input
                      id="laptop-apple"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      htmlFor="laptop-apple"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Apple
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-8">
                  <div className="flex items-center">
                    <input
                      id="laptop-apple-air"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      htmlFor="laptop-apple-air"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Macbook Air
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-8">
                  <div className="flex items-center">
                    <input
                      id="laptop-apple-pro"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="laptop-apple-pro"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Macbook Pro
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      id="mobile-phone"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="mobile-phone"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Phone
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-4">
                  <div className="flex items-center">
                    <input
                      id="mobile-android"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="mobile-android"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Android
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-4">
                  <div className="flex items-center">
                    <input
                      id="mobile-phone-iphone"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="mobile-phone-iphone"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      iPhone
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </Tab.Panel>

          <Tab.Panel className="ml-2">
            <section className="px-6">
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      id="mobile-phone"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="mobile-phone"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Phone
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-4">
                  <div className="flex items-center">
                    <input
                      id="mobile-android"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="mobile-android"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      Android
                    </label>
                  </div>
                </div>

                <div className="flex items-center mt-2 ml-4">
                  <div className="flex items-center">
                    <input
                      id="mobile-phone-iphone"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="mobile-phone-iphone"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                      iPhone
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CategoryListEdit;
