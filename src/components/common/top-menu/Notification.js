import { Popover } from '@headlessui/react';
import NotificationIcon from 'components/SVGIcons/NotificationIcon';
import React from 'react';

const Notification = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <div className="relative h-10 w-12 bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer">
          <NotificationIcon />
          <span className="h-2 w-2 rounded-full bg-red-500 absolute right-3 top-2"></span>
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute min-w-max z-10 -right-2 mt-1.5 bg-white p-4 pl-8 rounded-lg input-accent-box-shadow">
        <ul className="space-y-2 list-disc">
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
          <li>List items</li>
        </ul>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default Notification;
