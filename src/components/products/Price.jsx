import { useState } from 'react';
import { addDays } from 'date-fns';
import Calendar from 'components/common/Calendar';
import CalenderIcon from 'components/SVGIcons/CalenderIcon';

const Price = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <div className="rounded-xl mt-5 input-accent-box-shadow w-full flex  gap-7 px-[15px] pt-3 pb-[18px] bg-white">
      <div className="w-full ">
        <label className="block font-medium text-gray-600" htmlFor="normalPrice">
          Regular - $
        </label>
        <input
          type="number"
          name="normalPrice"
          id="normalPrice"
          placeholder="$ 00.0"
          className="border border-gray-200 focus:ring-1 focus:ring-blue-200 focus:ring-opacity-5 pl-3 dark:bg-lightDark  h-9 mt-3 rounded-[7px] w-full pr-1.5"
          value={97}
        />
      </div>

      <div className="w-full relative">
        <label className="block font-medium text-gray-600" htmlFor="specialPrice">
          Special - $
        </label>
        <input
          type="text"
          name="specialPrice"
          id="specialPrice"
          placeholder="$ 00.0"
          className="border border-gray-200 focus:ring-1 focus:ring-blue-200 focus:ring-opacity-5 pl-3  dark:bg-lightDark h-9 mt-3 rounded-[7px] w-full pr-1.5 focus:focused-input"
          value={57}
        />
        <div className="flex items-center justify-between gap-2 absolute bottom-[11%] right-[15px] z-10">
          <span className="h-4 rounded-sm w-0.5 bg-pdGrey block"></span>
          <div className="cursor-pointer">
            <Calendar
              date={date}
              setDate={(value) => setDate(value)}
              icon={<CalenderIcon className="mr-3" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
