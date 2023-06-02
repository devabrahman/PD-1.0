import Layout from 'components/common/LeftLayout';
import Breadcrumbs from 'components/common/Breadcrumbs';
// import DeletePopup from 'components/common/DeletePopup';
import Actions from 'components/common/Actions';
import Pagination from 'components/common/Pagination';
import OrderFilters from 'components/common/OrderFilters';
import OrdersTable from 'components/products/OrdersTable';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ExportIcon from 'components/SVGIcons/ExportIcon';

const Products = () => {
  return (
    <>
      <Layout title="Orders" padding="p-0 sm:px-10 sm:py-8">
        <Breadcrumbs title="Orders" link="/orders" />

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <Actions />
            <OrderFilters />

            <div className="flex items-center bg-white dark:bg-dark px-3 py-2 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">$ 1250</p>
              <XMarkIcon className="h-4 w-4 ml-2 hover:text-red-400 cursor-pointer" />
            </div>

            <div className="flex items-center bg-white dark:bg-dark px-3 py-2 rounded-lg ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">Paid</p>
              <XMarkIcon className="h-4 w-4 ml-2 hover:text-red-400 cursor-pointer" />
            </div>

            <div className="flex items-center bg-white dark:bg-dark px-3 py-2 rounded-lg ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-100 font-medium">4+ Star</p>
              <XMarkIcon className="h-4 w-4 ml-2 hover:text-red-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center bg-white dark:bg-dark px-4 rounded-lg shadow-md shadow-blue-50 dark:shadow-gray-900 w-54">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 dark:text-gray-100" />
              <input
                type="text"
                className="pl-2 py-2 w-full ring-0 border-none outline-none focus:outline-none focus:ring-0 bg-transparent"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center ml-5 bg-white dark:bg-dark py-2 px-3 rounded-lg cursor-pointer">
              <ExportIcon />
              <span className="ml-2">Export CSV</span>
            </div>
          </div>
        </div>

        <OrdersTable />

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

export default Products;
