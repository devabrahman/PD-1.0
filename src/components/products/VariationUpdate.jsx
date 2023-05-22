/* eslint-disable no-unused-vars */
import EditIcon from 'components/SVGIcons/Editicon';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import { BiChevronDown } from 'react-icons/bi';

const VariationUpdate = () => {
  return (
    <div className="my-5 bg-white dark:bg-dark px-3 py-4 rounded-lg shadow-xl shadow-gray-100 dark:shadow-gray-900 mt-8">
      <div className="flex justify-between">
        <h5 className="font-medium ml-2">Variation details</h5>
        <p className="text-accent/80">+ Add another option</p>
      </div>
      <div className="border w-full border-[#D6D6D6]/70 dark:border-darkBorder rounded-xl my-2">
        <div className="ml-4 flex items-center py-2">
          <p className="px-5">Select</p>
          <p className="text-accent">All</p>
          <p className="text-accent px-3">None</p>
          <p className="text-accent flex items-center px-3">
            <span>Color</span> <BiChevronDown className="w-5 h-5" />
          </p>
          <p className="text-accent flex items-center px-3">
            <span>Storage</span> <BiChevronDown className="w-5 h-5" />
          </p>
          <p className="text-accent flex items-center px-3">
            <span>Ram</span> <BiChevronDown className="w-5 h-5" />
          </p>
        </div>
        <hr className="w-full" />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs">
              <tr className="border-b text-gray-600 dark:text-gray-50 dark:border-darkBorder">
                <th scope="col" className="pl-3 py-3"></th>
                <th scope="col" className="py-3 font-semibold">
                  Variant
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Price
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Quantity
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-darkBorder">
                <th scope="row" className="pl-3 py-3 font-medium whitespace-nowrap flex">
                  <RightMarkIcon />
                </th>
                <td className="py-3">
                  <span className="capitalize">item</span>
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-gray-200 dark:border-darkBorder dark:bg-lightDark h-9 rounded-lg pr-1.5 mr-6 w-24 px-2 text-center"
                    placeholder="e.g - 1299"
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-gray-200 dark:border-darkBorder dark:bg-lightDark h-9 rounded-lg pr-1.5 mr-6 w-24 px-2 text-center"
                    placeholder="55"
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-gray-200 dark:border-darkBorder dark:bg-lightDark h-9 rounded-lg pr-1.5 mr-6 w-24 px-2 text-center"
                    placeholder="75"
                  />
                </td>
                <td className="py-3">
                  <EditIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VariationUpdate;
