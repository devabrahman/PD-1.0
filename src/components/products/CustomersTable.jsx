import { Link } from 'react-router-dom';

// icons
import { ChatBubbleLeftIcon, ChevronUpDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';

const CustomersTable = () => {
  // empty array
  const myArray = Array(9).fill(0);

  return (
    <div className="relative overflow-x-auto shadow-md shadow-blue-50 dark:shadow-gray-900 sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-dark dark:text-gray-400 border-b dark:border-darkBorder">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-dark border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-4 text-blue-400">
              Id
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Customer</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 dark:bg-lightDark hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Joined</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 dark:bg-lightDark hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Bought Yet</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 dark:bg-lightDark hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {myArray?.map((_, index) => (
            <tr
              className="bg-white border-b border-gray-200 dark:bg-dark dark:border-darkBorder hover:bg-gray-50"
              key={index}>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-dark dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-3 font-light text-gray-500 whitespace-nowrap dark:text-white">
                #8543467
              </th>
              <td className="px-6 py-3">
                <div className="flex items-center">
                  <img
                    src="/assets/images/products/customer.png"
                    alt="customer image"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="ml-2">Muhammad</span>
                </div>
              </td>
              <td className="px-6 py-3">5th May, 2023</td>
              <td className="px-6 py-3">8 Products</td>
              <td className="px-6 py-3 text-right flex justify-end items-center space-x-6 ml-5">
                <Link
                  to="/chat"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <ChatBubbleLeftIcon className="h-6 w-6 text-amber-400 " />
                </Link>
                <Link
                  to="/customer"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <EyeIcon className="h-6 w-6 text-blue-400 " />
                </Link>
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
