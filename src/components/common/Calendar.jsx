import React from 'react';
import { Popover } from '@headlessui/react';
import { DateRangePicker } from 'react-date-range';
const Calendar = ({ date, setDate, icon }) => {
  return (
    <Popover className="relative top-0.5">
      <Popover.Button>{icon}</Popover.Button>

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
  );
};

export default Calendar;
