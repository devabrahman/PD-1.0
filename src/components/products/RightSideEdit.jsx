import CategoryListEdit from 'components/products/CategoryListEdit';
import ProductTag from 'components/products/ProductTag';
import PriceEdit from './PriceEdit';
import TakeAnActionEdit from './TakeAnActionEdit';
import ProductGallery from './ProductGallery';

const RightSide = () => {
  return (
    <section className="w-1/3 space-y-10">
      {/* publish, unpublish or schedule product creation */}
      <TakeAnActionEdit />

      {/* all the categories created are here */}
      <CategoryListEdit />

      {/* product normal pricing and special pricing done here */}
      <PriceEdit />

      {/* all tag related to product are done here */}
      <ProductTag />

      {/* all product photos are done here */}
      <ProductGallery />
    </section>
  );
};

export default RightSide;
