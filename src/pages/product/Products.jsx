import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
// import DeletePopup from 'components/common/DeletePopup';
import Actions from 'components/common/Actions';
import Pagination from 'components/common/Pagination';
import TopRightSearch from 'components/common/TopRightSearch';
import Filters from 'components/common/Filters';
import ProductTable from 'components/products/ProductTable';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Products = () => {
  return (
    <>
      <Layout title="Products" padding="p-0 sm:px-10 sm:py-8">
        <Breadcrumbs title="Products" link="/products" />

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <Actions />
            <Filters />

            <div className="flex items-center bg-white dark:bg-dark px-3 py-2 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-50 font-medium">Laptop</p>
              <XMarkIcon className="h-4 w-4 ml-2 hover:text-red-400 cursor-pointer" />
            </div>

            <div className="flex items-center bg-white dark:bg-dark  px-3 py-2 rounded-lg ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-50 font-medium">In Stock</p>
              <XMarkIcon className="h-4 w-4 ml-2 hover:text-red-400 cursor-pointer" />
            </div>

            <div className="flex items-center bg-white dark:bg-dark px-3 py-2 rounded-lg ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-50 font-medium">4+ Star</p>
              <XMarkIcon className="h-4 w-4 ml-2 hover:text-red-400 cursor-pointer" />
            </div>
          </div>
          <TopRightSearch />
        </div>

        <ProductTable />

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
