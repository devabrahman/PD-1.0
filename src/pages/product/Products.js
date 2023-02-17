import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Layout from 'components/common/Layout';
import AstroIcon from 'components/SVGIcons/AstroIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout title="Category">
        <Breadcrumbs rootTitle="Products" subTitle="Products" />
        <table className="w-full table-auto mt-14">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className="font-medium">
              <th className="w-5"></th>
              <th className=" font-medium">THUMBNAIL</th>
              <th className=" font-medium">PRODUCT</th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium"> PRICE</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium">SKU</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium">QUANTITY</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium"> STATUS</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th className=""></th>
              <th className=""></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow">
              <td></td>
              <td className="py-3">
                <div className="flex gap-2 items-center">
                  <RightMarkIcon />
                  <AstroIcon />
                </div>
              </td>
              <td className="flex items-center flex-col">
                <div className="py-4">
                  <p>Mackbook Pro</p>
                  <p className="text-xs text-[rgb(185,185,185)]">Laptop</p>
                </div>
              </td>
              <td className="">$149</td>
              <td className="">113213</td>
              <td className="">0</td>
              <td className="">
                <span className="text-green bg-green/20 rounded-md text-sm py-1.5 px-3 font-medium">
                  In Stock
                </span>
              </td>
              <td className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow">
              <td></td>
              <td className="py-3">
                <div className="flex gap-2">
                  <RectangleIcon />
                  <AstroIcon />
                </div>
              </td>
              <td className="flex items-center flex-col">
                <div className="py-4">
                  <p>Mackbook Pro</p>
                  <p className="text-xs text-[rgb(185,185,185)]">Laptop</p>
                </div>
              </td>
              <td className="">$149</td>
              <td className="">113213</td>
              <td className="">0</td>
              <td className="">
                <span className="text-[#F4316B] bg-[#FF3300]/10 rounded-md text-sm py-1.5 px-3 font-medium h-min">
                  Out of Stock
                </span>
              </td>
              <td className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </Layout>
      <DeletePopup isOpen={isOpen} setIsOpen={(event) => setIsOpen(event)} />
    </>
  );
};

export default Products;
