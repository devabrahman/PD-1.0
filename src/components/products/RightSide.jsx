import { useState } from 'react';
import { addDays, format } from 'date-fns';

// importing components
import ImageDropDown from 'components/common/ImageDropDown';
import CategoryList from 'components/products/CategoryList';
import Calendar from 'components/common/Calendar';
import ProductTag from 'components/products/ProductTag';

// importing icons
import CalenderIcon from 'components/SVGIcons/CalenderIcon';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
const RightSide = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <section className="w-1/3 space-y-10">
      <div className="w-full rounded-xl input-accent-box-shadow mt-5 px-5 py-3 space-y-5 bg-white dark:bg-lightDark">
        <label className="text-[#424141] dark:text-white font-medium text-base block">
          Publish
        </label>
        <div className="flex justify-between">
          <button className="border border-accent/30  px-2 py-1.5 rounded-lg text-sm input-back-box-shadow">
            Save Draft
          </button>
          <button className="border border-accent/30 px-2 py-1.5 rounded-lg text-sm input-back-box-shadow">
            Preview
          </button>
        </div>
        <div className="flex gap-4 text-sm pt-2">
          <MapPinIcon className="w-5" />
          <p>
            Status:{' '}
            <select className=" bg-accent/10 p-0.5 rounded-sm outline-none selected:text-bold space-y-2">
              <option value="Draft">Draft</option>
              <option value="Publish">Publish</option>
            </select>
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <CalendarDaysIcon className="w-5" />
          <p className="">
            Publish Date:{' '}
            <span className="pl-1 font-medium cursor-pointer">
              {format(Date.now(), 'dd , MMM , yyyy')}
            </span>
          </p>
        </div>
        <hr />
        <div>
          <p className="text-xs mb-2 text-primary cursor pointer">Copy a new Draft</p>
          <div className="text-right m-[0px]">
            <button
              type="submit"
              className="border border-accent text-primary px-2 py-1.5 rounded-lg inline-block text-right mb-2.5 input-back-box-shadow text-sm">
              Publish
            </button>
          </div>
        </div>
      </div>

      <CategoryList />

      <div className="rounded-xl mt-5 input-accent-box-shadow w-full flex  gap-7 px-[15px] pt-3 pb-[18px] bg-white">
        <div className="w-full ">
          <label className="block font-medium ">Regular Price</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="$ 00.0"
            className="border pl-3 border-accent/30 dark:bg-lightDark  h-9 mt-3 rounded-[7px] w-full pr-1.5"
          />
        </div>

        <div className="w-full relative">
          <label className="block font-medium ">Special Price</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="$ 00.0"
            className="border pl-3 border-accent/30  dark:bg-lightDark h-9 mt-3 rounded-[7px] w-full pr-1.5 focus:focused-input"
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

      <ProductTag />

      <div className="py-5">
        <label className="block text-[#424141] font-medium text-base mb-1.5">Product Picture</label>
        <div className="p-2">
          <ImageDropDown />
        </div>
      </div>
    </section>
  );
};

export default RightSide;
