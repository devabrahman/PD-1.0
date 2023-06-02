import { useState } from 'react';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/LeftLayout';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import DeletePopup from 'components/common/DeletePopup';
import { MagnifyingGlassIcon as SearchIcon, PlusIcon } from '@heroicons/react/24/outline';
import NewTag from 'components/tags/NewTag';
import EditTag from 'components/tags/EditTag';
import Pagination from 'components/common/Pagination';

const Tags = () => {
  const [addTag, setAddATag] = useState(false);
  const [editTag, setEditTag] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <>
      <Layout title="Tags">
        <div className="flex justify-between items-baseline">
          <Breadcrumbs rootTitle={{ title: 'Tags', url: '/tags' }} />
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
            <div
              onClick={() => setAddATag(true)}
              className="w-12 h-[43px] bg-primary rounded-lg inline-flex justify-center items-center cursor-pointer">
              <PlusIcon className="text-white w-8 " />
            </div>
          </div>
        </div>

        <table className="w-full table-auto mt-14 border-spacing-y-5 border-separate">
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
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow table-shadow">
              <td className="my-2">
                <RectangleIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow mt-5 table-shadow">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow table-shadow">
              <td className="my-2">
                <RectangleIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow mt-5 table-shadow">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow table-shadow">
              <td className="my-2">
                <RectangleIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow mt-5 table-shadow">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow table-shadow">
              <td className="my-2">
                <RectangleIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow mt-5 table-shadow">
              <td>
                <RightMarkIcon />
              </td>
              <td className="py-3">
                <p>Angular</p>
              </td>
              <td className="text-left">
                <p>#194556</p>
              </td>
              <td onClick={() => setEditTag(true)} className="cursor-pointer">
                <EditIcon />
              </td>
              <td className="cursor-pointer" onClick={() => setIsDeleteOpen(true)}>
                <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </Layout>
      <DeletePopup isOpen={isDeleteOpen} setIsOpen={(event) => setIsDeleteOpen(event)} />
      <NewTag isOpen={addTag} setIsOpen={(event) => setAddATag(event)} />
      <EditTag isOpen={editTag} setIsOpen={(event) => setEditTag(event)} />
    </>
  );
};

export default Tags;
