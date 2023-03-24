import BuildingIcon from 'components/SVGIcons/BuildingIcon';
import CoffeeIcon from 'components/SVGIcons/CoffeeIcon';
import SimCardIcon from 'components/SVGIcons/SimCardIcon';
import TagIcon from 'components/SVGIcons/TagIcon';
import React from 'react';

const Payment = ({ className }) => {
  return (
    <div className={className}>
      <div className="bg-white input-accent-box-shadow px-5 py-[15px] rounded-xl col-span-1 min-w-[344px]">
        <p className="font-medium text-lg">payment</p>
        <section>
          <div className="flex gap-4 items-center mt-6">
            <div className="bg-slate-100 rounded-lg p-1">
              <TagIcon className="inline-block" />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-4 text-xs">
                <p className="capitalize ">account</p>
                <p className="capitalize font-medium ">
                  $3,241<span className="text-[#A9A9A9]">/$10,000</span>
                </p>
              </div>
              <div className="text-center h-1.5 text-xs text-white bg-[#75E898] rounded-md">
                <span className="w-1/3 block rounded-md h-1.5 bg-[#5798F6]"></span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <div className="bg-slate-100 rounded-lg p-1">
              <SimCardIcon className="inline-block" />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-4 text-xs">
                <p className="capitalize ">account</p>
                <p className="capitalize font-medium ">
                  $3,241<span className="text-[#A9A9A9]">/$10,000</span>
                </p>
              </div>
              <div className="text-center h-1.5 text-xs text-white bg-[#75E898] rounded-md">
                <span className="w-1/3 block rounded-md h-1.5 bg-[#5798F6]"></span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <div className="bg-slate-100 rounded-lg p-1">
              <CoffeeIcon className="inline-block" />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-4 text-xs">
                <p className="capitalize ">account</p>
                <p className="capitalize font-medium ">
                  $3,241<span className="text-[#A9A9A9]">/$10,000</span>
                </p>
              </div>
              <div className="text-center h-1.5 text-xs text-white bg-[#75E898] rounded-md">
                <span className="w-10/12 block rounded-md h-1.5 bg-[#5798F6]"></span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-6">
            <div className="bg-slate-100 rounded-lg p-1">
              <BuildingIcon className="inline-block" />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-4 text-xs">
                <p className="capitalize ">account</p>
                <p className="capitalize font-medium ">
                  $3,241<span className="text-[#A9A9A9]">/$10,000</span>
                </p>
              </div>
              <div className="text-center h-1.5 text-xs text-white bg-[#75E898] rounded-md">
                <span className="w-1/3 block rounded-md h-1.5 bg-[#5798F6]"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
