import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ProfileDropdownMenu from 'components/profile/ProfileDropdownMenu';
import CustomizationMenu from 'components/common/top-menu/TopOptions';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import Navigation from './navigations/Navigation';
import TopNavigation from './navigations/TopNavigation';
import LeftRightNav from './top-menu/LeftRightNav';
import Notification from './top-menu/Notification';

const Layout = ({ title, children }) => {
  const [navigationPosition, setNavigationPosition] = useState('top');

  return (
    <section className="grid grid-cols-12 h-screen overflow-hidden overflow-y-scroll">
      {/*common navigation for left and right */}
      {navigationPosition !== 'top' && (
        <section
          className={
            // TODO: why again comparison since parent is top compared
            navigationPosition === 'left'
              ? 'col-start-1 col-end-3'
              : navigationPosition === 'right' && 'col-start-11 col-end-13 order-2'
          }>
          {/* TODO: why you have used --block-- class here */}
          <div className="bg-[#FBFDFF] w-full h-full block">
            <LeftRightNav />
          </div>
        </section>
      )}

      <section
        className={
          //* all navigation position style */

          navigationPosition === 'left'
            ? 'col-start-3 col-end-13 ml-8 mr-16'
            : navigationPosition === 'right'
            ? 'col-start-1 col-end-11 order-1 ml-[70px] mr-9'
            : navigationPosition === 'top' && 'col-start-1 col-end-13'
        }>
        <div
          className={`${
            //common navigation class
            navigationPosition !== 'top' ? 'bg-transparent' : 'bg-[#FBFDFF] mb-[44px]'
          } flex justify-between items-center pr-14 pt-8`}>
          {/* set navigation position and title*/}
          {navigationPosition !== 'top' && <h2 className="text-[27px] font-medium">{title}</h2>}

          {/* set top navigation base on states */}
          {/* TODO: WHY empty class is here? */}
          {navigationPosition === 'top' && <TopNavigation className={''} />}

          {/* import top icons */}
          <div className="flex items-center gap-6 ">
            <MagnifyingGlassIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

            <Notification />

            {/* TODO: I TOLD YOU TO the name is CUSTOMIZATION MENU. so could you name the component same? */}
            <CustomizationMenu
              // TODO: could prop name be much senseable?
              navigationPosition={navigationPosition}
              setNavigationPosition={(value) => setNavigationPosition(value)}
            />
            {/* TODO: could you name it ProfileDropdownMenu */}
            <ProfileDropdownMenu />
          </div>
        </div>

        {/* Top navigation and title */}
        {/* TODO: could you make the margin dynamic */}
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
