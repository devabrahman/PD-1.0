import React from 'react';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/LeftLayout';
import OtherProducts from 'components/products/OtherProducts';

// importing components
import SingleProductLeft from 'components/products/SingleProductLeft';
import SingleProductRight from 'components/products/SingleProductRight';

const SingleProduct = () => {
  return (
    <Layout title="Single Product">
      <Breadcrumbs title="Single Product" link="/single-product" />

      <section className="grid grid-cols-12 gap-16 mt-9">
        <SingleProductLeft />
        <SingleProductRight />
      </section>

      <OtherProducts />
    </Layout>
  );
};

export default SingleProduct;
