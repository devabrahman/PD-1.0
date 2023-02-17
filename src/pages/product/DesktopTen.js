import Navigation from 'components/common/Navigation';
import OptionIcon from '../../assets/Images/products/OptionIcon.png';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import { PlusIcon } from '@heroicons/react/24/outline';
import SettingIcon from 'components/SVGIcons/SettingIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import { BiX, BiChevronDown } from 'react-icons/bi';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import ShippingIcon from '../../assets/Images/products/ShippingIcon.png';
import SearchEngineIcon from '../../assets/Images/products/SearchEngineIcon.png';

const DesktopTen = () => {
  return (
    <section className="grid grid-cols-12 h-screen overflow-hidden overflow-y-scroll">
      <section className="col-start-1 col-end-3">
        <div className="bg-blue-50 w-full h-full block">
          <Navigation />
        </div>
      </section>
      <section className="col-start-3 col-end-13 ml-8 mr-16 mt-16">
        <div>
          <h5 className="font-medium text-xl">SKU (Stock Keeping Unit)</h5>
          <input
            type="text"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] h-9 mt-2 rounded-[8px] w-1/2 pr-1.5"
          />
        </div>
        <div className="my-5 w-1/3">
          <div className="flex items-center">
            <RightMarkIcon className="h-3 w-3" />
            <h5 className="font-medium text-xl">Quantity</h5>
          </div>
          <p className="text-[10px] text-[#302323] flex justify-end m-0 -mb-2 p-0">Available</p>
          <input
            type="number"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5"
            placeholder="100"
          />
        </div>

        <div className="my-5">
          <div className="flex">
            <img src={OptionIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Variations</h5>
          </div>
          <div className="border w-4/6 border-[#D6D6D6]/60 rounded-xl my-2">
            <div className="ml-4 flex items-center">
              <RightMarkIcon className="h-2 w-2" />
              <p className="">Add variation like Color, Size, etc</p>
            </div>
            <hr className="h-0.5 w-full bg-[#CDCDCD]/20" />
            <div className="w-3/5 mx-10 my-3">
              <p className="">Variation name</p>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-6 mr-6" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                  placeholder="Color"
                />
                <DeleteIcon className="w-7 h-10" />
              </div>
            </div>
            <div className="w-3/5 mx-14 my-3 mb-16">
              <p className="ml-4">Variation values</p>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-4 mr-6 opacity-25" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-4/5 pr-1.5 mr-6"
                  placeholder="Black"
                />
                <DeleteIcon className="w-8 h-10" />
              </div>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-4 mr-7 opacity-25" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                  placeholder="White"
                />
                <div className="flex space-x-2 mt-2 -ml-3">
                  <DeleteIcon className="w-7 h-10" />
                  <PlusIcon className="w-7 h-7 bg-[#1C92FF] text-white p-1 rounded-xl" />
                </div>
              </div>
              <div className="flex items-center ml-8">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-5/6 pr-1.5 mr-6"
                  placeholder="Add another value"
                />
                <DeleteIcon className="w-7 h-10" />
              </div>
            </div>

            <div className="w-3/5 mx-10 my-3">
              <p className="">Variation name</p>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-6 mr-6" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                  placeholder="Storage"
                />
                <DeleteIcon className="w-7 h-10" />
              </div>
            </div>

            <div className="w-3/5 mx-14 my-3 mb-16">
              <p className="ml-6">Variation values</p>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-4 mr-7 opacity-25" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-3/4 pr-1.5 mr-6"
                  placeholder="256GB"
                />
                <div className="flex gap-3 mt-2 ml-4">
                  <DeleteIcon className="w-7 h-10" />
                  <PlusIcon className="w-7 h-7 bg-[#1C92FF] text-white p-1 rounded-xl" />
                </div>
              </div>
            </div>

            <div className="w-3/5 mx-10 my-3">
              <p className="">Variation name</p>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-6 mr-6" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                  placeholder="RAM"
                />
                <DeleteIcon className="w-7 h-10" />
              </div>
            </div>

            <div className="w-3/5 mx-14 my-3 mb-16">
              <p className="ml-6">Variation values</p>
              <div className="flex items-center">
                <SettingIcon className="w-5 h-6 -ml-4 mr-7 opacity-25" />
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-3/4 pr-1.5 mr-6"
                  placeholder="8GB"
                />
                <div className="flex gap-3 mt-2">
                  <DeleteIcon className="w-7 h-10" />
                  <PlusIcon className="w-7 h-7 bg-[#1C92FF] text-white p-1 rounded-xl" />
                </div>
              </div>
            </div>
            <hr className="h-0.5 w-11/12 bg-[#CDCDCD]/20 ml-6" />
            <div className="flex justify-between items-center ml-5">
              <p className="text-accent/80">+ Add another option</p>
              <div className="bg-primary text-xl px-8 py-2 rounded-xl text-white mr-5 my-2">
                Done
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="flex">
            <h5 className="font-medium text-xl ml-2">Variations</h5>
          </div>
          <div className="border w-4/6 border-[#D6D6D6]/60 rounded-xl my-2">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  <SettingIcon className="w-5 h-6 mr-7" />
                  <p className="text-xl font-medium">Color</p>
                </div>
                <EditIcon />
              </div>
              <div className="flex">
                <div className="bg-green/20 rounded-md w-min flex items-center ml-10">
                  <span className="text-xs py-1.5 px-2 font-medium">Black</span>
                  <BiX />
                </div>
                <div className="bg-green/20 rounded-md w-min flex items-center ml-10">
                  <span className="text-xs py-1.5 px-2 font-medium">White</span>
                  <BiX />
                </div>
              </div>
            </div>
            <hr className="h-1.5 w-11/12 ml-8" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  <SettingIcon className="w-5 h-6 mr-7" />
                  <p className="text-xl font-medium">Color</p>
                </div>
                <EditIcon />
              </div>
              <div className="flex">
                <div className="bg-green/20 rounded-md w-min flex items-center ml-10">
                  <span className="text-xs py-1.5 px-2 font-medium">256GB</span>
                  <BiX />
                </div>
                <div className="bg-green/20 rounded-md w-min flex items-center ml-10">
                  <span className="text-xs py-1.5 px-2 font-medium">512GB</span>
                  <BiX />
                </div>
              </div>
            </div>
            <hr className="h-1.5 w-11/12 ml-8" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex">
                  <SettingIcon className="w-5 h-6 mr-7" />
                  <p className="text-xl font-medium">Color</p>
                </div>
                <EditIcon />
              </div>
              <div className="flex">
                <div className="bg-green/20 rounded-md w-min flex items-center ml-10">
                  <span className="text-xs py-1.5 px-2 font-medium">8GB</span>
                  <BiX />
                </div>
                <div className="bg-green/20 rounded-md w-min flex items-center ml-10">
                  <span className="text-xs py-1.5 px-2 font-medium">16GB</span>
                  <BiX />
                </div>
              </div>
            </div>
          </div>
        </div>

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

        <div className="my-5">
          <div className="flex">
            <img src={ShippingIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Shipping</h5>
          </div>
          <div className="border w-4/6 border-[#D6D6D6]/60 rounded-xl my-2">
            <div className="flex my-2 mx-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="ml-3">This is a physical product</p>
            </div>
            <hr className="h-0.5 w-full bg-[#CDCDCD]/20" />
            <p className="px-2 py-3">
              Customers won’t enter their shipping address or choose a shipping method when buying
              this product.
            </p>
          </div>
        </div>
        <div className="my-5">
          <div className="flex">
            <img src={SearchEngineIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Search engine listing</h5>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] h-9 mt-3 rounded-[8px] w-4/6 pr-1.5"
            placeholder="Add a title and description to see how this product might appear in a search engine listing"
          />
        </div>
      </section>
    </section>
  );
};

export default DesktopTen;
