import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
// import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import DeletePopup from 'components/common/DeletePopup';
import { useState } from 'react';

const Tags = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout title="Category">
        <Breadcrumbs rootTitle="Tags" subTitle="Tags" />

        <table className="w-full table-auto mt-14">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className=" font-medium">
              <th className="w-24"></th>
              <th className="font-medium text-left">TITLE</th>
              <th className="text-left font-medium">ID</th>
              <th className="w-20"></th>
              <th className="w-20"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow">
              <td className="my-2">
                <RectangleIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow mt-5">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
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

export default Tags;
