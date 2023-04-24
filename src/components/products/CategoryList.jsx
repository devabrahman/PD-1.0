/* eslint-disable no-unused-vars */
import { useState, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';

// TODO:demo category list
// const categoryList = [
//   { id: 1, name: 'Clothing' },
//   {
//     id: 2,
//     name: 'Laptop',
//     subCategory: [
//       { id: 201, name: 'Laptop' },
//       { id: 202, name: 'Laptop' },
//       { id: 203, name: 'Macbook' }
//     ]
//   },
//   { id: 3, name: 'Health' },
//   { id: 4, name: 'Entertainment' },
//   { id: 5, name: 'Sports' },
//   { id: 6, name: 'Travel' }
// ];

const CategoryList = () => {
  const [customCheck, setCustomCheck] = useState(true);
  // TODO: function for select category list
  // const [allCategory, setAllCategory] = useState(categoryList);

  // handel select a product
  // const handelSingleCheckMark = (id) => {
  //   const items = allCategory.map((product) =>
  //     product.id == id ? { ...product, isChecked: product?.isChecked ? false : true } : product
  //   );
  //   setAllCategory(items);
  // };

  return (
    <div className="rounded-xl input-accent-box-shadow w-full bg-white">
      <Tab.Group>
        <Tab.List className="flex justify-around input-accent-box-shadow rounded-xl px-2.5 py-3">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`font-medium text-base mr-4 outline-none ${
                  selected ? 'text-[#1C92FF]' : ''
                }`}>
                Categories
              </button>
            )}
          </Tab>
          <div className="w-0.5 h-8 bg-[#DDEFFF]" />
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`font-medium text-base mr-4 outline-none ${
                  selected ? 'text-[#1C92FF]' : ''
                }`}>
                Most Used
              </button>
            )}
          </Tab>
          {/* <Tab>
            <span className="font-medium text-base mr-14 outline-none"></span>
          </Tab> */}
        </Tab.List>
        <Tab.Panels className="py-5">
          <Tab.Panel>
            <section className="max-h-36 overflow-y-auto">
              {/* 1st checkbox */}
              <div className="ml-3">
                <div className="flex items-center mr-4">
                  <div className="w-7 h-7 flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={customCheck || false}
                      className="check-input cursor-pointer"
                      onChange={() => {}}
                    />
                    <label
                      onClick={() => setCustomCheck(customCheck ? false : true)}
                      htmlFor="input-2"
                      className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                        customCheck
                          ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                          : ' w-5 h-5 rounded-[5px] border-blue-200'
                      }`}>
                      <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                    </label>
                  </div>
                  <label htmlFor="laptop">Macbook</label>
                </div>
              </div>

              {/* 2nd checkbox */}
              <div className="ml-5">
                {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                <div className="p-1">
                  <div className="flex items-center mr-4">
                    <div className="w-7 h-7 flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={customCheck || false}
                        className="check-input cursor-pointer"
                        onChange={() => {}}
                      />
                      <label
                        onClick={() => setCustomCheck(customCheck ? false : true)}
                        htmlFor="input-2"
                        className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                          customCheck
                            ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                            : ' w-5 h-5 rounded-[5px] border-blue-200'
                        }`}>
                        <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                      </label>
                    </div>
                    <label htmlFor="laptop">Apple</label>
                  </div>
                </div>
              </div>
              {/* 3rd checkbox */}
              <div className="ml-8">
                {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                <div className="p-1">
                  <div className="flex items-center mr-4">
                    <div className="w-7 h-7 flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={customCheck || false}
                        className="check-input cursor-pointer"
                        onChange={() => {}}
                      />
                      <label
                        onClick={() => setCustomCheck(customCheck ? false : true)}
                        htmlFor="input-2"
                        className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                          customCheck
                            ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                            : ' w-5 h-5 rounded-[5px] border-blue-200'
                        }`}>
                        <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                      </label>
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
                    <div className="w-7 h-7 flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={customCheck || false}
                        className="check-input cursor-pointer"
                        onChange={() => {}}
                      />
                      <label
                        onClick={() => setCustomCheck(customCheck ? false : true)}
                        htmlFor="input-2"
                        className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                          customCheck
                            ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                            : ' w-5 h-5 rounded-[5px] border-blue-200'
                        }`}>
                        <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                      </label>
                    </div>
                    <label htmlFor="laptop">PC & Laptop</label>
                  </div>
                </div>
              </div>
              {/* 5th checkbox */}
              <div className="ml-7">
                {/* <input type="checkbox" name="Laptop" id="laptop" value="Laptop" /> */}
                <div className="p-1">
                  <div className="flex items-center mr-4">
                    <div className="w-7 h-7 flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={customCheck || false}
                        className="check-input cursor-pointer"
                        onChange={() => {}}
                      />
                      <label
                        onClick={() => setCustomCheck(customCheck ? false : true)}
                        htmlFor="input-2"
                        className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                          customCheck
                            ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                            : ' w-5 h-5 rounded-[5px] border-blue-200'
                        }`}>
                        <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                      </label>
                    </div>
                    <label htmlFor="laptop">PC components</label>
                  </div>
                </div>
              </div>
            </section>
          </Tab.Panel>
          <Tab.Panel className="ml-2">
            <section>
              <div className="ml-3">
                <div className="flex items-center mr-4">
                  <div className="w-7 h-7 flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={customCheck || false}
                      className="check-input cursor-pointer"
                      onChange={() => {}}
                    />
                    <label
                      onClick={() => setCustomCheck(customCheck ? false : true)}
                      htmlFor="input-2"
                      className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                        customCheck
                          ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                          : ' w-5 h-5 rounded-[5px] border-blue-200'
                      }`}>
                      <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                    </label>
                  </div>
                  <label htmlFor="laptop">Macbook</label>
                </div>
              </div>
              <div className="ml-3">
                <div className="flex items-center mr-4">
                  <div className="w-7 h-7 flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={customCheck || false}
                      className="check-input cursor-pointer"
                      onChange={() => {}}
                    />
                    <label
                      onClick={() => setCustomCheck(customCheck ? false : true)}
                      htmlFor="input-2"
                      className={`checkbox dark:fill-dark cursor-pointer border-2 border-[#99C3FF] ${
                        customCheck
                          ? ' rounded-[9px] bg-[#48f685] w-6 h-6'
                          : ' w-5 h-5 rounded-[5px] border-blue-200'
                      }`}>
                      <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                    </label>
                  </div>
                  <label htmlFor="laptop">Notebook</label>
                </div>
              </div>
            </section>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CategoryList;
