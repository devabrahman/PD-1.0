import CategoryList from 'components/products/CategoryList';
import ProductTag from 'components/products/ProductTag';
import Price from './Price';
import TakeAnAction from './TakeAnActionEdit';
import ProductGallery from './ProductGallery';

const RightSide = () => {
  return (
    <section className="w-1/3 space-y-10">
      <TakeAnAction />

      <CategoryList />

      <Price />

      <ProductTag />

      <ProductGallery />
    </section>
  );
};

export default RightSide;
