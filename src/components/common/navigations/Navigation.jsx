/* eslint-disable no-unused-vars */
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import {
  Bars3BottomLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import { FcHome, FcLock } from 'react-icons/fc';
import { SlBasket } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';
import OderIcon from 'assets/Images/icons/order-nav-icon.png';
import { IoIosPeople } from 'react-icons/io';
import { useState } from 'react';

const LeftNavigation = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  const { pathname } = useLocation();

  // ecommerce disclosure
  const productRoutes = [
    '/products',
    '/new-product',
    '/edit-product',
    '/single-product',
    '/categories',
    '/tags'
  ];

  return (
    <div className="w-full">
      <div className="flex justify-around items-center pt-10 w-11/12 mx-auto">
        <div className="text- pt-1">
          <div className="w-4/5 mx-auto flex justify-end">
            <small className="bg-amber-400 text-white text-xs px-2 py-[2px] rounded-md">1.0</small>
          </div>
          <p className="text-xl font-medium text-gray-400">Prothom Dashboard</p>
        </div>
        <ChevronLeftIcon
          className="h-5 w-5 relative top-3 cursor-pointer"
          onClick={() => setCollapseSidebar(true)}
        />
      </div>

      <div className="mx-auto w-full bg-white space-y-2 mt-10">
        <Link
          to="/"
          className="flex items-center w-full justify-between bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
          <div className="flex items-center space-x-3.5">
            <FcHome className="h-6 w-6" />
            <span>Dashboard</span>
          </div>
        </Link>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between hover:bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
                <div className="flex items-center space-x-3.5">
                  <FcLock className="h-6 w-6 text-gray-400" />
                  <span>Authentication</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-gray-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <ul className="">
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/login"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Login
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/create-account"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Sign Up
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/forgot-password"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Forgot Password
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/reset-mail-sent"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Reset Mail Sent
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/change-password"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Change Password
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure defaultOpen={productRoutes.includes(pathname) === true && true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between hover:bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
                <div className="flex items-center space-x-3.5">
                  <SlBasket className="h-6 w-6 text-amber-400" />
                  <span>E-commerce</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-gray-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <ul className="">
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/products"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Products
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/new-product"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      New Product
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/edit-product"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Edit Product
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/single-product"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Single Product{' '}
                      <span className="relative -top-4 bg-amber-400 text-white px-1 py[3px] rounded-md">
                        Bonus
                      </span>
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/categories"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Categories
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/category/create"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      New Category
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px] text-sm">
                    <Link to="/tags" className="py-2 hover:bg-gray-100 text-gray-600 font-medium">
                      Tags
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between hover:bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
                <div className="flex items-center space-x-3.5">
                  <img src={OderIcon} />
                  <span>Orders</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-gray-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <ul className="">
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/orders"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Orders
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/order-details"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Order Details
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Link
          to="/chat"
          className="flex items-center w-full justify-between hover:bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
          <div className="flex justify-between items-center space-x-3.5">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-blue-400" />
            <span>Chat</span>
          </div>
          <p className="bg-amber-400 text-white px-1.5 rounded-xl text-xs">5</p>
        </Link>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between hover:bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
                <div className="flex items-center space-x-3.5">
                  <IoIosPeople className="h-6 w-6 text-gray-300" />
                  <span>Customers</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-gray-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <ul className="">
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/customers"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Customers
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/customer-profile"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Customer Profile
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/customer-profile-edit"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Profile Edit
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between hover:bg-gray-100 hover:text-gray-700 pl-5 pr-4 py-2.5 text-left font-medium focus:outline-none focus-visible:ring-0">
                <div className="flex items-center space-x-3.5">
                  <FcHome className="h-6 w-6" />
                  <span>Marketing</span>
                </div>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-gray-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <ul className="">
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/orders"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Customer Profile
                    </Link>
                  </li>
                  <li className="py-2 hover:bg-gray-100 pl-[60px]">
                    <Link
                      to="/order-details"
                      className="py-2 hover:bg-gray-100 text-gray-600 font-medium text-sm">
                      Profile Edit
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default LeftNavigation;
