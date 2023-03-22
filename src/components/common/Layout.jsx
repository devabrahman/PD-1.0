import { memo, useLayoutEffect, useState } from 'react';

// importing components
import LayoutMainGrid from './LayoutMainGrid';
import LeftNavigation from './navigations/Navigation';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

// TODO: please change next three component name once you see the code
// TODO: a comment for @AJMIN to check later
import ProfileDropdownMenu from 'components/profile/ProfileDialog';
import NotificationIcon from 'components/SVGIcons/NotificationIcon';
import CustomizationMenu from 'components/SVGIcons/TopOptions';
import TopNavigation from './navigations/TopNavigation';

const Layout = ({ title, children, padding = 'px-8 py-8' }) => {
  // state for sidebar position
  const [sidebarPosition, setSidebarPosition] = useState('left');

  useLayoutEffect(() => {
    // getting sidebar position from local storage
    const sidebarPositionStorage = localStorage.getItem('sidebar_position');

    // setting sidebar position to left if it is not set
    if (!sidebarPositionStorage) {
      localStorage.setItem('sidebar_position', 'left');
      setSidebarPosition('left');
    }

    // setting sidebar position to left if it is not set
    if (['left', 'right', 'top'].includes(sidebarPositionStorage)) {
      setSidebarPosition(sidebarPositionStorage);
    } else {
      setSidebarPosition('left');
      localStorage.setItem('sidebar_position', 'left');
    }
  }, []);

  // rendering sidebar based on sidebar position left
  if (sidebarPosition === 'left') {
    return (
      <LayoutMainGrid position="left">
        <section className="bg-[#FBFDFF] dark:bg-[#0E1C2F] dark:text-white w-full h-full block">
          <LeftNavigation />
        </section>
        <section className={padding}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium">{title}</h2>

            <div className="flex items-center gap-6 ">
              <SearchIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

              <div className="relative h-10 w-12 bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer">
                <NotificationIcon className="" />
                <span className="h-2 w-2 rounded-full bg-red-500 absolute right-3 top-2"></span>
              </div>

              <CustomizationMenu
                sidebarPosition={sidebarPosition}
                setSidebarPosition={(value) => {
                  setSidebarPosition(value);
                  localStorage.setItem('sidebar_position', value);
                }}
              />

              <ProfileDropdownMenu />
            </div>
          </div>
          {children}
        </section>
      </LayoutMainGrid>
    );
  }

  // rendering sidebar based on sidebar position right
  if (sidebarPosition === 'right') {
    return (
      <LayoutMainGrid position="right">
        <section className={`dark:bg-dark dark:text-white ${padding}`}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium">{title}</h2>

            <div className="flex items-center gap-6 ">
              <SearchIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

              <div className="relative h-10 w-12 bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer">
                <NotificationIcon className="" />
                <span className="h-2 w-2 rounded-full bg-red-500 absolute right-3 top-2"></span>
              </div>

              <CustomizationMenu
                sidebarPosition={sidebarPosition}
                setSidebarPosition={(value) => {
                  setSidebarPosition(value);
                  localStorage.setItem('sidebar_position', value);
                }}
              />

              <ProfileDropdownMenu />
            </div>
          </div>
          {children}
        </section>
        <section className="bg-[#FBFDFF] w-full h-full block">
          <LeftNavigation />
        </section>
      </LayoutMainGrid>
    );
  }

  // rendering sidebar based on sidebar position top
  if (sidebarPosition === 'top') {
    return (
      <LayoutMainGrid position="top">
        <section className={`flex justify-between ${padding}`}>
          <TopNavigation />

          <div className="flex items-center gap-6">
            <SearchIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

            <div className="relative h-10 w-12 bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 shadow-lg shadow-blue-100 rounded-xl grid place-content-center cursor-pointer">
              <NotificationIcon className="" />
              <span className="h-2 w-2 rounded-full bg-red-500 absolute right-3 top-2"></span>
            </div>

            <CustomizationMenu
              sidebarPosition={sidebarPosition}
              setSidebarPosition={(value) => {
                setSidebarPosition(value);
                localStorage.setItem('sidebar_position', value);
              }}
            />

            <ProfileDropdownMenu />
          </div>
        </section>
        <section className="px-8">{children}</section>
      </LayoutMainGrid>
    );
  }

  // kind of fallback if none of the above conditions are met
  return (
    <div className="h-screen flex justify-center items-center">
      <p>We are loading the application for you...🙌</p>
    </div>
  );
};

export default memo(Layout);
