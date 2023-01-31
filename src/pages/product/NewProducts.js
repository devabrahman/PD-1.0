import { Tab } from '@headlessui/react';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';

const NewProducts = () => {
  return (
    <Layout title="Products">
      <Breadcrumbs rootTitle="Product" subTitle="New" />
      <main className="w-full flex gap-16 pt-14">
        <section className="w-3/4">
          <h3 className="font-medium text-lg mb-2">Post Title</h3>
          <input
            className="w-full rounded-xl border border-pdGrey/70 h-12 input-back-box-shadow"
            type="text"
            name="productTitle"
            id=""
          />

          <h3 className="font-medium text-lg mb-2 mt-6">Product description</h3>
          <textarea
            className="w-full rounded-xl border border-pdGrey/70 h-48 input-back-box-shadow"
            type="text"
            name="productTitle"
            id=""
          />

          <h3 className="font-medium text-lg mb-2 mt-6">Product long description</h3>
          <textarea
            className="w-full rounded-xl border border-pdGrey/70 h-48 input-back-box-shadow"
            type="text"
            name="productTitle"
            id=""
          />
        </section>
        <section className="w-1/4">
          <div className="rounded-xl input-accent-box-shadow w-full px-2.5 py-3">
            <Tab.Group>
              <Tab.List>
                <Tab>
                  <span className="font-medium text-base mr-4"> Categories</span>
                </Tab>
                <Tab>
                  <span className="font-medium text-base ml-4"> Categories</span>
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <section className="w-full">
                    <div className="">
                      <input
                        className="default:ring-2 checked:bg-blue-500"
                        type="checkbox"
                        name="Laptop"
                        id="laptop"
                        value="Laptop"
                      />
                      <label htmlFor="ladptop"> Check if you love this website!</label>1
                    </div>
                    <div className=" ml-3">
                      <input type="checkbox" name="Laptop" id="laptop" value="Laptop" />
                      <label htmlFor="laptop"> Check if you sbsite!</label>1
                    </div>
                  </section>
                </Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* Regular Price */}
          <div className="rounded-xl input-accent-box-shadow w-full flex  gap-7 px-2.5 py-3">
            <div className="w-full ">
              <h5>Regular Price</h5>
              <input
                type="number"
                name=""
                id=""
                className="border border-accent/30 h-9 mt-3 rounded-xl w-full"
              />
            </div>

            <div className="w-full ">
              <h5>Regular Price</h5>
              <input
                type="number"
                name=""
                id=""
                className="border border-accent/30 h-9 mt-3 rounded-xl w-full"
              />
            </div>
          </div>

          <div className="w-full ">
            <h5>Tags</h5>
            <input
              type="number"
              name=""
              id=""
              className="border border-accent/30 h-9 mt-3 rounded-xl w-full"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NewProducts;
