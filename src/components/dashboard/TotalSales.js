import { products } from 'api/products';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const TotalSales = () => {
  const data = products;
  return (
    <div className="bg-white dark:bg-dark w-full input-accent-box-shadow px-5 py-[30px] rounded-xl">
      <div className="grid grid-cols-2">
        <div className="space-y-2 col-span-1">
          <p className="font-bold text-xs text-[#6B7A99]"> Total Sales</p>
          <p className="font-bold text-2xl text-[#6B7A99]">$281.90</p>
        </div>
        <div className="col-span-1">
          <div width="115" height="120" className="h-16 w-[115px] ">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={100} data={data}>
                <Tooltip />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="sales"
                  strokeWidth={3}
                  stroke="#2EE6CA"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <span className="w-full block h-0.5 mt-5 mb-3 bg-[#2EE6CA]/10" />
      <div className="flex items-center justify-between ">
        <p className="font-semibold text-[#6B7A99] text-xs">6 total orders</p>
        <p className="font-semibold text-[#6B7A99] text-xs">View report</p>
      </div>
    </div>
  );
};

export default TotalSales;
