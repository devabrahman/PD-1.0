import { Link } from 'react-router-dom';

// icons
import { ChevronUpDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';

const PostTable = () => {
  // empty array
  const myArray = Array(8).fill(0);

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
            <th scope="col" className="px-6 py-4 text-blue-400 font-semibold">
              Thumbnail
            </th>
            <th scope="col" className="px-6 py-4 text-blue-400 font-semibold">
              Post
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400 font-semibold">Comments</p>
                <ChevronUpDownIcon className="h-[18px] w-4 bg-blue-50 hover:bg-blue-400 hover:text-white ml-1.5 rounded-sm cursor-pointer" />
              </div>
            </th>
            <th scope="col" className="px-6 py-4">
              <div className="flex items-center">
                <p className="text-blue-400 font-semibold">Status</p>
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
              <th scope="row" className="px-6 py-3 whitespace-nowrap">
                <div className="h-10 w-10">
                  <img src="assets/images/products/macbook4.jpg" className="h-full w-full" alt="" />
                </div>
              </th>
              <th
                scope="row"
                className="px-6 py-3 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                <p>GitHub Pre commit hooks made coding...</p>
                <small className="text-xs text-gray-400 mt-[3px] inline-block rounded-md">
                  Programming
                </small>
              </th>
              <td className="px-6 py-3">55</td>
              <td className="px-6 py-3">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md font-normal">
                  Published
                </span>
              </td>
              <td className="px-6 py-3 text-right flex justify-end items-center space-x-4">
                <Link
                  to="/create-post"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <EyeIcon className="h-6 w-6 text-blue-400 " />
                </Link>
                <Link
                  to="/create-post"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  <EditIcon />
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

export default PostTable;
