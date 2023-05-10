import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
// import DeletePopup from 'components/common/DeletePopup';
import Pagination from 'components/common/Pagination';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ExportIcon from 'components/SVGIcons/ExportIcon';
import BlogAction from 'components/blog/BlogAction';
import PostTable from 'components/blog/PostTable';

const Posts = () => {
  return (
    <>
      <Layout title="Posts" padding="p-0 sm:px-10 sm:py-8">
        <Breadcrumbs title="Posts" link="/posts" />

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center">
            <BlogAction />
            <div className="flex items-center ml-5 bg-white py-2 px-3 rounded-lg cursor-pointer">
              <ExportIcon />
              <span className="ml-2">Export CSV</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center bg-white px-4 rounded-lg mr-4 shadow-md shadow-blue-50 w-54">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              <input
                type="text"
                className="pl-2 py-2 w-full ring-0 border-none outline-none focus:outline-none focus:ring-0 bg-transparent"
                placeholder="Search..."
              />
            </div>

            <Link to="/create-post">
              <div className="bg-blue-500 text-white pl-2 pr-3 py-2 rounded-lg flex justify-center items-center cursor-pointer">
                <PlusIcon className="text-white w-6 h-6" />
                <p className="ml-1">Post</p>
              </div>
            </Link>
          </div>
        </div>

        <PostTable />

        <Pagination />
      </Layout>

      {/* 
      <DeletePopup
        setIsOpen={(event) => setIsDeleteOpen(event)}
        isOpen={isDeleteOpen}
        setConfirmDelete={(value) => setConfirmDelete(value)}
      /> */}
    </>
  );
};

export default Posts;
