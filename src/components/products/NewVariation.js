import { PlusIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import SettingIcon from 'components/SVGIcons/SettingIcon';

import OptionIcon from '../../assets/Images/products/OptionIcon.png'; //../../assets/Images/products/OptionIcon.png

const NewVariation = () => {
  return (
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
          <div className="bg-primary text-xl px-8 py-2 rounded-xl text-white mr-5 my-2">Done</div>
        </div>
      </div>
    </div>
  );
};

export default NewVariation;
