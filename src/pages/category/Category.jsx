import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Layout from 'components/common/Layout';
import AstroIcon from 'components/SVGIcons/AstroIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
// import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon as SearchIcon, PlusIcon } from '@heroicons/react/24/outline';
import Pagination from 'components/common/Pagination';

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout title="Category">
        <div className="flex justify-between items-baseline">
          <Breadcrumbs rootTitle={{ title: 'Category', url: '/categories' }} />
          <div className="flex gap-2.5 items-center">
            <form action="">
              <div className="border border-[#B9B9B9]/30 rounded-lg flex pl-1.5 ">
                <SearchIcon className="w-6 stroke-2 stroke-primary cursor-pointer" />
                <input
                  type="search"
                  name="search"
                  className="h-full ml-2 py-2 rounded-lg px-1.5 dark:bg-lightDark"
                />
              </div>
            </form>
            <div className="w-12 h-[43px] bg-primary rounded-lg inline-flex justify-center items-center cursor-pointer">
              <Link to="/new-category">
                <PlusIcon className="text-white w-8 " />
              </Link>
            </div>
          </div>
        </div>
        <table className="w-full table-auto mt-14 border-spacing-y-5 border-separate">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className="font-medium">
              <th className="w-5">
                <RightMarkIcon />
              </th>
              <th className="font-medium text-left">THUMBNAIL</th>
              <th className="font-medium text-left">ID</th>
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
              <td></td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-2">
                <div className="flex gap-2 items-center">
                  <AstroIcon />
                </div>
              </td>
              <td>#194556</td>
              <td>Angular</td>
              <td>/angular</td>
              <td>1</td>
              <td></td>
              <td>
                <Link to="/edit-category" className="cursor-pointer">
                  <EditIcon />
                </Link>
              </td>
              <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>

            <tr className="rounded-xl shadow-md shadow-[#87CEEB] table-shadow">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-2">
                <div className="flex gap-2">
                  <AstroIcon />
                </div>
              </td>
              <td>
                <p>#194556</p>
              </td>
              <td>FlowbiteJS</td>
              <td>/angular</td>
              <td>2</td>
              <td></td>
              <td>
                <Link to="/edit-category" className="cursor-pointer">
                  <EditIcon />
                </Link>
              </td>
              <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </Layout>
      <DeletePopup isOpen={isOpen} setIsOpen={(event) => setIsOpen(event)} />
    </>
  );
};

export default Category;
