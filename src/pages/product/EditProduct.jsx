import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// importing components
import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Variations from 'components/products/Variations';
import VariationList from 'components/products/VariationList';
import VariationUpdate from 'components/products/VariationUpdate';

// custom css for react range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Shipping from './Shipping';
import MetaSection from 'components/products/MetaSection';
import RightSideEdit from 'components/products/RightSideEdit';

const EditProduct = () => {
  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod'
  );

  return (
    <Layout title="Edit Product">
      <Breadcrumbs title="Edit product" link="/products" />

      <section>
        <form className="w-full flex gap-12 pt-14">
          <section className="w-3/4">
            {/* product title */}
            <div>
              <label className="block font-medium mb-2" htmlFor="title">
                Post Title
              </label>
              <input
                className="w-full rounded-xl px-4 dark:bg-lightDark py-2 border border-gray-200 outline-none focus:ring-0 focus:outline-none"
                type="text"
                name="title"
                value="Apple Macbook Pro M2 13-inch 2020 8GB 512GB SSD"
              />
            </div>

            {/* short description */}
            <div>
              <label className="block font-medium mb-2 mt-6">Short description</label>
              <ReactQuill theme="snow" value={value} className="short_description font-primary" />
            </div>

            {/* long description */}
            <div>
              <label className="block font-medium mb-2 mt-6">Product long description</label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="long_description"
                style={{ fontFamily: 'Montserrat, san-serif' }}
              />
            </div>

            <section className="mt-4 w-full">
              <div className="grid grid-cols-3 items-center gap-14">
                <div className="col-span-2">
                  <label className="block font-medium" htmlFor="sku">
                    SKU (Stock Keeping Unit)
                  </label>
                  <input
                    type="text"
                    name="sku"
                    id="sku"
                    className="pl-3 border border-gray-200 dark:border-darkBorder dark:bg-lightDark py-1.5 rounded-lg pr-1.5 w-full mt-2"
                    value={20}
                  />
                </div>

                <div className="col-span-1 my-5">
                  <label className="dark:bg-lightDark font-medium" htmlFor="quantity">
                    Quantity
                  </label>

                  <input
                    type="quantity"
                    name="quantity"
                    id="quantity"
                    className="border pl-3 border-gray-200 bg-white dark:bg-lightDark py-1.5 rounded-lg w-full pr-1.5 mt-2"
                    value={3}
                  />
                </div>
              </div>

              <Variations />
              <VariationList />
              <VariationUpdate />

              <Shipping />
              <MetaSection
                metaValue={{
                  title: '',
                  url: '',
                  description: { description: '' }
                }}
              />
            </section>
          </section>

          {/* Right Section */}
          <RightSideEdit />
        </form>
      </section>
    </Layout>
  );
};

export default EditProduct;
