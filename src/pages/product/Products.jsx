import { Link, useNavigate } from 'react-router-dom';
import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
// import DeletePopup from 'components/common/DeletePopup';
import Pagination from 'components/common/Pagination';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

// icons
import { ChevronUpDownIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout title="Products" padding="p-0 sm:px-10 sm:py-8">
        <Breadcrumbs title="Products" link="/products" />

        <div className="flex justify-between items-center mt-8">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white hover pl-4 pr-2 py-2 text-sm focus:outline-none focus-visible:ring-0">
                Actions
                <ChevronDownIcon
                  className="ml-3 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute left-0 mt-2 z-10 w-56 origin-top-left rounded-md overflow-hidden bg-white shadow-lg ring-0 focus:outline-none">
                <Menu.Item>
                  <button className="group flex w-full items-center px-2 py-2 text-sm hover:bg-blue-400 hover:text-white">
                    Archive
                  </button>
                </Menu.Item>

                <span className="border-b h-[1px] bg-gray-400 block"></span>

                <Menu.Item>
                  <button className="group flex w-full items-center px-2 py-2 text-sm hover:bg-blue-400 hover:text-white">
                    Edit
                  </button>
                </Menu.Item>

                <span className="border-b h-[1px] bg-gray-400 block"></span>

                <Menu.Item>
                  <button className="group flex w-full items-center px-2 py-2 text-sm hover:bg-blue-400 hover:text-white">
                    Delete
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="flex items-center">
            <div className="flex items-center bg-white px-4 rounded-lg mr-4 shadow-md shadow-blue-50 w-54">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              <input
                type="text"
                className="pl-2 py-2 w-full ring-0 border-none outline-none focus:outline-none focus:ring-0 bg-transparent"
                placeholder="Search..."
              />
            </div>

            <Link to="/new-product">
              <div className="bg-blue-500 text-white pl-2 pr-3 py-2 rounded-lg flex justify-center items-center cursor-pointer">
                <PlusIcon className="text-white w-6 h-6" />
                <p className="ml-1">Product</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md shadow-blue-50 sm:rounded-lg mt-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="custom-checkbox"
                      type="checkbox"
                      className="custom-checkbox cursor-pointer"
                    />
                    <label className="sr-only" htmlFor="custom-checkbox">
                      Check
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-gray-700">
                  Product name
                </th>
                <th scope="col" className="px-6 py-4">
                  <div className="flex items-center">
                    <p className="text-gray-700">Color</p>
                    <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  <div className="flex items-center">
                    <p className="text-gray-700">Category</p>
                    <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  <div className="flex items-center">
                    <p className="text-gray-700">Price</p>
                    <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17&quot;
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17&quot;
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17&quot;
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => navigate('/edit-product')}>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17&quot;
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                  <Link
                    to="/single-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </Link>
                  <Link
                    to="/edit-product"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Pagination />
      </Layout>

      {/* 
      <DeletePopup
        setIsOpen={(event) => setIsDeleteOpen(event)}
        isOpen={isDeleteOpen}
        setConfirmDelete={(value) => setConfirmDelete(value)}
      /> */}
    </>
  );
};

export default Products;
