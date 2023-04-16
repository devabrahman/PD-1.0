import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import ChangeThemes from './ChangeThemes';
import TransitionComponent from 'components/common/MenuTransition';
// icon
import GearIcon from 'components/SVGIcons/GearIcon';
import UserIcon from 'components/SVGIcons/UserIcon';
import SupportIcon from 'components/SVGIcons/SupportIcon';
import WarningIcon from 'components/SVGIcons/WarningIcon';
import ArrowDownIcon from 'components/SVGIcons/ArrowDownIcon';
import coloredit from 'assets/Images/icons/color-edit.png';

const ProfileSetting = () => {
  return (
    <Menu>
      <Menu.Button>
        <GearIcon />
      </Menu.Button>

      <TransitionComponent>
        <Menu.Items className="absolute -right-3 z-10 w-80 top-3 dark:bg-[#303038] dark:text-white  bg-white input-accent-box-shadow py-6 px-5 rounded-3xl">
          <Menu.Item>
            <h5 className="text-[#302323] dark:text-white font-medium">Theme</h5>
          </Menu.Item>
          <Menu.Item>
            <ChangeThemes className="mt-6 mb-7" />
          </Menu.Item>
          <Menu.Item>
            {(
              { active } //eslint-disable-line
            ) => (
              <ul className="space-y-5">
                <li className="flex gap-4 ml-1">
                  <UserIcon className="w-6" /> Account settings
                </li>
                <li className="flex gap-3 ml-1.5">
                  <img className="w-6" src={coloredit} alt="Edit" />
                  <Link to="/vendor-profile-edit">
                    <p className="">Edit profile</p>
                  </Link>
                </li>
                <li className="flex gap-4">
                  <WarningIcon className="w-6" /> Info
                </li>
                <li className="flex gap-4">
                  <SupportIcon className="w-6" /> Support
                </li>
                <li className="flex gap-4">
                  <ArrowDownIcon className="w-6" /> Legal
                </li>
              </ul>
            )}
          </Menu.Item>
        </Menu.Items>
      </TransitionComponent>
    </Menu>
  );
};

export default ProfileSetting;
