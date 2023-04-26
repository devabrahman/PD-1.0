import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FunnelIcon } from '@heroicons/react/24/outline';

const Filters = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white hover px-2.5 py-1.5 text-sm focus:outline-none focus-visible:ring-0 transform transition-all duration-300 hover:scale-95 hover:border hover:border-gray-200">
        <FunnelIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute left-0 mt-2 z-10 w-56 origin-top-left rounded-md overflow-hidden bg-white shadow-lg ring-0 focus:outline-none">
          <Menu.Item>
            <button className="group flex w-full items-center px-2 py-2 text-sm hover:bg-blue-400 hover:text-white">
              Archive
            </button>
          </Menu.Item>

          <span className="border-b h-[1px] bg-gray-400 block"></span>

          <Menu.Item>
            <button className="group flex w-full items-center px-2 py-2 text-sm hover:bg-blue-400 hover:text-white">
              Edit
            </button>
          </Menu.Item>

          <span className="border-b h-[1px] bg-gray-400 block"></span>

          <Menu.Item>
            <button className="group flex w-full items-center px-2 py-2 text-sm hover:bg-blue-400 hover:text-white">
              Delete
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Filters;
