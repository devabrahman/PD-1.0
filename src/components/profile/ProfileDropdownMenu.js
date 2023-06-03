// import { Link } from 'react-router-dom';
import ChangeThemes from './ChangeThemes';
import MenuTransition from 'components/common/MenuTransition';
import { Menu } from '@headlessui/react';

// // icon
import profile from 'assets/Images/common/profile.png';
import UserIcon from 'components/SVGIcons/UserIcon';
import SupportIcon from 'components/SVGIcons/SupportIcon';
import WarningIcon from 'components/SVGIcons/WarningIcon';
import ArrowDownIcon from 'components/SVGIcons/ArrowDownIcon';
import coloredit from 'assets/Images/icons/color-edit.png';
import { Link } from 'react-router-dom';

const ProfileDropdownMenu = () => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left z-50">
        <Menu.Button className="focus:outline-none focus-visible:ring-0">
          <div className={`h-12 w-12 border-2 rounded-full border-blue-400`}>
            <img src={profile} className={`rounded-full w-full h-full`} />
          </div>
        </Menu.Button>

        <MenuTransition>
          <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right bg-white dark:bg-dark shadow-lg dark:shadow-none shadow-gray-200 dark:border-gray-500 ring-0 focus:outline-none px-6 py-6 rounded-lg">
            <div className="px-1 py-1 ">
              <h5 className="text-[#302323] dark:text-white font-medium">Theme</h5>

              <ChangeThemes className="mt-3 mb-5" />

              <Menu.Item>
                <Link to="/products">
                  <div className="flex items-center gap-3 mb-3">
                    <UserIcon className="w-6" />
                    <span className="dark:text-gray-300">Account settings</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile-edit">
                  <div className="flex items-center gap-3 mb-3">
                    <img className="w-6" src={coloredit} alt="Edit" />
                    <span className="dark:text-gray-300">Edit profile</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/products">
                  <div className="flex items-center gap-3 mb-3">
                    <WarningIcon className="w-6" />
                    <span className="dark:text-gray-300">Info</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/products">
                  <div className="flex items-center gap-3 mb-3">
                    <SupportIcon className="w-6" />
                    <span className="dark:text-gray-300">Support</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/products">
                  <div className="flex items-center gap-3">
                    <ArrowDownIcon className="w-6" />
                    <span className="dark:text-gray-300">Legal</span>
                  </div>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </MenuTransition>
      </Menu>
    </div>
  );
};

export default ProfileDropdownMenu;
