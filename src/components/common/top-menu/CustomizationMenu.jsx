import { Popover } from '@headlessui/react';
import TransitionComponent from 'components/common/MenuTransition';
import CustomizationIcon from 'components/SVGIcons/CustomizationIcon';

const CustomizationMenu = () => {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="outline-none">
            <div className="relative bg-white dark:bg-dark transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 dark:border-gray-700 table-shadow rounded-xl grid place-content-center cursor-pointer h-10 w-12 px-2">
              <CustomizationIcon />
            </div>
          </Popover.Button>
          <TransitionComponent>
            <Popover.Panel className="absolute z-10 right-0.5">
              <div className="w-[320px] pt-[30px] pb-12 mt-4 px-6  mx-auto rounded-3xl drop-shadow-2xl bg-white dark:bg-lightDark  border-transparent border">
                <p>Put someting you like...</p>
              </div>
            </Popover.Panel>
          </TransitionComponent>
        </>
      )}
    </Popover>
  );
};

export default CustomizationMenu;
