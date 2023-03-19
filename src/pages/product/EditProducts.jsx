import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/LayoutBackup';

const EditProducts = () => {
  return (
    <Layout title="Products">
      <Breadcrumbs rootTitle={{ title: 'Products', url: '/products' }} subTitle="Edit Product" />
    </Layout>
  );
};

export default EditProducts;
