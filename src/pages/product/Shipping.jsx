// importing icons
import ShippingIcon from 'assets/Images/icons/ShippingIcon.png';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';
import { useState } from 'react';

const Shipping = () => {
  const [physicalProduct, setPhysicalProduct] = useState(false);

  return (
    <div className="my-5 bg-white px-3 py-4 rounded-lg shadow-xl shadow-gray-100 mt-8">
      <div className="flex">
        <img src={ShippingIcon} alt="Option icon" className="h-6 w-5" />
        <label className="block font-medium ml-2">Shipping</label>
      </div>
      <div className="border w-full border-[#D6D6D6]/60 rounded-xl my-2">
        <div className="flex items-center gap-1.5 my-2 mx-3">
          <div className="w-8 flex justify-center items-center">
            <input
              type="checkbox"
              checked={physicalProduct || false}
              className="check-input cursor-pointer"
              onChange={() => {}}
            />
            <label
              onClick={() => setPhysicalProduct(physicalProduct ? false : true)}
              htmlFor="input-2"
              className={`checkbox dark:fill-dark cursor-pointer border border-[#635e5e] ${
                physicalProduct ? 'rounded-[9px] bg-[#48f685] w-6 h-6' : 'w-4 h-4 rounded-[4px]'
              }`}>
              <CheckMarkIcon className="dark:stroke-dark stroke-white" />
            </label>
          </div>
          <p>This is a physical product</p>
        </div>
        {physicalProduct && (
          <>
            <hr className="h-0.5 w-full bg-[#CDCDCD]/20 dark:bg-lightDark" />
            <div className="px-3">
              <label className="block text-[#302323] dark:text-white py-4 font-medium">
                Customs information
              </label>

              <div className="ml-6">
                <label htmlFor="" className="text-[15px] pb-3 block">
                  Country/Region of origin
                </label>
                <select
                  name=""
                  id=""
                  placeholder="Select country or region"
                  className="border border-gray-300 dark:border-darkBorder dark:bg-lightDark rounded-xl block w-5/12 outline-none py-2 px-4 text-[15px]">
                  <option disabled value="" className="text-[#848484] dark:text-white text-[15px] ">
                    Select country or region
                  </option>
                  <option value="">Bangladesh</option>
                  <option value="">India</option>
                  <option value="">USA</option>
                  <option value="">UEA</option>
                </select>
              </div>

              <div className="my-7 ml-6">
                <label htmlFor="" className="text-[15px] pb-3 block">
                  HS (Harmonized System) code
                </label>
                <input
                  name=""
                  id=""
                  placeholder="Search or enter HS code"
                  className="border border-gray-300 dark:border-darkBorder dark:bg-lightDark rounded-xl block w-5/12 outline-none py-2 px-4 text-[15px]"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shipping;
