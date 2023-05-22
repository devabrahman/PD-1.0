import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';
import { FunnelIcon, StarIcon } from '@heroicons/react/24/outline';
import MenuTransition from './MenuTransition';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filters = () => {
  const [status, setStatus] = useState('');

  return (
    <Menu as="div" className="relative z-20 inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white dark:bg-dark hover px-2.5 py-1.5 text-sm focus:outline-none focus-visible:ring-0 transform transition-all duration-300 hover:scale-95 hover:border hover:border-gray-200">
        <FunnelIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
        {/* <FiltersIcon /> */}
      </Menu.Button>
      <MenuTransition as={Fragment}>
        <Menu.Items className="absolute left-0 mt-2 z-20 w-60 origin-top-left rounded-md overflow-hidden bg-white dark:bg-dark shadow-lg ring-0 focus:outline-none pt-3 pb-4">
          <div className="px-6">
            <p className="text-sm">Price</p>
            <Slider className="mt-2" />

            <p className="text-sm mt-6">Review</p>
            <div className="flex items-center mt-1">
              <StarIcon className="h-6 w-6 fill-amber-400 text-amber-400 cursor-pointer" />
              <StarIcon className="h-6 w-6 fill-amber-400 text-amber-400 cursor-pointer" />
              <StarIcon className="h-6 w-6 fill-amber-400 text-amber-400 cursor-pointer" />
              <StarIcon className="h-6 w-6 fill-amber-400 text-amber-400 cursor-pointer" />
              <StarIcon className="h-6 w-6 text-gray-300 cursor-pointer" />
            </div>

            <p className="text-sm mt-6">Status</p>
            <div className="grid grid-cols-2 gap-2 items-center mt-1">
              <button
                className={` ${
                  status === 'inStock'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-lightDark text-gray-900 dark:text-white'
                } w-full text-xs px-1 py-1.5 rounded-md hover:bg-blue-500 hover:text-white`}
                onClick={() => setStatus('inStock')}>
                In Stock
              </button>
              <button
                className={` ${
                  status === 'outOfStock'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-lightDark dark:text-white text-gray-900'
                } w-full text-xs px-1 py-1.5 rounded-md hover:bg-blue-500 hover:text-white`}
                onClick={() => setStatus('outOfStock')}>
                Out of Stock
              </button>
            </div>

            <p className="text-sm mt-6">Category</p>
            <select
              name=""
              id=""
              className="bg-transparent border dark:bg-lightDark border-gray-300 rounded-lg px-2 py-2 w-full mt-2 text-xs outline-none focus:outline-none focus:ring-0">
              <option value="">Laptop</option>
              <option value="">Mobile Phone</option>
              <option value="">Clothes</option>
            </select>
          </div>
        </Menu.Items>
      </MenuTransition>
    </Menu>
  );
};

export default Filters;
