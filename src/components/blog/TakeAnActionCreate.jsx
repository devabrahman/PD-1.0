import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TakeAnAction = () => {
  const [publishDate, setPublishDate] = useState(new Date());

  return (
    <div className="w-full rounded-xl shadow-lg shadow-gray-100 dark:shadow-gray-900 mt-5 px-5 py-3 space-y-5 bg-white dark:bg-dark">
      <p className="text-[#424141] dark:text-white font-medium text-base block">Take an action</p>

      <div className="flex justify-between items-center w-full space-x-4 text-sm">
        <div className="flex items-center">
          <MapPinIcon className="w-6 h-6 mr-1.5" />
          <p>Status - </p>
        </div>

        <select className="bg-blue-50 dark:bg-lightDark outline-none selected:text-bold space-y-2 border border-gray-200 rounded-lg pl-2.5 py-1 ml-2 text-sm cursor-pointer">
          <option value="Draft">Draft</option>
          <option value="Publish">Publish</option>
        </select>
      </div>

      <div className="grid grid-cols-12 items-center space-x-2 mt-4">
        <CalendarDaysIcon className="col-span-1 w-6 h-6" />
        <p className="col-span-4 text-sm">Schedule - </p>
        <div className="col-span-7">
          <DatePicker
            selected={publishDate}
            onChange={(date) => setPublishDate(date)}
            className="w-full border border-gray-300 hover:border-blue-400 cursor-pointer rounded-xl py-1 dark:bg-lightDark"
            minDate={new Date()}
            placeholderText="No date..."
          />
        </div>
      </div>

      <hr />

      <div className="text-right m-[0px]">
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 hover:px-4 py-1.5 rounded-lg text-right mb-2.5 text-sm ml-4 transform transition-all duration-300">
          Publish
        </button>
      </div>
    </div>
  );
};

export default TakeAnAction;
