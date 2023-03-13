import EditIcon from 'components/SVGIcons/Editicon';
import SettingIcon from 'components/SVGIcons/SettingIcon';
import { BiX } from 'react-icons/bi';

const VariationList = () => {
  return (
    <div className="my-5">
      <div className="flex">
        <h5 className="font-medium text-xl ml-2">Variations</h5>
      </div>
      <div className="border w-full border-[#D6D6D6]/60 rounded-xl my-2">
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
  );
};

export default VariationList;
