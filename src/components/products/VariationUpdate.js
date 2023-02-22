import EditIcon from 'components/SVGIcons/Editicon';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import { BiChevronDown } from 'react-icons/bi';

const VariationUpdate = () => {
  return (
    <div className="my-10 w-4/6">
      <div className="flex justify-between">
        <h5 className="font-medium text-xl ml-2">Variations</h5>
        <p className="text-accent/80">+ Add another option</p>
      </div>
      <div className="border w-full border-[#D6D6D6]/70 rounded-xl my-2">
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
              <tr className="border-b text-[#848484] dark:border-[#E6E6E6]">
                <th scope="col" className="pl-3 py-3">
                  <RectangleIcon />
                </th>
                <th scope="col" className="py-3">
                  Variant
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-4 py-3">
                  SKU
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-[#E6E6E6]">
                <th scope="row" className="pl-3 py-3 font-medium whitespace-nowrap flex">
                  <RightMarkIcon />
                  <RightMarkIcon />
                </th>
                <td className="py-3">Black/256GB/8GB</td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <EditIcon />
                </td>
              </tr>
              <tr className="border-b dark:border-[#E6E6E6]">
                <th scope="row" className="pl-3 py-3 font-medium whitespace-nowrap flex">
                  <RightMarkIcon />
                  <RightMarkIcon />
                </th>
                <td className="py-3">Black/256GB/8GB</td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <EditIcon />
                </td>
              </tr>
              <tr className="border-b dark:border-[#E6E6E6]">
                <th scope="row" className="pl-3 py-3 font-medium whitespace-nowrap flex">
                  <RightMarkIcon />
                  <RightMarkIcon />
                </th>
                <td className="py-3">Black/256GB/8GB</td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
                  />
                </td>
                <td className="py-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border border-[#B9B9B9] h-9 rounded-xl pr-1.5 mr-6 w-24"
                    placeholder=""
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
