import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import StarIcon from 'components/SVGIcons/StarIcon';
import React from 'react';

const OtherProducts = () => {
  return (
    <table className="m-12 mx-auto">
      <caption className="text-left text-xl my-2 py-5">Other Products</caption>
      <thead>
        <tr className="uppercase text-[#5798F6] text-sm">
          <th className="text-left pl-12">Product</th>
          <th>price</th>
          <th>review</th>
          <th>availability</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="rounded-xl shadow-lg shadow-[#87CEEB]/25">
          <td className="pr-48 py-2">
            <div className="flex">
              <RightMarkIcon />
              <span>Mackbook Pro</span>
            </div>
            <p className="ml-11 -mt-5 text-xs text-[rgb(185,185,185)]">Laptop</p>
          </td>

          <td className="px-16">$259</td>
          <td className="px-12">
            <StarIcon />
          </td>
          <td className="px-12">
            <hr className="w-28 h-0.5 my-1 bg-[#13FF65] border-0 rounded md:my-10" />
          </td>
          <td className="px-12">624548</td>
        </tr>
        <tr className="rounded-xl shadow-lg shadow-[#87CEEB]/25">
          <td className="pr-24 py-4">
            <div className="flex">
              <RectangleIcon className="" />
              <span>Mackbook Pro</span>
            </div>
            <p className="ml-11 -mt-5 text-xs text-[#B9B9B9]">Laptop</p>
          </td>
          <td className="px-16">$147</td>
          <td className="px-12">
            <StarIcon />
          </td>
          <td className="px-10">
            <hr className="w-20 h-0.5 my-1 bg-[#FE516D] border-0 rounded md:my-10" />
          </td>
          <td className="px-12">189676</td>
        </tr>
        <tr className="rounded-xl shadow-lg shadow-[#87CEEB]/25">
          <td className="pr-24 py-4">
            <div className="flex">
              <RightMarkIcon className="h-5 w-5" />
              <span>Mackbook Pro</span>
            </div>
            <p className="ml-11 -mt-5 text-xs text-[#B9B9B9]">Laptop</p>
          </td>
          <td className="px-16">$369</td>
          <td className="px-12">
            <StarIcon />
          </td>
          <td className="px-10">
            <hr className="w-16 h-0.5 my-1 bg-[#FE516D] border-0 rounded md:my-10" />
          </td>
          <td className="px-12">194556</td>
        </tr>
      </tbody>
    </table>
    // <div className="mx-14">
    //   <p>Other Products</p>
    //   <div className="grid grid-cols-12">
    //     <div className="grid grid-cols-4 bg-red-300">
    //       <p>Product</p>
    //       <div>
    //         <div className="flex ">
    //           <CorrectSignIcon className="h-5 w-5" />
    //           <span>Mackbook Pro</span>{' '}
    //         </div>
    //         <p className="ml-11 -mt-5 text-xs text-[#B9B9B9]">Laptop</p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2">
    //       <p>Price</p>
    //     </div>
    //     <div className="grid grid-cols-2">
    //       <p>Review</p>
    //     </div>
    //     <div className="grid grid-cols-2">
    //       <p>Availability</p>
    //     </div>
    //     <div className="grid grid-cols-2">
    //       <p>Id</p>
    //     </div>
    //     <CorrectSignIcon></CorrectSignIcon>
    //   </div>
    // </div>
  );
};

export default OtherProducts;
