import Pagination from 'components/common/Pagination';
import React from 'react';
import { Link } from 'react-router-dom';

const RecentProduct = () => {
  return (
    <>
      <p className="text-lg font-extrabold mb-6">Recent purchase</p>
      <table className="w-full dark:rounded-md">
        <thead>
          <tr className="dark:bg-gray-900">
            <td className="pl-10">Id</td>
            <td>Product</td>
            <td>Date and Time</td>
            <td>Status</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr className="rounded-xl bg-white dark:bg-dark dark:border-lightDark table-shadow mb-4 border border-gray-200">
            <td className="pl-10">#154451</td>
            <td>
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-green-400">Paid</td>
            <td className="text-gray-700 dark:text-white/80">$ 1499</td>
          </tr>
          <tr className="rounded-xl bg-white dark:bg-dark dark:border-lightDark table-shadow mb-4 border border-gray-200">
            <td className="pl-10">#154451</td>
            <td>
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-green-400">Paid</td>
            <td className="text-gray-700 dark:text-white/80">$ 1499</td>
          </tr>
          <tr className="rounded-xl bg-white dark:bg-dark dark:border-lightDark table-shadow mb-4 border border-gray-200">
            <td className="pl-10">#154451</td>
            <td>
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-green-400">Paid</td>
            <td className="text-gray-700 dark:text-white/80">$ 1499</td>
          </tr>
          <tr className="rounded-xl bg-white dark:bg-dark dark:border-lightDark table-shadow mb-4 border border-gray-200">
            <td className="pl-10">#154451</td>
            <td>
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-green-400">Paid</td>
            <td className="text-gray-700 dark:text-white/80">$ 1499</td>
          </tr>
          <tr className="rounded-xl bg-white dark:bg-dark dark:border-lightDark table-shadow mb-4 border border-gray-200">
            <td className="pl-10">#154451</td>
            <td>
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="dark:text-white/80 text-sm">4 Sep, 9:32 AM</td>
            <td className="text-green-400">Paid</td>
            <td className="text-gray-700 dark:text-white/80">$ 1499</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default RecentProduct;
