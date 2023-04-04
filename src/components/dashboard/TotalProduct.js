import { products } from 'api/products';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const TotalProduct = () => {
  const data = products;
  return (
    <div className="bg-white dark:bg-dark w-full input-accent-box-shadow px-5 py-[30px] rounded-xl">
      <div className="grid grid-cols-2">
        <div className="space-y-2 col-span-1">
          <p className="font-bold text-xs text-[#6B7A99]">Total Product</p>
          <p className="font-bold text-2xl text-[#6B7A99]">1,456</p>
        </div>

        <div className="col-span-1">
          <div width="650" height="700" className="h-16 w-[115px] ">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={115} height={300} data={data}>
                <Tooltip />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="sales"
                  strokeWidth={3}
                  stroke="#FF6734"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <span className="w-full block h-0.5 mt-5 mb-3 bg-[#FF6734]/10" />

      <div className="flex items-center gap-5 ">
        <p className="font-semibold text-[#8833FF] bg-[#8833FF]/10 px-2 py-1.5 rounded-sm text-xs">
          live
        </p>
        <p className="font-semibold text-[#6B7A99] text-xs">4 visitors</p>
        <p className="font-semibold text-[#6B7A99] text-xs">See Live View</p>
      </div>
    </div>
  );
};

export default TotalProduct;
