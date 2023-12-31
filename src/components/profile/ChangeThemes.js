import React, { useLayoutEffect } from 'react';
import { Tab } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';
import { setDarkMode, themeCheck } from 'utils/darkmode';

function ChangeThemes({ className }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const activeTheme = themeCheck();
  const applyTheme = (name) => {
    setDarkMode(name);
  };

  useLayoutEffect(() => {
    const activeTheme = themeCheck();
    console.log('🔐 -> file: ChangeThemes.js:17 -> useLayoutEffect -> activeTheme:', activeTheme);
    if (activeTheme === 'light') {
      setSelectedIndex(0);
    } else if (activeTheme === 'dark') {
      setSelectedIndex(1);
    }
  }, []);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List
        className={`flex justify-around gap-1 bg-[#F4F4F8] dark:bg-gray-800 p-1 rounded-lg ${className}`}>
        <Tab
          className={`dark:bg-transparent flex gap-2 bg text-base items-center ${
            selectedIndex === 0 && 'bg-white'
          }  rounded-lg py-1.5 px-2.5`}
          onClick={() => applyTheme('light')}>
          <SunIcon className={`w-[20px] dark:text-gold ${selectedIndex === 0 && 'text-gold'}`} />
          <span className="dark:text-white">Light</span>
        </Tab>

        <Tab
          className={`flex gap-2 dark:text-white bg text-base items-center ${
            selectedIndex === 1 && 'dark:bg-[#474950]'
          }  rounded-lg py-1.5 px-2.5`}
          onClick={() => applyTheme('dark')}>
          <MoonIcon
            className={`w-[20px] ${selectedIndex === 1 && 'text-[#87D3EB] fill-[#87D3EB]'}`}
          />{' '}
          Dark
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
}

export default ChangeThemes;
