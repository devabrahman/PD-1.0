import { Link } from 'react-router-dom';

// icons
import { ChevronUpDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';

const OrdersTable = () => {
  // empty array
  const myArray = Array(7).fill(0);

  return (
    <div className="relative overflow-x-auto shadow-md shadow-blue-50 sm:rounded-lg mt-4">
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
            <th scope="col" className="px-6 py-4 text-blue-400">
              Id
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Product</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Date</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Status</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Revenue</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400">Customer</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
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
              className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
              key={index}>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-3 font-light text-gray-500 whitespace-nowrap dark:text-white">
                #8543467
              </th>
              <th
                scope="row"
                className="px-6 py-3 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                <p>Apple MacBook Pro 17&quot;</p>
                <small className="text-xs text-gray-400 mt-[3px] inline-block rounded-md">
                  Laptop
                </small>
              </th>
              <td className="px-6 py-3 w-full">5th May, 2023</td>
              <td className="px-6 py-3 text-green-400">Paid</td>
              <td className="px-6 py-3">$ 1200</td>
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
              <td className="px-6 py-3 text-right flex justify-end items-center space-x-4">
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
  );
};

export default OrdersTable;
