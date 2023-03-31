import { useState } from 'react';
import { addDays } from 'date-fns';
import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import ImageDropDown from 'components/common/ImageDropDown';
import CategoryList from 'components/products/CategoryList';
import Calendar from 'components/products/Calendar';
import ProductTag from 'components/products/ProductTag';
import NewVariation from 'components/products/NewVariation';
import VariationList from 'components/products/VariationList';
import VariationUpdate from 'components/products/VariationUpdate';
import TextEditor from 'components/common/TextEditor';
import MetaSection from 'components/products/MetaSection';
// Icons
import CalenderIcon from 'components/SVGIcons/CalenderIcon';
import ShippingIcon from 'assets/Images/products/ShippingIcon.png';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';
// Css
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const NewProducts = () => {
  const variationList = [];
  const [variation, setVariation] = useState(variationList);
  const [isVariable, setIsVariable] = useState(false);
  const [physicalProduct, setPhysicalProduct] = useState(false);
  const [checkQuantity, setCheckQuantity] = useState(true);
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
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={checkQuantity || false}
                      className="check-input cursor-pointer"
                      onChange={() => {}}
                    />
                    <label
                      onClick={() => setCheckQuantity(checkQuantity ? false : true)}
                      htmlFor="input-2"
                      className={`checkbox dark:fill-dark cursor-pointer ${
                        checkQuantity
                          ? 'rounded-[9px] bg-[#48f685] w-7 h-7'
                          : 'w-5 h-5 rounded-[4px]'
                      }`}>
                      <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                    </label>
                  </div>

                  <h5 className="font-medium text-xl">Quantity</h5>
                </div>
                <p className="text-[10px] text-[#302323] flex justify-end m-0 -mb-2 p-0">
                  Available
                </p>

                <input
                  type="number"
                  name=""
                  id=""
                  disabled={!checkQuantity}
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5"
                  placeholder="100"
                />
              </div>

              <NewVariation
                isVariable={isVariable}
                setIsVariable={setIsVariable}
                variation={variation}
                setVariation={(value) => setVariation(value)}
              />
              {isVariable && variation.length !== 0 && (
                <>
                  <VariationList
                    variation={variation}
                    setVariation={(value) => setVariation(value)}
                  />
                  <VariationUpdate
                    variation={variation}
                    setVariation={(value) => setVariation(value)}
                  />
                </>
              )}

              <div className="my-12 mt-9">
                <div className="flex">
                  <img src={ShippingIcon} alt="Option icon" className="h-6 w-5" />
                  <h5 className="font-medium text-xl ml-2">Shipping</h5>
                </div>
                <div className="border w-full border-[#D6D6D6]/60 rounded-xl my-2">
                  <div className="flex items-center gap-1.5 my-2 mx-3">
                    <div className="w-8 flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={physicalProduct || false}
                        className="check-input cursor-pointer"
                        onChange={() => {}}
                      />
                      <label
                        onClick={() => setPhysicalProduct(physicalProduct ? false : true)}
                        htmlFor="input-2"
                        className={`checkbox dark:fill-dark cursor-pointer ${
                          physicalProduct
                            ? 'rounded-[9px] bg-[#48f685] w-6 h-6'
                            : 'w-4 h-4 rounded-[4px]'
                        }`}>
                        <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                      </label>
                    </div>
                    <p>This is a physical product</p>
                  </div>
                  {physicalProduct && (
                    <>
                      <hr className="h-0.5 w-full bg-[#CDCDCD]/20" />
                      <div className="px-3">
                        <h5 className="text-[#302323] text-xl py-4">Customs information</h5>
                        <form action="">
                          <div>
                            <label htmlFor="" className="text-[15px] pb-3 block">
                              Country/Region of origin
                            </label>
                            <select
                              name=""
                              id=""
                              placeholder="Select country or region"
                              className="border border-[#B9B9B9] rounded-xl block w-5/12 outline-none py-2.5 px-4 text-[15px]">
                              <option disabled value="" className="text-[#848484] text-[15px]">
                                Select country or region
                              </option>
                              <option value="">Bangladesh</option>
                              <option value="">India</option>
                              <option value="">USA</option>
                              <option value="">UEA</option>
                            </select>
                          </div>

                          <div className="my-7">
                            <label htmlFor="" className="text-[15px] pb-3 block">
                              Country/Region of origin
                            </label>
                            <select
                              name=""
                              id=""
                              placeholder="Select country or region"
                              className="border border-[#B9B9B9] rounded-xl block w-5/12 outline-none py-2.5 px-4 text-[15px]">
                              <option disabled value="" className="text-[#848484] text-[15px]">
                                Select country or region
                              </option>
                              <option value="">Bangladesh</option>
                              <option value="">India</option>
                              <option value="">USA</option>
                              <option value="">UEA</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <MetaSection />
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
