// import { IoIosArrowUp } from 'react-icons/io';
import { Disclosure } from '@headlessui/react';
import CategoryIcon from 'components/SVGIcons/CategoryIcon';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

// TODO: absolute path is enabled abut yet relative path, why?
import orderIcon from '../../../assets/Images/icons/order-nav-icon.png';
import productIcon from '../../../assets/Images/icons/product-nav-icon.png';
import tagIcon from '../../../assets/Images/icons/tag-nav-icon.png';

const TopNavigation = ({ className }) => {
  return (
    <div className={className}>
      {/* TODO: BLANK SPACE why? */}
      <div className=" flex gap-14 items-center">
        <div>
          <button className="bg-blue-100 py-2 px-8 rounded-full text-lg ">Logo</button>
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-base mx-12">
            <Link to="/">Dashboard</Link>
          </p>

          <div className="text-base text-[#878787]  m-5 mr-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                    <div className="flex">
                      <img src={productIcon} alt="order icon" />
                      <p className="px-2">Products</p>
                    </div>
                    <IoIosArrowDown
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#5798F7]`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="mx-7 absolute">
                    <ul>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/new-product">New</Link>
                      </li>
                      <li>
                        <Link to="/edit-product">Edit</Link>
                      </li>
                      <li>
                        <Link to="/single-product">Single Product</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="text-base text-[#302323] m-5 mr-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                    <div className="flex">
                      <CategoryIcon className="h-6 w-14" />
                      <p className="px-2">Categories</p>
                    </div>
                    <IoIosArrowDown
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#99C3FF]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mx-7 text-[#878787] absolute">
                    <ul>
                      <li>
                        <Link to="/categories"> Categories</Link>
                      </li>
                      <li>
                        <Link to="/new-category">New</Link>
                      </li>
                      <li>
                        <Link to="/edit-category">Edit</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="text-base text-[#302323] m-5 mr-0text-[#302323] w-full justify-between flex">
            <div className="flex">
              <img src={tagIcon} alt="order icon" />
              <p className="px-2">
                {' '}
                <Link to="/tags">Tags</Link>
              </p>
            </div>
          </div>

          <div className="text-base text-[#302323] m-5 mr-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-[#302323] w-full justify-between flex">
                    <div className="flex">
                      <img src={orderIcon} alt="order icon" />
                      <p className="px-2">Orders</p>
                    </div>
                    <IoIosArrowDown
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-[#99C3FF]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mx-7 absolute text-[#878787]">
                    <Link to="/orders">Orders</Link>
                  </Disclosure.Panel>
                  <Disclosure.Panel className="mx-7 absolute text-[#878787]">
                    <Link to="/order-details">Orders Details</Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
