import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
// import DeletePopup from 'components/common/DeletePopup';
import Actions from 'components/common/Actions';
import Pagination from 'components/common/Pagination';
import TopRightSearch from 'components/common/TopRightSearch';
import Filters from 'components/common/Filters';
import ProductTable from 'components/products/ProductTable';

const Products = () => {
  return (
    <>
      <Layout title="Products" padding="p-0 sm:px-10 sm:py-8">
        <Breadcrumbs title="Products" link="/products" />

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <Actions />
            <Filters />
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
