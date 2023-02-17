import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import AstroIcon from 'components/SVGIcons/AstroIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import DeletePopup from 'components/common/DeletePopup';
import { useState } from 'react';

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout title="Category">
        <Breadcrumbs rootTitle="Category" subTitle="Category" />
        <table className="w-full table-auto mt-14">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className="font-medium">
              <th className="w-5"></th>
              <th className="font-medium">THUMBNAIL</th>
              <th className="font-medium">ID</th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium"> TITLE</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium">SLUG</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium">Count</span>
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
              <td></td>
              <td className="py-2">
                <div className="flex gap-2 items-center">
                  <RightMarkIcon />
                  <AstroIcon />
                </div>
              </td>
              <td className="">
                <p>#194556</p>
              </td>
              <td className="">Angular</td>
              <td className="">/angular</td>
              <td className="">1</td>
              <td></td>
              <td className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl shadow-md shadow-[#87CEEB] input-back-box-shadow">
              <td></td>
              <td className="py-2">
                <div className="flex gap-2">
                  <RectangleIcon />
                  <AstroIcon />
                </div>
              </td>
              <td>
                <p>#194556</p>
              </td>
              <td className="">FlowbiteJS</td>
              <td className="">/angular</td>
              <td className="">2</td>
              <td></td>
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

export default Category;
