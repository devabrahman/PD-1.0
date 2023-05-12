import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import ProductCard from 'components/gifts/ProductCard';

const ProductCards = () => {
  return (
    <Layout title="Product Cards" padding="p-0 sm:px-10 sm:py-8">
      <Breadcrumbs title="Product Cards" link="/prodcut-cards" />

      <div className="grid grid-cols-3 gap-6 gap-y-10 mt-10">
        <ProductCard imageLink="/assets/images/products/watch-5.jpg" />
        <ProductCard imageLink="/assets/images/products/watch-2.jpg" />
        <ProductCard imageLink="/assets/images/products/watch-3.jpg" />
        <ProductCard imageLink="/assets/images/products/watch-4.jpg" />
        <ProductCard imageLink="/assets/images/products/watch.jpg" />
        <ProductCard imageLink="/assets/images/products/watch-5.jpg" />
      </div>
    </Layout>
  );
};

export default ProductCards;
