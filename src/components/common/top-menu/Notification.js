import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import NotificationIcon from 'components/SVGIcons/NotificationIcon';
import React from 'react';

const Notification = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <div className="relative bg-white dark:bg-lightDark transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 dark:border-darkBorder table-shadow rounded-xl p-2.5 grid place-content-center cursor-pointer grid-cols-2 gap-x-1.5">
          <NotificationIcon />
          <span className="rounded-full bg-red-500 text-white text-xs w-[18px] h-[18px] inline-flex justify-center items-center">
            1
          </span>
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute min-w-max z-10 -right-2 mt-1.5 bg-white dark:bg-lightDark p-4 pl-8 rounded-3xl input-back-box-shadow">
        <ul className="space-y-2 list-disc">
          <li className="flex gap-[14px] items-center">
            <div className="w-[30px] h-[30px] bg-primary rounded-full position-center">
              <NotificationIcon className="stroke-white dark:stroke-slate-900" />
            </div>
            <div className="font-[13px]">
              <p className="">You have notifications</p>
              <p className="">Body of simple notifications</p>
              <span className=" cursor-pointer text-[#F4316B]">Show Toast</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-gray-50 dark:bg-darkBorder position-center self-start cursor-pointer mt-2">
              <ChevronDownIcon strokeWidth={2} className="w-5 text-[#F4316B]" />
            </div>
          </li>
        </ul>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default Notification;
