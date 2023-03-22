/* eslint-disable no-unused-vars */

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Sector } from 'recharts';

const Activity = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const data = [
    { name: '$2400', value: 2400 },
    { name: '$2567', value: 2567 },
    { name: '$1398', value: 1398 },
    { name: '$1800', value: 1800 }
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={'11px'}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 2;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
  const COLORS = ['#5484FF', '#6CFFB9', '#24303A', '#FF772B'];
  return (
    <div className={className}>
      <div className="bg-white input-accent-box-shadow px-5 py-[30px] rounded-xl">
        <div className="">
          <div className="flex justify-between mb-5">
            <p className="font-bold text-2xl text-[#6B7A99]">Activity</p>
            <form action="">
              <select className="outline-none border border-[#8C89B4]/80 rounded-[7px] text-sm text-[#948FD9] px-1.5">
                <option className="text-black text-sm" disabled selected>
                  Month
                </option>
                <option className="text-black text-sm">January</option>
                <option className="text-black text-sm">February</option>
                <option className="text-black text-sm">March</option>
                <option className="text-black text-sm">April</option>
                <option className="text-black text-sm">May</option>
                <option className="text-black text-sm">June</option>
                <option className="text-black text-sm">July</option>
                <option className="text-black text-sm">August</option>
                <option className="text-black text-sm">September</option>
                <option className="text-black text-sm">October</option>
                <option className="text-black text-sm">November</option>
                <option className="text-black text-sm">December</option>
              </select>
            </form>
          </div>
          <div width="700" height="700" className="h-[190px] w-[190px] m-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={180} height={180}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  label={renderCustomizedLabel}
                  labelLine={false}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button className="flex items-center text-xs w-full py-2.5 mt-4 gap-5 justify-center border border-[#99C3FF] text-[#6B7A99] rounded-lg">
          View all activity
          <ArrowLongRightIcon className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default Activity;
