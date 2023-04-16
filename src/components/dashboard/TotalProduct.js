import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const TotalProduct = () => {
  const products = [
    {
      sales: 175,
      month: 'Jan'
    },
    {
      sales: 25,
      month: 'Feb'
    },
    {
      sales: 261,
      month: 'Mar'
    },
    {
      sales: 194,
      month: 'App'
    },
    {
      sales: 318,
      month: 'May'
    },
    {
      sales: 138,
      month: 'Jun'
    }
  ];

  return (
    <div className="bg-white dark:bg-dark w-full px-4 py-5 rounded-xl">
      <div className="flex justify-between">
        <p className="font-medium text-xs text-gray-500">Product&apos;s Today</p>
        <p className="font-semibold text-green-400 bg-green-100 px-3 py-[2px] rounded-full text-xs">
          Live
        </p>
      </div>
      <p className="col-span-1 font-bold text-2xl text-amber-500">1,456</p>

      <div width="650" height="700" className="h-16 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={115} height={300} data={products}>
            <CartesianGrid strokeDasharray="6 6" vertical={false} />
            <Tooltip />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="sales"
              strokeWidth={2.5}
              stroke="#FF6734"
              dot={false}
              enableBackground={true}
              style={{ background: '#FF6734' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <span className="w-full block h-[1px] mt-5 mb-3 bg-gray-200" />

      <div className="flex justify-between items-center gap-5 ">
        <p className="font-semibold text-gray-500 text-xs">4 visitors</p>
        <p className="font-semibold text-xs border border-amber-400 px-2 py-1 rounded-md cursor-pointer transform transition-all duration-300 hover:px-2.5 hover:bg-amber-400 hover:text-white hover:font-medium">
          Live View
        </p>
      </div>
    </div>
  );
};

export default TotalProduct;
