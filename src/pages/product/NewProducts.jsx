import { useState } from 'react';
import { addDays, format } from 'date-fns';
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
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
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
        <form className="w-full flex gap-16 pt-14">
          <section className="w-3/4">
            <label className="block font-medium text-lg mb-2">Post Title</label>
            <input
              className="w-full rounded-xl px-4 border dark:bg-lightDark border-pdGrey/70 h-12 input-back-box-shadow focus:outline-none focus:focused-input"
              type="text"
              name="productTitle"
              id=""
            />

            <label className="block font-medium text-lg mb-2 mt-6">Product description</label>
            <TextEditor description={''} />

            <label className="block font-medium text-lg mb-2 mt-6">Product long description</label>
            <TextEditor />

            <section className="mt-16 w-full">
              <div>
                <label className="block font-medium text-xl">SKU (Stock Keeping Unit)</label>
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
                      className={`checkbox dark:fill-dark cursor-pointer border border-[#635e5e] ${
                        checkQuantity
                          ? 'rounded-[9px] bg-[#48f685] w-7 h-7'
                          : 'w-5 h-5 rounded-[4px]'
                      }`}>
                      <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                    </label>
                  </div>

                  <label className="dark:bg-lightDark font-medium text-xl">Quantity</label>
                </div>
                <p className="text-[10px] text-[#302323] flex justify-end m-0 -mb-2 p-0">
                  Available
                </p>

                <input
                  type="number"
                  name=""
                  id=""
                  disabled={!checkQuantity}
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] dark:bg-lightDark h-9 mt-3 rounded-xl w-full pr-1.5"
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
                  <label className="block font-medium text-xl ml-2">Shipping</label>
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
                        className={`checkbox dark:fill-dark cursor-pointer border border-[#635e5e] ${
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
                        <label className="block text-[#302323] text-xl py-4">
                          Customs information
                        </label>

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
                            HS (Harmonized System) code
                          </label>
                          <input
                            name=""
                            id=""
                            placeholder="Search or enter HS code"
                            className="border border-[#B9B9B9] rounded-xl block w-5/12 outline-none py-2.5 px-4 text-[15px]"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
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
          <section className="w-1/3 space-y-10">
            {/* Submit */}
            <div className="w-full rounded-xl input-accent-box-shadow mt-5 px-5 py-3 space-y-5">
              <label className="text-[#424141] dark:text-white font-medium text-base block">
                Publish
              </label>
              <div className="flex justify-between">
                <button className="border border-accent/30  px-2 py-1.5 rounded-lg text-sm input-back-box-shadow">
                  Save Draft
                </button>
                <button className="border border-accent/30 px-2 py-1.5 rounded-lg text-sm input-back-box-shadow">
                  Preview
                </button>
              </div>
              <div className="flex gap-4 text-sm pt-2">
                <MapPinIcon className="w-5" />
                <p>
                  Status:{' '}
                  <select className=" bg-accent/10 p-0.5 rounded-sm outline-none selected:text-bold space-y-2">
                    <option value="Draft">Draft</option>
                    <option value="Publish">Publish</option>
                  </select>
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <CalendarDaysIcon className="w-5" />
                <p className="">
                  Publish Date:{' '}
                  <span className="pl-1 font-medium cursor-pointer">
                    {format(Date.now(), 'dd , MMM , yyyy')}
                  </span>
                </p>
              </div>
              <hr />
              <p className="text-xs mb-8 text-primary cursor pointer">Copy a new Draft</p>
              <div className="text-right m-[0px]">
                <button
                  className="border border-accent text-primary px-2 py-1.5 rounded-lg inline-block text-right mb-2.5 input-back-box-shadow text-sm"
                  type="submit">
                  Publish
                </button>
              </div>
            </div>

            <CategoryList />

            <div className="rounded-xl mt-5 input-accent-box-shadow w-full flex  gap-7 px-[15px] pt-3 pb-[18px]">
              <div className="w-full ">
                <label className="block font-medium ">Regular Price</label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="$ 00.0"
                  className="border pl-3 border-accent/30 h-9 mt-3 rounded-[7px] w-full pr-1.5"
                />
              </div>

              <div className="w-full relative">
                <label className="block font-medium ">Special Price</label>
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
              <label className="block text-[#424141] font-medium text-base mb-1.5">
                Product Picture
              </label>
              <div className="p-2">
                <ImageDropDown />
              </div>
            </div>
          </section>
        </form>
      </main>
    </Layout>
  );
};

export default NewProducts;
