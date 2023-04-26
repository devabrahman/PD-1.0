import { Link, useNavigate } from 'react-router-dom';

// icons
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';

const ProductTable = () => {
  const navigate = useNavigate();

  // empty array
  const myArray = Array(8).fill(0);

  return (
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
              Thumbnail
            </th>
            <th scope="col" className="px-6 py-4 text-gray-700">
              Product name
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-gray-700">Price</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
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
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {myArray?.map((_, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer"
              onClick={() => navigate('/edit-product')}
              key={index}>
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
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                <div className="h-10 w-10">
                  <img src="assets/images/products/macbook4.jpg" className="h-full w-full" alt="" />
                </div>
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <p>Apple MacBook Pro 17&quot;</p>
                <small className="text-xs text-gray-400 mt-[3px] inline-block rounded-md">
                  Laptop
                </small>
              </th>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4 text-right flex justify-end items-center space-x-4">
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

export default ProductTable;
