import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import DeletePopup from 'components/common/DeletePopup';
import Pagination from 'components/common/Pagination';
import { useState } from 'react';

const OrderDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout title="Orders">
        <Breadcrumbs rootTitle="Orders" subTitle="Orders Details " />
        <table className="w-full table-auto mt-14">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className="font-medium">
              <th className="w-5"></th>
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
          <tbody className="">
            <tr className="rounded-xl shadow-md shadow-[#87CEEB] input-back-box-shadow">
              <td className="py-2">
                <div className="flex gap-2 items-center">
                  <RightMarkIcon />
                </div>
              </td>
              <td className="">
                <p>#194551</p>
              </td>
              <td className="flex flex-col">
                Macbook Pro<span className="text-[#B9B9B9] text-sm">Laptop</span>
              </td>
              <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
              <td className="text-[#00DC72]">Paid</td>
              <td className="text-[#505050]">$ 14,89</td>
              <td className="">Laur Gilbert</td>
            </tr>
            <tr className="rounded-xl shadow-md shadow-[#87CEEB] input-back-box-shadow">
              <td className="py-2">
                <div className="flex gap-2 items-center">
                  <RectangleIcon />
                </div>
              </td>
              <td className="">
                <p>#334578</p>
              </td>
              <td className="flex flex-col">
                Macbook Pro<span className="text-[#B9B9B9] text-sm">Laptop</span>
              </td>
              <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
              <td className="text-[#F4316B]">Canceled</td>
              <td className="text-[#505050]">$ 14,89</td>
              <td className="">Laur Gilbert</td>
            </tr>
            <tr className="rounded-xl shadow-md shadow-[#87CEEB] input-back-box-shadow">
              <td className="py-2">
                <div className="flex gap-2 items-center">
                  <RightMarkIcon />
                </div>
              </td>
              <td className="">
                <p>#194551</p>
              </td>
              <td className="flex flex-col">
                Macbook Pro<span className="text-[#B9B9B9] text-sm">Laptop</span>
              </td>
              <td className="text-[#505050] text-sm">2 Nov, 9:32 AM</td>
              <td className="text-[#FF7144]">Refunded</td>
              <td className="text-[#505050]">$ 14,89</td>
              <td className="">Laur Gilbert</td>
            </tr>
          </tbody>
        </table>
      </Layout>
      <DeletePopup isOpen={isOpen} setIsOpen={(event) => setIsOpen(event)} />
      <Pagination />
    </>
  );
};

export default OrderDetails;
