import { CalendarDaysIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const DashboardLineChart = () => {
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
        <div className="flex items-center border border-gray-200 rounded-md px-2 py-1.5 cursor-pointer -mt-3">
          <div className="rounded-md flex items-center gap-1.5 ">
            <CalendarDaysIcon className="h-5 w-5 stroke-blue-400" />
            <p className="text-[#A3AED0] text-[14px] font-medium">This month</p>
          </div>
          <ChevronDownIcon className="h-4 w-4 ml-3 text-blue-500" />
        </div>
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
