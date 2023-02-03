import { Tab } from '@headlessui/react';
import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import CalenderIcon from 'components/SVGIcons/CalenderIcon';
import ImageDropDown from 'components/common/ImageDropDown';
import { BiX } from 'react-icons/bi';

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
        <section className="w-1/3">
          <div className="rounded-xl input-accent-box-shadow w-full">
            <Tab.Group>
              <Tab.List className="flex justify-around input-accent-box-shadow rounded-xl px-2.5 py-3">
                <Tab className="">
                  <span className="font-medium text-base mr-4"> Categories</span>
                </Tab>
                <div className="w-0.5 h-8 bg-[#DDEFFF]" />
                <Tab>
                  <span className="font-medium text-base mr-14 text-[#1C92FF]">Most Used</span>
                </Tab>
              </Tab.List>
              <Tab.Panels className="py-5">
                <Tab.Panel className="">
                  <section className="">
                    {/* 1st checkbox */}
                    <div className="ml-3">
                      <div className="">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[#99C3FF] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> Laptop</label>
                        </div>
                      </div>
                    </div>
                    {/* 2nd checkbox */}
                    <div className="ml-5">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> </label>
                        </div>
                      </div>
                    </div>
                    {/* 3rd checkbox */}
                    <div className="ml-8">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> </label>
                        </div>
                      </div>
                    </div>
                    {/* 4th checkbox */}
                    <div className="ml-10">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> </label>
                        </div>
                      </div>
                    </div>
                    {/* 5th checkbox */}
                    <div className="ml-7">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"></label>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Panel>
                <Tab.Panel className="flex justify-end mr-8">
                  <section className="">
                    {/* 1st checkbox */}
                    <div className="ml-3">
                      <div className="">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[#99C3FF] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> Laptop</label>
                        </div>
                      </div>
                    </div>
                    {/* 2nd checkbox */}
                    <div className="ml-5">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"></label>
                        </div>
                      </div>
                    </div>
                    {/* 3rd checkbox */}
                    <div className="ml-8">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop">Laptop</label>
                        </div>
                      </div>
                    </div>
                    {/* 4th checkbox */}
                    <div className="ml-10">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> </label>
                        </div>
                      </div>
                    </div>
                    {/* 5th checkbox */}
                    <div className="ml-7">
                      {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                      <div className="p-1">
                        <div className="flex items-center mr-4">
                          <input
                            type="checkbox"
                            name="Laptop"
                            id="laptop"
                            value="Laptop"
                            className="opacity-0 absolute h-5 w-5"
                          />
                          <div className="bg-white border-2 rounded-md border-[#99C3FF] w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#99C3FF]">
                            <svg
                              className="fill-current hidden w-3 h-3 text-[[#99C3FF]] pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fillRule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label htmlFor="laptop"> </label>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* Regular Price */}
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
                className="border pl-3 border-accent/30 h-9 mt-3 rounded-[7px] w-full pr-1.5"
              />
              <div className="flex items-center gap-2 absolute bottom-[14%] right-[15%] z-10">
                <span className="h-4 rounded-sm w-0.5 bg-pdGrey block"></span>
                <div className="cursor-pointer">
                  <CalenderIcon className="mr-3" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl input-accent-box-shadow mt-5 px-5 py-3">
            <h5 className="text-[#424141] font-medium text-base">Tags</h5>
            <p className="text-[10px] text-[#939090] flex justify-end m-0 p-0">Manage</p>
            <input
              type="text"
              name=""
              id=""
              className="border border-accent/30 h-9 mt-3 rounded-xl w-full px-8"
              placeholder="Find or creat tags"
            />
            <div className="flex mt-3">
              <div className="bg-green/20 rounded-md w-min flex items-center mr-5 font-normal">
                <span className="text-xs py-1.5 px-3 font-medium">Product</span>
                <BiX />
              </div>
              <div className="bg-green/20 rounded-md w-min flex items-center">
                <span className="text-xs py-1.5 px-3 font-medium">Product</span>
                <BiX />
              </div>
            </div>
          </div>

          <div className="py-5">
            <BiX />
            <h5 htmlFor="" className="text-[#424141] font-medium text-base mb-1.5 block">
              Product Picture
            </h5>
            <div className="p-2">
              <ImageDropDown />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NewProducts;
