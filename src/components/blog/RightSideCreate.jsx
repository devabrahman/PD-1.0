import CategoryListCreate from 'components/products/CategoryListCreate';
import ProductTag from 'components/products/ProductTag';
import TakeAnActionCreate from './TakeAnActionCreate';
import ProductPrimaryImage from './ProductPrimaryImage';

const RightSideCreate = () => {
  return (
    <section className="w-1/3 space-y-10">
      {/* publish, unpublish or schedule product creation */}
      <TakeAnActionCreate />

      {/* all the categories created are here */}
      <CategoryListCreate />

      {/* all tag related to product are done here */}
      <ProductTag />

      {/* product primary image */}
      <ProductPrimaryImage />
    </section>
  );
};

export default RightSideCreate;
