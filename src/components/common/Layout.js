import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Navigation from 'components/common/Navigation';
import ProfileDialog from 'components/profile/ProfileDialog';
import TopOptions from 'components/SVGIcons/TopOptions';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Layout = ({ title, children }) => {
  const [navigationPosition, setNavigationPosition] = useState('left');
  return (
    <section className="grid grid-cols-12 h-screen overflow-hidden overflow-y-scroll">
      <section className="col-start-1 col-end-3">
        <div className="bg-blue-50 w-full h-full block">
          <Navigation />
        </div>
      </section>
      <section className="col-start-3 col-end-13 ml-8 mr-16">
        <div className="flex justify-between items-center pr-14 mt-8">
          <h2 className="text-[27px] font-medium">{title}</h2>

          <div className="flex items-center gap-6">
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
        {children}
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
