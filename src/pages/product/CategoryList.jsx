import { Tab } from '@headlessui/react';

const CategoryList = () => {
  return (
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
  );
};

export default CategoryList;
