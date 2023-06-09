// importing components
import Navigation from './navigations/Navigation';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';
import ProfileDropdownMenu from 'components/profile/ProfileDropdownMenu';
import Notification from './top-menu/Notification';
import CustomizationMenu from './top-menu/CustomizationMenu';
import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const LeftLayout = ({ title, children, padding = 'px-8 py-8', childrenSpace = 'mt-4' }) => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  return (
    <section className={`${!!collapseSidebar ? '' : 'app-grid-left'} h-screen overflow-hidden`}>
      <section
        className={`${
          !!collapseSidebar ? 'hidden' : ''
        } dark:bg-lightDark dark:text-white w-full h-full block`}>
        <Navigation
          collapseSidebar={collapseSidebar}
          setCollapseSidebar={(value) => setCollapseSidebar(value)}
        />
      </section>

      <section className={`bg-[#f5f5f5] dark:bg-lightDark ${padding} overflow-y-scroll`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {collapseSidebar === true && (
              <ChevronRightIcon
                className="bg-white dark:bg-black h-9 w-9 dark:border dark:border-gray-600 text-blue-500 cursor-pointer rounded-lg"
                onClick={() => setCollapseSidebar(false)}
                title="Show sidebar"
              />
            )}
            <h2 className="text-2xl font-medium dark:text-gray-200 ml-4">{title}</h2>
          </div>

          <div className="flex items-center gap-6 ">
            <SearchIcon className="bg-white dark:bg-black transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 h-10 w-12 rounded-xl px-2.5 cursor-pointer table-shadow border border-gray-50 dark:border-gray-700" />

            <Notification />

            <CustomizationMenu />

            <ProfileDropdownMenu />
          </div>
        </div>

        <section className={childrenSpace}>{children}</section>
      </section>
    </section>
  );
};

export default LeftLayout;
