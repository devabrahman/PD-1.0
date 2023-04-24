import CategoryList from 'components/products/CategoryList';
import ProductTag from 'components/products/ProductTag';
import Price from './Price';
import TakeAnActionCreate from './TakeAnActionCreate';
import ProductGallery from './ProductGallery';

const RightSide = () => {
  return (
    <section className="w-1/3 space-y-10">
      <TakeAnActionCreate />

      <CategoryList />

      <Price />

      <ProductTag />

      <ProductGallery />
    </section>
  );
};

export default RightSide;
