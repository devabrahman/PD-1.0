// importing components
import LayoutMainGrid from './LayoutMainGrid';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';
import ProfileDropdownMenu from 'components/profile/ProfileDropdownMenu';
import TopNavigation from './navigations/TopNavigation';
import Notification from './top-menu/Notification';
import CustomizationMenu from './top-menu/CustomizationMenu';

const Layout = ({ children, padding = 'px-8 py-8' }) => {
  return (
    <LayoutMainGrid position="top">
      <section className={`flex justify-between items-center pt-0 pb-0 sm:py-0 ${padding}`}>
        <TopNavigation />

        <div className="flex items-center gap-6">
          <SearchIcon className="bg-white transform-gpu hover:scale-95 transition-all duration-150 text-blue-400 border border-gray-50 shadow-lg shadow-blue-100 h-10 w-12 rounded-xl px-2.5 cursor-pointer" />

          <Notification />

          <CustomizationMenu />

          <ProfileDropdownMenu />
        </div>
      </section>
      <section className="px-8">{children}</section>
    </LayoutMainGrid>
  );
};

export default Layout;
