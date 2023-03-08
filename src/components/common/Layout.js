import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ProfileDialog from 'components/profile/ProfileDialog';
import TopOptions from 'components/SVGIcons/TopOptions';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Navigation from './navigations/Navigation';
import TopNavigation from './navigations/TopNavigation';

const Layout = ({ title, children }) => {
  const [navigationPosition, setNavigationPosition] = useState('left');

  return (
    <section className="grid grid-cols-12 h-screen overflow-hidden overflow-y-scroll">
      {navigationPosition !== 'top' && (
        <section
          className={
            navigationPosition === 'left'
              ? 'col-start-1 col-end-3'
              : navigationPosition === 'right' && 'col-start-11 col-end-13 order-2'
          }>
          <div className="bg-[#FBFDFF] w-full h-full block">
            <Navigation />
          </div>
        </section>
      )}
      <section
        className={
          navigationPosition === 'left'
            ? 'col-start-3 col-end-13 ml-8 mr-16'
            : navigationPosition === 'right'
            ? 'col-start-1 col-end-11 order-1 ml-[70px] mr-9'
            : navigationPosition === 'top' && 'col-start-1 col-end-13'
        }>
        <div
          className={`${
            navigationPosition !== 'top' ? 'bg-transparent' : 'bg-[#FBFDFF] mb-[44px]'
          } flex justify-between items-center pr-14 pt-8`}>
          {navigationPosition !== 'top' && <h2 className="text-[27px] font-medium">{title}</h2>}
          {navigationPosition === 'top' && <TopNavigation className={''} />}
          <div className="flex items-center gap-6 ">
            <MagnifyingGlassIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />
            <div className="relative bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer">
              <BellAlertIcon className="h-10 w-12 text-blue-400 px-2.5" />
              <span className="h-2 w-2 rounded-full bg-red-400 absolute right-1 top-1"></span>
            </div>
            <TopOptions
              navigationPosition={navigationPosition}
              setNavigationPosition={(value) => setNavigationPosition(value)}
            />
            <ProfileDialog />
          </div>
        </div>
        <div className={navigationPosition === 'top' && 'ml-[75px] mr-[96px]'}>
          {navigationPosition === 'top' && <h2 className="text-[27px] font-medium">{title}</h2>}
          {children}
        </div>
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
