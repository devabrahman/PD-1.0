import { Tab } from '@headlessui/react';
import { MoonIcon, SunIcon, StarIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function ChangeThemes({ className }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const applyTheme = (name) => {
    console.log('🔐 -> file: ChangeThemes.js:7 -> applyTheme -> name:', name);
  };

  useEffect(() => {
    console.log('🔐 -> file: ChangeThemes.js:15 -> ChangeThemes -> selectedIndex:', selectedIndex);
  }, [selectedIndex]);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className={`flex gap-1 bg-[#F4F4F8] p-1 rounded-lg ${className}`}>
        <Tab
          className={`flex gap-2 bg text-base items-center ${
            selectedIndex === 0 && 'bg-white'
          }  rounded-lg py-1.5 px-2.5`}
          onClick={() => applyTheme('light')}>
          <SunIcon className={`w-[20px] ${selectedIndex === 0 && 'text-gold'}`} /> Light
        </Tab>

        <Tab
          className={`flex gap-2 bg text-base items-center ${
            selectedIndex === 1 && 'bg-white'
          }  rounded-lg py-1.5 px-2.5`}
          onClick={() => applyTheme('dark')}>
          <MoonIcon className={`w-[20px] ${selectedIndex === 1 && 'text-gold'}`} /> Dark
        </Tab>

        <Tab
          className={`flex gap-2 bg text-base items-center ${
            selectedIndex === 2 && 'bg-white'
          }  rounded-lg py-1.5 px-2.5`}
          onClick={() => applyTheme('black')}>
          <StarIcon className={`w-[20px] ${selectedIndex === 2 && 'text-gold'}`} /> Black
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
}

export default ChangeThemes;
