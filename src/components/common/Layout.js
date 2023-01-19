import React from 'react';
import PropTypes from 'prop-types';
import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import TopOptions from 'components/SVGIcons/TopOptions';
import Navigation from 'components/authentication/Navigation';
import { HiChevronRight } from 'react-icons/hi';
import ProductDirectoryIcon from 'components/SVGIcons/ProductDirectoryIcon';
// import Macbook from 'public/assets/Macbook.png';

const Layout = ({ title, children }) => {
  return (
    <section className="grid grid-cols-12 h-screen overflow-hidden">
      <section className="col-start-1 col-end-3">
        <div className="bg-blue-50 w-full h-full block">
          <Navigation />
        </div>
      </section>
      <section className="col-start-3 col-end-13">
        <div className="flex justify-between items-center px-14 mt-8">
          <h2 className="text-[27px] font-medium">{title}</h2>

          <div className="flex items-center">
            <MagnifyingGlassIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />
            <div className="relative bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer ml-6">
              <BellAlertIcon className="h-10 w-12 text-blue-400 px-2.5" />
              <span className="h-2 w-2 rounded-full bg-red-400 absolute right-1 top-1"></span>
            </div>
            <div className="relative bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer ml-6 h-10 w-12 px-2">
              <TopOptions />
            </div>
            <img src="assets/images/avatar.png" className="h-16 w-16 rounded-full ml-2" />
          </div>
        </div>
        {children}
        <div className="flex flex-row px-14">
          <ProductDirectoryIcon className="text-[#4F4F4F] border-red-200" />
          <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
          <p>Producst</p>
          <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
          <p className="text-[#1C92FF]">Product Details</p>
        </div>
        <h1 className="px-14 py-6 text-2xl">Product Details </h1>
      </section>
    </section>
  );
};

// props validation
Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Layout;
