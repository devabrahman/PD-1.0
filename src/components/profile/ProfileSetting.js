import { Menu, Transition } from '@headlessui/react';
import GearIcon from 'components/SVGIcons/GearIcon';
import React from 'react';
import ChangeThemes from './ChangeThemes';

const ProfileSetting = () => {
  return (
    <Menu>
      <Menu.Button>
        <GearIcon />
      </Menu.Button>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-175 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
        <Menu.Items className="absolute -right-3 z-10 w-80 top-3  bg-white input-accent-box-shadow py-6 px-5 rounded-3xl">
          <Menu.Item>
            <h5 className="text-[#302323]  font-medium">Theme</h5>
          </Menu.Item>
          <Menu.Item>
            <ChangeThemes />
          </Menu.Item>
          <Menu.Item>
            {(
              { active } //eslint-disable-line
            ) => (
              <ul className="space-y-5">
                <li className="flex gap-5">Account settings</li>
                <li className="flex gap-5">Give feedback</li>
                <li className="flex gap-5">Info</li>
                <li className="flex gap-5">Support</li>
                <li className="flex gap-5">Legal</li>
              </ul>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileSetting;
