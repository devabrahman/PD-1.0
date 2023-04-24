import { Popover } from '@headlessui/react';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';

const TakeAnAction = () => {
  const [date, setDate] = useState([
    {
      startDate: '',
      endDate: ''
    }
  ]);

  return (
    <div className="w-full rounded-xl shadow-lg shadow-gray-100 mt-5 px-5 py-3 space-y-5 bg-white dark:bg-lightDark">
      <p className="text-[#424141] dark:text-white font-medium text-base block">Take an action</p>

      <div className="flex items-center gap-2 text-sm">
        <MapPinIcon className="w-5" />
        <p>Status - </p>

        <select className="bg-blue-50 outline-none selected:text-bold space-y-2 border border-gray-200 rounded-lg pl-2.5 py-1 ml-2 text-sm cursor-pointer">
          <option value="Draft">Draft</option>
          <option value="Publish">Publish</option>
        </select>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <CalendarDaysIcon className="w-5" />
        <p className="text-sm">Schedule - </p>

        <Popover className="">
          <Popover.Button className="text-sm border border-gray-300 px-3 py-1.5 rounded-lg hover:border-blue-400 transform transition-all duration-300 hover:px-4">
            {format(Date.now(), 'dd , MMM , yyyy')}
            {console.log(JSON.stringify(date?.start))}
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
        </Popover>
      </div>

      <hr />

      <div>
        <div className="text-right m-[0px]">
          <button
            type="submit"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform transition-all duration-300 px-3 py-1.5 rounded-lg inline-block text-right mb-2.5 text-sm">
            Draft
          </button>
          <button
            type="submit"
            className="bg-blue-400 text-white border border-blue-400 px-3 py-1.5 rounded-lg text-right mb-2.5 text-sm ml-4 transform transition-all duration-300 hover:scale-90">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeAnAction;
