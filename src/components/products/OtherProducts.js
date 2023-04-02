import { StarIcon } from '@heroicons/react/24/outline';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';

const OtherProducts = () => {
  return (
    <table className="w-full border-spacing-y-5 border-separate table-fixed">
      <caption className="text-left text-xl my-2 py-5">Other Products</caption>
      <thead className="text-left">
        <tr className="uppercase text-[#5798F6] text-sm">
          <th className="text-left pl-12 w-4/12">Product</th>
          <th className="w-1/12 text-center">price</th>
          <th className="w-2/12 text-center">review</th>
          <th className="text-center w-2/12 ">availability</th>
          <th className="pl-10 w-2/12 text-center">Id</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="rounded-xl table-shadow text-left">
          <td className="py-2">
            <div className="flex">
              <RightMarkIcon />
              <span>Mackbook Pro</span>
            </div>
            <p className="ml-11 -mt-5 text-xs text-[rgb(185,185,185)]">Laptop</p>
          </td>
          <td className="text-center">$259</td>
          <td className="text-center">
            <div className="flex gap-0.5 justify-center">
              <StarIcon className="w-6 stroke-gold fill-gold" />
              <StarIcon className="w-6 stroke-gold fill-gold" />
              <StarIcon className="w-6 stroke-gold fill-gold" />
              <StarIcon className="w-6 stroke-gold fill-gold" />
              <StarIcon className="w-6 stroke-gold fill-white" />
            </div>
          </td>
          <td className="px-8">
            <div className="w-full bg-[#c6ecfb] rounded-full h-0.5 dark:bg-[#c6ecfb]">
              <hr className="w-11/12 h-0.5  bg-[#13FF65] border-0 rounded " />
            </div>
          </td>
          <td className="pl-10 text-center">624548</td>
        </tr>

        <tr className="rounded-xl table-shadow">
          <td className="py-4">
            <div className="flex">
              <RectangleIcon />
              <span>Mackbook Pro</span>
            </div>
            <p className="ml-11 -mt-5 text-xs text-[#B9B9B9]">Laptop</p>
          </td>
          <td className="text-center">$147</td>
          <td className="text-center">
            <div className="flex gap-0.5 justify-center">
              <StarIcon className="w-6 stroke-gold fill-gold" />
              <StarIcon className="w-6 stroke-gold fill-gold" />
              <StarIcon className="w-6 stroke-gold fill-white" />
              <StarIcon className="w-6 stroke-gold fill-white" />
              <StarIcon className="w-6 stroke-gold fill-white" />
            </div>
          </td>
          <td className="px-8">
            <div className="w-full bg-[#c6ecfb] rounded-full h-0.5 dark:bg-[#c6ecfb]">
              <hr className="w-8/12 h-0.5  bg-[#FE516D] border-0 rounded " />
            </div>
          </td>
          <td className="pl-10 text-center">189676</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtherProducts;
