/* eslint-disable no-unused-vars */
import { Popover } from '@headlessui/react';
import { CalendarDaysIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const DashboardLineChart = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  // dummy data
  const data = [
    {
      price: 307,
      price2: 292,
      time: 'sep'
    },
    {
      price: 301,
      price2: 209,
      time: 'oct'
    },
    {
      price: 497,
      price2: 276,
      time: 'nov'
    },
    {
      price: 302,
      price2: 102,
      time: 'dev'
    },
    {
      price: 281,
      price2: 204,
      time: 'jan'
    },
    {
      price: 455,
      price2: 264,
      time: 'feb'
    }
  ];

  return (
    <section className="col-span-12 sm:col-span-9 bg-white dark:bg-black px-4 py-4 rounded-xl">
      <section className="flex justify-between items-center mb-7">
        {/* <Popover className="relative top-0.5">
          <Popover.Button>
            <div className="flex items-center border border-gray-200 rounded-md px-2 py-1.5 cursor-pointer -mt-3">
              <div className="rounded-md flex items-center gap-1.5 ">
                <CalendarDaysIcon className="h-5 w-5 stroke-blue-400" />
                <p className="text-[#A3AED0] text-[14px] font-medium">This month</p>
              </div>
              <ChevronDownIcon className="h-4 w-4 ml-3 text-blue-500" />
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 right-0 rounded-md bg-slate-600">
            <DateRangePicker
              onChange={(item) => setDate([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={date}
              direction="horizontal"
              preventSnapRefocus={true}
              calendarFocus="backwards"
            />
          </Popover.Panel>
        </Popover> */}

        <Listbox>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full flex items-center border border-gray-200 dark:border-gray-600 rounded-md px-2 py-1.5 cursor-pointer">
              <div className="rounded-md flex items-center gap-1.5 ">
                <CalendarDaysIcon className="h-5 w-5 stroke-blue-400" />
                <p className="text-[#A3AED0] text-[14px] font-medium">This month</p>
              </div>
              <ChevronDownIcon className="h-4 w-4 ml-3 text-blue-500" />
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-lightDark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? 'bg-black text-amber-900' : 'text-gray-900'
                    }`
                  }>
                  <span className={`block dark:text-gray-300 truncate`}>Last Week</span>
                </Listbox.Option>
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? 'bg-black text-amber-900' : 'text-gray-900'
                    }`
                  }>
                  <span className={`block dark:text-gray-300 truncate`}>Last Month</span>
                </Listbox.Option>
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? 'bg-black text-amber-900' : 'text-gray-900'
                    }`
                  }>
                  <span className={`block dark:text-gray-300 truncate`}>Last Year</span>
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        <div className="">
          <div className="col-span-">
            <p className="font-semibold text-2xl text-amber-500">$37.5K</p>
            <div className="text-[#A3AED0] font-DMSons flex items-center text-[14px]">
              <span>Total Spent</span>
              <ChevronUpIcon className="w-2.5 ml-1.5 fill-[#05CD99] mr-1" />
              <span className="text-[#05CD99] text-lg">+2.45%</span>
            </div>
          </div>
        </div>
      </section>

      <section width="650" height="730" className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="6 6" vertical={false} />
            <XAxis dataKey="time" />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="price"
              stroke="#5798F6"
              activeDot={{ r: 8, strokeWidth: 1 }}
              strokeWidth={3}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="price2"
              strokeWidth={3}
              stroke="#FF6734"
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </section>
  );
};

export default DashboardLineChart;
