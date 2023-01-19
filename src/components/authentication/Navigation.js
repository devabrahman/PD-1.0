import React from 'react';
// import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { BsQuestionLg } from 'react-icons/bs';
import CategoryIcon from 'components/SVGIcons/CategoryIcon';
// import OrderIcon from 'components/SVGIcons/OrderIcon';
import { Disclosure } from '@headlessui/react';

const Navigation = () => {
  return (
    <>
      <div className="px-3 py-6 flex flex-col relative">
        <div className="">
          <div className="mb-10 ml-14">
            <button className="bg-[#99C3FF] py-1.5 px-8 rounded-2xl text-xs font-bold ">
              logo
            </button>
          </div>
          <div className="">
            <p className="text-base ml-5 m-5">Dashboard</p>

            <div className="text-base text-[#878787]  m-5 mr-0">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                      <div className="flex">
                        <CategoryIcon className="h-6 w-14" />
                        <p className="px-2">Products</p>
                      </div>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#5798F7]`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="mx-7">
                      <ul>
                        <li>Products</li>
                        <li>New</li>
                        <li>Edit</li>
                        <li>Single Product</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="text-base text-[#302323] m-5 mr-0">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                      <div className="flex">
                        <CategoryIcon className="h-6 w-14" />
                        <p className="px-2">Categories</p>
                      </div>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#99C3FF]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mx-7 text-[#878787]">No panel</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="text-base text-[#302323] m-5 mr-0">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                      <div className="flex">
                        <CategoryIcon className="h-6 w-14" />
                        <p className="px-2">Tags</p>
                      </div>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#99C3FF]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mx-7 text-[#878787]">No panel</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="text-base text-[#302323] m-5 mr-0">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                      <div className="flex">
                        <CategoryIcon className="h-6 w-14" />
                        <p className="px-2">Orders</p>
                      </div>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#99C3FF]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mx-7 text-[#878787]">No panel</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#FBF0DE] to-[#E3E2F6] mx-4 rounded-[10px] h-56 w-52 w- flex flex-col fixed bottom-12 justify-end">
          <div className="flex justify-center">
            <div className="bg-white w-16 relative -top-6 h-16 rounded-full shadow-[0px_33px_24px_rgba(0,0,0,0.16)]">
              <div className="bg-[#FF886A] w-10 h-10 rounded-full m-3 items-center flex">
                <BsQuestionLg className="text-white m-2" size="32" />
              </div>
            </div>
          </div>
          <div className="px-6">
            <p className="text-center text-base font-semibold">Help Center</p>
            <p className="text-center text-[#757575] text-xs mt-1">
              Having trouble in Planti. Please contact us for more questions.
            </p>
          </div>
          <div className="m-5 ">
            <button className="bg-[#FF8465] py-1.5 w-11/12 h-10 px-2 text-white rounded-2xl text-xs font-bold ">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
