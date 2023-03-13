import Breadcrumbs from 'components/common/Breadcrumbs';
import ImageDropDown from 'components/common/ImageDropDown';
import Layout from 'components/common/Layout';
import CategoryList from '../../components/products/CategoryList';
// Icons
import NewVariation from 'components/products/NewVariation';
import VariationList from 'components/products/VariationList';
import VariationUpdate from 'components/products/VariationUpdate';
import CalenderIcon from 'components/SVGIcons/CalenderIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import SearchEngineIcon from '../../assets/Images/products/SearchEngineIcon.png';
import ShippingIcon from '../../assets/Images/products/ShippingIcon.png';
import TextEditor from 'components/common/TextEditor';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { addDays } from 'date-fns';
import Calendar from 'components/products/Calendar';
import ProductTag from 'components/products/ProductTag';

const NewProducts = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <Layout title="Products">
      <Breadcrumbs rootTitle={{ title: 'Products', url: '/products' }} subTitle="New" />
      <main>
        <div className="w-full flex gap-16 pt-14">
          <section className="w-3/4">
            <h3 className="font-medium text-lg mb-2">Post Title</h3>
            <input
              className="w-full rounded-xl px-4 border border-pdGrey/70 h-12 input-back-box-shadow focus:outline-none focus:focused-input"
              type="text"
              name="productTitle"
              id=""
            />

            <h3 className="font-medium text-lg mb-2 mt-6">Product description</h3>
            <TextEditor />

            <h3 className="font-medium text-lg mb-2 mt-6">Product long description</h3>
            <TextEditor />

            {/* Sku Section */}
            <section className="mt-16 w-full">
              <div>
                <h5 className="font-medium text-xl">SKU (Stock Keeping Unit)</h5>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] h-9 mt-2 rounded-[8px] w-1/2 pr-1.5"
                />
              </div>
              <div className="my-5 w-1/3">
                <div className="flex items-center">
                  <RightMarkIcon className="h-3 w-3" />
                  <h5 className="font-medium text-xl">Quantity</h5>
                </div>
                <p className="text-[10px] text-[#302323] flex justify-end m-0 -mb-2 p-0">
                  Available
                </p>
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5"
                  placeholder="100"
                />
              </div>
              <NewVariation />
              <VariationList />
              <VariationUpdate />

              <div className="my-5">
                <div className="flex">
                  <img src={ShippingIcon} alt="Option icon" className="h-6 w-5" />
                  <h5 className="font-medium text-xl ml-2">Shipping</h5>
                </div>
                <div className="border w-full border-[#D6D6D6]/60 rounded-xl my-2">
                  <div className="flex my-2 mx-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <p className="ml-3">This is a physical product</p>
                  </div>
                  <hr className="h-0.5 w-full bg-[#CDCDCD]/20" />
                  <p className="px-2 py-3">
                    Customers won’t enter their shipping address or choose a shipping method when
                    buying this product.
                  </p>
                </div>
              </div>
              <div className="my-5">
                <div className="flex">
                  <img src={SearchEngineIcon} alt="Option icon" className="h-6 w-5" />
                  <h5 className="font-medium text-xl ml-2">Search engine listing</h5>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] h-9 mt-3 rounded-[8px] w-full pr-1.5"
                  placeholder="Add a title and description to see how this product might appear in a search engine listing"
                />
              </div>
            </section>
          </section>

          {/* Right Section */}
          <section className="w-1/3">
            <CategoryList />

            <div className="rounded-xl mt-5 input-accent-box-shadow w-full flex  gap-7 px-[15px] pt-3 pb-[18px]">
              <div className="w-full ">
                <h5 className="font-medium ">Regular Price</h5>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="$ 00.0"
                  className="border pl-3 border-accent/30 h-9 mt-3 rounded-[7px] w-full pr-1.5"
                />
              </div>

              <div className="w-full relative">
                <h5 className="font-medium ">Special Price</h5>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="$ 00.0"
                  className="border pl-3 border-accent/30 h-9 mt-3 rounded-[7px] w-full pr-1.5 focus:focused-input"
                />
                <div className="flex items-center justify-between gap-2 absolute bottom-[11%] right-[15px] z-10">
                  <span className="h-4 rounded-sm w-0.5 bg-pdGrey block"></span>
                  <div className="cursor-pointer">
                    <Calendar
                      date={date}
                      setDate={(value) => setDate(value)}
                      icon={<CalenderIcon className="mr-3" />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ProductTag />
            <div className="py-5">
              <h5 htmlFor="" className="text-[#424141] font-medium text-base mb-1.5 block">
                Product Picture
              </h5>
              <div className="p-2">
                <ImageDropDown />
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default NewProducts;
