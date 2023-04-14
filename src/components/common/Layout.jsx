import { memo, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// importing components
import LayoutMainGrid from './LayoutMainGrid';
import LeftNavigation from './navigations/Navigation';
import { Bars3Icon, MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

// TODO: a comment for @AJMIN to check later
import ProfileDropdownMenu from 'components/profile/ProfileDropdownMenu';
import CustomizationMenu from 'components/common/top-menu/CustomizationMenu';
import TopNavigation from './navigations/TopNavigation';
import Notification from './top-menu/Notification';
// import { mobileResponsive } from 'utils/responsive';
import { useMediaQuery } from 'react-responsive';

const Layout = ({ title, children, padding = 'px-8 py-8', childrenSpace = 'mt-4' }) => {
  const mobileResponsive = useMediaQuery({
    query: '(min-width: 640px)'
  });
  const { pathname } = useLocation();

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
        <section className="dark:bg-[#0E1C2F] dark:text-white w-full h-full block">
          {mobileResponsive ? <LeftNavigation /> : console.log('Profile')}
        </section>
        <section className={`bg-[#f3f3f3] dark:bg-dark ${padding}`}>
          {/* Disable for vendor profile */}
          {pathname === '/vendor-profile' ? (
            <></>
          ) : (
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium">{title}</h2>

              <div className="flex items-center gap-6 ">
                <SearchIcon className="bg-white dark:bg-lightDark transform-gpu hover:scale-95 transition-all duration-150 text-blue-400  h-10 w-12 rounded-xl px-2.5 cursor-pointer border2 input-accent-box-shadow" />

                <Notification />

                <CustomizationMenu
                  sidebarPosition={sidebarPosition}
                  setSidebarPosition={(value) => {
                    setSidebarPosition(value);
                    localStorage.setItem('sidebar_position', value);
                  }}
                />

                <ProfileDropdownMenu />
                {mobileResponsive ? <></> : <Bars3Icon className="w-5" />}
              </div>
            </div>
          )}
          <section className={childrenSpace}>{children}</section>
        </section>
      </LayoutMainGrid>
    );
  }

  // rendering sidebar based on sidebar position right
  if (sidebarPosition === 'right') {
    return (
      <LayoutMainGrid position="right">
        <section className={`bg-[#F9F9F9] dark:bg-dark dark:text-white ${padding}`}>
          {/* Disable for vendor profile */}
          {pathname === '/vendor-profile' ? (
            <></>
          ) : (
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium">{title}</h2>

              <div className="flex items-center gap-6 ">
                <SearchIcon className="bg-white dark:bg-dark transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

                <Notification />

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
          )}
          <section className={childrenSpace}>{children}</section>
        </section>
        <section className="w-full h-full block">
          <LeftNavigation />
        </section>
      </LayoutMainGrid>
    );
  }

  // rendering sidebar based on sidebar position top
  if (sidebarPosition === 'top') {
    return (
      <LayoutMainGrid position="top">
        <section className={`flex justify-between items-center pt-0 pb-0 sm:py-0 ${padding}`}>
          <TopNavigation />

          {/* Disable for vendor profile */}
          {pathname === '/vendor-profile' ? (
            <></>
          ) : (
            <div className="flex items-center gap-6">
              <SearchIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

              <Notification />

              <CustomizationMenu
                sidebarPosition={sidebarPosition}
                setSidebarPosition={(value) => {
                  setSidebarPosition(value);
                  localStorage.setItem('sidebar_position', value);
                }}
              />

              <ProfileDropdownMenu />
            </div>
          )}
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
