/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Layout from 'components/common/Layout';
import { Link } from 'react-router-dom';
import Pagination from 'components/common/Pagination';
// icon

import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Orders = () => {
  const demoArray = Array(6).fill(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout title="Orders">
      <Breadcrumbs rootTitle={{ title: 'Orders', url: '' }} />
      <table className="w-full  table-auto pt-10 border-spacing-y-7 border-separate dark:bg-dark dark:text-white">
        <thead className="uppercase font-medium text-[#5798F6] text-sm">
          <tr className="font-medium">
            <th className="h-fulinline-flex items-center">
              <RightMarkIcon className="w-10" />
            </th>
            <th>
              <div className="flex items-center">
                <span className=" font-medium">ID</span>
                <div className="bg-[#87CEEB]/10 mx-5">
                  <BiChevronUp />
                  <BiChevronDown />
                </div>
              </div>
            </th>

            <th>
              <div className="flex items-center">
                <span className=" font-medium">PRODUCT</span>
                <div className="bg-[#87CEEB]/10 mx-5">
                  <BiChevronUp />
                  <BiChevronDown />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center">
                <span className=" font-medium"> DATE</span>
                <div className="bg-[#87CEEB]/10 mx-5">
                  <BiChevronUp />
                  <BiChevronDown />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center">
                <span className=" font-medium">STATUS</span>
                <div className="bg-[#87CEEB]/10 mx-5">
                  <BiChevronUp />
                  <BiChevronDown />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center">
                <span className=" font-medium">REVENUE</span>
                <div className="bg-[#87CEEB]/10 mx-5">
                  <BiChevronUp />
                  <BiChevronDown />
                </div>
              </div>
            </th>
            <th>
              <div className="flex items-center">
                <span className=" font-medium">CUSTOMER</span>
                <div className="bg-[#87CEEB]/10 mx-5">
                  <BiChevronUp />
                  <BiChevronDown />
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div className="flex gap-2 items-center">
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Iphone 14 Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">1 Nov, 9:32 AM</td>
            <td className="text-[#00DC72]">Paid</td>
            <td className="text-[#505050]">$ 14,89</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <img
                  src="https://source.unsplash.com/random/50x50"
                  className="w-5 h-5 rounded-full float-left mr-2.5 align-middle"
                  alt="Laur"
                />
                John Laur
              </div>
            </td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div className="flex gap-2 items-center">
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#334578</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                I Mac 2TB<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
            <td className="text-[#F4316B]">Canceled</td>
            <td className="text-[#505050]">$ 1,885</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <img
                  src="https://source.unsplash.com/random/50x50"
                  className="w-5 h-5 rounded-full float-left mr-2.5 align-middle"
                  alt="Laur"
                />
                Laur Gilbert
              </div>
            </td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div>
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Macbook Air<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">4 Nov, 9:32 AM</td>
            <td className="text-[#00DC72]">Paid</td>
            <td className="text-[#505050]">$ 1499</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <span className="rounded-full w-5 h-5 inline-flex justify-center items-center text-white mr-1.5 bg-purple-700">
                  L
                </span>
                John Laert
              </div>
            </td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div className="flex gap-2 items-center">
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Mac Mini <span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
            <td className="text-[#00DC72]">Paid</td>
            <td className="text-[#505050]">$ 14,89</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <img
                  src="https://source.unsplash.com/random/50x50"
                  className="w-5 h-5 rounded-full float-left mr-2.5 align-middle"
                  alt="Laur"
                />
                Laur Gilbert
              </div>
            </td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div>
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Mac studio<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">1 Nov, 9:32 AM</td>
            <td className="text-[#FF7144]">Refunded</td>
            <td className="text-[#505050]">$ 18,89</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <span className="rounded-full w-5 h-5 inline-flex justify-center items-center text-white mr-1.5 bg-purple-700">
                  L
                </span>
                Laur Gilbert
              </div>
            </td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div className="flex gap-2 items-center">
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Vivo Pad<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
            <td className="text-[#00DC72]">Paid</td>
            <td className="text-[#505050]">$ 489</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <img
                  src="https://source.unsplash.com/random/50x50"
                  className="w-5 h-5 rounded-full float-left mr-2.5 align-middle"
                  alt="Laur"
                />
                Gilbert Laur
              </div>
            </td>
          </tr>

          <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
            <td className="py-2">
              <div>
                <RightMarkIcon />
              </div>
            </td>
            <td>
              <p>#194551</p>
            </td>
            <td className="flex flex-col">
              <Link to="/order-details">
                Macbook Pro<span className="text-[#B9B9B9] text-sm block">Laptop</span>
              </Link>
            </td>
            <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
            <td className="text-[#F4316B]">Canceled</td>
            <td className="text-[#505050]">$ 11,89</td>
            <td>
              <div className="flex gap-1.5 items-center">
                <span className="rounded-full w-5 h-5 inline-flex justify-center items-center text-white mr-1.5 bg-purple-700">
                  L
                </span>
                Las Gilbert
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full">
        <Pagination />
      </div>

      <DeletePopup isOpen={isOpen} setIsOpen={(event) => setIsOpen(event)} />
    </Layout>
  );
};

export default Orders;
