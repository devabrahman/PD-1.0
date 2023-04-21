/* eslint-disable no-unused-vars */
import EditIcon from 'components/SVGIcons/Editicon';
import SettingIcon from 'components/SVGIcons/SettingIcon';
import { BiX } from 'react-icons/bi';

const VariationList = ({ variation, setVariation }) => {
  return (
    <div className="my-5 bg-white px-3 py-2 rounded-lg shadow-xl shadow-gray-100 mt-10">
      <h3 className="block font-medium ml-2">Variations name</h3>

      <div className="w-full borde rounded-xl my-2">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <SettingIcon className="w-4 h-4 mr-7" />
              <p className="font-medium capitalize">Color</p>
            </div>
            <EditIcon />
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center ml-10 px-1 py-1 border border-amber-400 rounded-lg hover:bg-amber-400 hover:text-white transform transition-all duration-500 ">
              <span className="text-xs py-1 px-2 font-medium">Space Gray</span>
              <BiX className="h-4 w-4 cursor-pointer" />
            </div>
            <div className="flex items-center ml px-1 py-1 border border-amber-400 rounded-lg hover:bg-amber-400 hover:text-white transform transition-all duration-500 ">
              <span className="text-xs py-1 px-2 font-medium">Mat Finish Black</span>
              <BiX className="h-4 w-4 cursor-pointer" />
            </div>
            <div className="flex items-center px-1 py-1 border border-amber-400 rounded-lg hover:bg-amber-400 hover:text-white transform transition-all duration-500 ">
              <span className="text-xs py-1 px-2 font-medium">Moon White</span>
              <BiX className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariationList;
