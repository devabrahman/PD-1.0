/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import SettingIcon from 'components/SVGIcons/SettingIcon';

import OptionIcon from 'assets/Images/icons/OptionIcon.png';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';
import { FcTodoList } from 'react-icons/fc';
import { Switch } from '@headlessui/react';

const NewVariation = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="my-5 bg-white rounded-xl">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-4">
          <FcTodoList className="h-6 w-6" />
          <div className="flex flex-col">
            <h5 className="font-medium">Variations</h5>
            <p className="text-xs">Color, Size, etc</p>
          </div>
        </div>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-green-400' : 'bg-gray-200'}
          relative inline-flex h-[25px] w-[53px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>

      {!!enabled && (
        <div className="border w-full border-[#D6D6D6]/60 py-2.5 rounded-xl my-2">
          <div className="w-3/5 mx-10 my-3">
            <label htmlFor="variation_name">Variation name</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border pl-3 border-gray-300 dark:border-darkBorder bg-white dark:bg-lightDark h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                id="variation_name"
                value="Variation title"
              />
              <span className="cursor-pointer">
                <DeleteIcon className="w-7 h-10" />
              </span>
            </div>
          </div>

          <div className="w-3/5 mx-14 my-3 mb-16">
            <p className="ml-4">Variation values</p>

            <div className="flex items-center">
              <input
                type="text"
                className="border pl-3 border-gray-300 dark:border-darkBorder bg-white dark:bg-lightDark h-9 mt-3 rounded-xl w-4/5 pr-1.5 mr-6"
                placeholder="Add another value"
                value="Variation value"
              />
              <span className="cursor-pointer mr-2">
                <DeleteIcon className="w-8 h-10 " />
              </span>
            </div>

            <div className="flex items-center">
              <input
                type="text"
                className="border pl-3 border-gray-300 dark:border-darkBorder bg-white dark:bg-lightDark h-9 mt-3 rounded-xl w-4/5 pr-1.5 mr-6"
                placeholder="Add another value"
                value="Variation value"
              />
              <span className="cursor-pointer mr-2">
                <DeleteIcon className="w-8 h-10 " />
              </span>
              <span>
                <PlusIcon className="w-7 h-7 bg-blue-400 text-white p-1 rounded-lg" />
              </span>
            </div>
          </div>
          <div className="w-3/5 mx-10 my-3">
            <label htmlFor="">Variation name</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border pl-3 border-gray-300 dark:border-darkBorder bg-white dark:bg-lightDark h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                id="variation_name"
              />
              <span className="cursor-pointer">
                <DeleteIcon className="w-7 h-10" />
              </span>
            </div>
          </div>

          <div className="w-3/5 mx-14 my-3 mb-16">
            <p className="ml-4">Variation values</p>

            <div className="flex items-center">
              <input
                type="text"
                className="border pl-3 border-gray-300 dark:border-darkBorder bg-white dark:bg-lightDark h-9 mt-3 rounded-xl w-4/5 pr-1.5 mr-6"
                placeholder="Add another value"
              />
              <span className="cursor-pointer mr-2">
                <DeleteIcon className="w-8 h-10 " />
              </span>
            </div>
          </div>

          <hr className="h-0.5 w-11/12 bg-[#CDCDCD]/20 ml-6" />
          <div className="flex justify-between items-center ml-5">
            <p className="text-accent/80 cursor-pointer">+ Add another option</p>
            <p className="bg-green-400 px-4 py-1.5 rounded-lg text-white mr-5 my-2">Done</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewVariation;
