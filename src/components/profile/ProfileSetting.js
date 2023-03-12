import React from 'react';
import { Menu } from '@headlessui/react';

import ChangeThemes from './ChangeThemes';
import GearIcon from 'components/SVGIcons/GearIcon';
import UserIcon from '../SVGIcons/UserIcon';
import SupportIcon from 'components/SVGIcons/SupportIcon';
import MessageIcon from 'components/SVGIcons/MessageIcon';
import WarningIcon from 'components/SVGIcons/WarningIcon';
import ArrowDownIcon from 'components/SVGIcons/ArrowDownIcon';
import TransitionComponent from 'components/common/Transition';

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
                <li className="flex gap-5">
                  <UserIcon /> Account settings
                </li>
                <li className="flex gap-5">
                  <MessageIcon /> Give feedback
                </li>
                <li className="flex gap-5">
                  <WarningIcon /> Info
                </li>
                <li className="flex gap-5">
                  <SupportIcon /> Support
                </li>
                <li className="flex gap-5">
                  <ArrowDownIcon /> Legal
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
