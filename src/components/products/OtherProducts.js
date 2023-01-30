import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import StarIcon from 'components/SVGIcons/StarIcon';

const OtherProducts = () => {
  return (
    <table className="w-full">
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
          <td className="pr-64 py-2">
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
          <td className="px-8">
            <div className="w-full bg-[#c6ecfb] rounded-full h-0.5 dark:bg-[#c6ecfb]">
              <hr className="w-11/12 h-0.5  bg-[#13FF65] border-0 rounded " />
            </div>
          </td>
          <td className="px-12">624548</td>
        </tr>
        <tr className="rounded-xl shadow-lg shadow-[#87CEEB]/25">
          <td className="pr-60 py-4">
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
          <td className="px-8">
            <div className="w-full bg-[#c6ecfb] rounded-full h-0.5 dark:bg-[#c6ecfb]">
              <hr className="w-8/12 h-0.5  bg-[#FE516D] border-0 rounded " />
            </div>
          </td>
          <td className="px-12">189676</td>
        </tr>
        <tr className="rounded-xl shadow-lg shadow-[#87CEEB]/25">
          <td className="pr-64 py-4">
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
          <td className="px-8">
            <div className="w-full bg-[#c6ecfb] rounded-full h-0.5 dark:bg-[#c6ecfb]">
              <hr className="w-6/12 h-0.5  bg-[#FE516D] border-0 rounded " />
            </div>
          </td>
          <td className="px-12">194556</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtherProducts;
