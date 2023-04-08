import Pagination from 'components/common/Pagination';
import React from 'react';
import { Link } from 'react-router-dom';

const RecentProduct = () => {
  return (
    <>
      <table className="w-full pl-7  table-auto pt-10 border-spacing-y-7 border-separate dark:bg-dark dark:text-white">
        <tbody>
          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td>
              <p className="pl-5">#154451</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-[#00DC72]">Paid</td>
            <td className="text-[#505050] dark:text-white/80">$ 1499</td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td>
              <p className="pl-5">#154451</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-[#00DC72]">Paid</td>
            <td className="text-[#505050] dark:text-white/80">$ 1499</td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td>
              <p className="pl-5">#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Macbook Air<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] dark:text-white/80 text-sm">4 Nov, 9:32 AM</td>
            <td className="text-[#F4316B]">Canceled</td>
            <td className="text-[#505050] dark:text-white/80">$ 1499</td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td>
              <p className="pl-5">#154451</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-[#F4316B]">Canceled</td>
            <td className="text-[#505050] dark:text-white/80">$ 1499</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default RecentProduct;
