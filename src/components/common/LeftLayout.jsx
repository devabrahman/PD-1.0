// importing components
import Navigation from './navigations/Navigation';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';
import ProfileDropdownMenu from 'components/profile/ProfileDropdownMenu';
import Notification from './top-menu/Notification';
import CustomizationMenu from './top-menu/CustomizationMenu';

const LeftLayout = ({ title, children, padding = 'px-8 py-8', childrenSpace = 'mt-4' }) => {
  return (
    <section className="app-grid-left">
      <section className="dark:bg-lightDark dark:text-white w-full h-full block">
        <Navigation />
      </section>

      <section className={`bg-[#f5f5f5] dark:bg-lightDark ${padding} overflow-y-scroll`}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium dark:text-gray-200">{title}</h2>

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
