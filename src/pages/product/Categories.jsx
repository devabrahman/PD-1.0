import { Link } from 'react-router-dom';
import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
// import DeletePopup from 'components/common/DeletePopup';
import Pagination from 'components/common/Pagination';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

// icons
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import EditIcon from 'components/SVGIcons/Editicon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';

// dummy data
const categories = [
  {
    title: 'Apple',
    description: 'All genuine Apple products listed here',
    slug: '/apple'
  },
  {
    title: '- Laptop',
    description: 'Powerful apple laptops listed here',
    slug: '/apple-laptop'
  },
  {
    title: '-- Macbook Air',
    description: 'Powerful M1 Macbook Air available for sell',
    slug: '/apple-laptop-macbook'
  },
  {
    title: 'Apple',
    description: 'All genuine Apple products listed here',
    slug: '/apple'
  },
  {
    title: '- Laptop',
    description: 'Powerful apple laptops listed here',
    slug: '/apple-laptop'
  },
  {
    title: '-- Macbook Air',
    description: 'Powerful M1 Macbook Air available for sell',
    slug: '/apple-laptop-macbook'
  },
  {
    title: 'Apple',
    description: 'All genuine Apple products listed here',
    slug: '/apple'
  },
  {
    title: '- Laptop',
    description: 'Powerful apple laptops listed here',
    slug: '/apple-laptop'
  },
];

const Categories = () => {
  return (
    <>
      <Layout title="Categories" padding="p-0 sm:px-10 sm:py-8">
        <Breadcrumbs title="Categories" link="/categories" />

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

            <Link to="/category/create">
              <div className="bg-blue-500 text-white pl-2 pr-3 py-2 rounded-lg flex justify-center items-center cursor-pointer">
                <PlusIcon className="text-white w-6 h-6" />
                <p className="ml-1">Category</p>
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
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-gray-700">
                  Category
                </th>
                <th scope="col" className="px-6 py-4">
                  <div className="flex items-center">
                    <p className="text-gray-700">Description</p>
                    <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  <div className="flex items-center">
                    <p className="text-gray-700">Slug</p>
                    <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  <div className="flex items-center">
                    <p className="text-gray-700">Products</p>
                    <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 cursor-pointer">
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
                    {category?.title}
                  </th>
                  <td className="px-6 py-4">{category?.description}</td>
                  <td className="px-6 py-4 italic">{category?.slug}</td>
                  <td className="px-6 py-4">8</td>
                  <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
                    <Link
                      to="/single-product"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <EyeIcon className="h-6 w-6 text-blue-400 " />
                    </Link>
                    <Link
                      to="/single-product"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <DeleteIcon />
                    </Link>
                    <Link
                      to="/edit-product"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <EditIcon />
                    </Link>
                  </td>
                </tr>
              ))}
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

export default Categories;
