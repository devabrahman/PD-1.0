import { Popover } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import TransitionComponent from 'components/common/Transition';
import CustomizationIcon from 'components/SVGIcons/CustomizationIcon';

const CustomizationMenu = ({ sidebarPosition, setSidebarPosition }) => {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="outline-none">
            <div className="relative bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 table-shadow rounded-xl grid place-content-center cursor-pointer h-10 w-12 px-2">
              <CustomizationIcon />
            </div>
          </Popover.Button>
          <TransitionComponent>
            <Popover.Panel className="absolute z-10 right-0.5">
              <>
                <div className="w-[320px] pt-[30px] pb-12 mt-4 px-6  mx-auto rounded-3xl drop-shadow-2xl bg-white  border-transparent border">
                  <ul className=" flex gap-[14px] justify-start ">
                    <li
                      onClick={() => {
                        setSidebarPosition('left');
                      }}
                      className="w-[34px] h-[34px] relative rounded-lg cursor-pointer shadow-[0_5px_10px_5px_rgba(01,27,68,0.06)] ">
                      <span
                        className={`w-[25px] h-1 rounded-md ${
                          sidebarPosition === 'left' ? 'bg-primary' : 'bg-gray-300'
                        } text-center absolute top-2 left-1`}></span>
                      <span
                        className={`h-[20px] w-1 rounded-md  ${
                          sidebarPosition === 'left' ? 'bg-primary' : 'bg-gray-300'
                        } text-center absolute top-2 left-[10px]`}></span>
                    </li>
                    <li
                      onClick={() => {
                        setSidebarPosition('top');
                      }}
                      className="w-[34px] h-[34px] relative rounded-lg cursor-pointer shadow-[0_5px_10px_5px_rgba(01,27,68,0.06)]">
                      <span
                        className={`w-[25px] h-1 rounded-md ${
                          sidebarPosition === 'top' ? 'bg-primary' : 'bg-gray-300'
                        }  text-center absolute top-2 left-1`}></span>
                    </li>
                    <li
                      onClick={() => {
                        setSidebarPosition('right');
                      }}
                      className="w-[34px] h-[34px] relative rounded-lg cursor-pointer shadow-[0_5px_10px_5px_rgba(01,27,68,0.06)]">
                      <span
                        className={`w-[25px] h-1 rounded-md ${
                          sidebarPosition === 'right' ? 'bg-primary' : 'bg-gray-300'
                        } text-center absolute top-2 left-1`}></span>
                      <span
                        className={`h-[20px] w-1 rounded-md ${
                          sidebarPosition === 'right' ? 'bg-primary' : 'bg-gray-300'
                        } text-center absolute top-2 left-[18px]`}></span>
                    </li>
                  </ul>

                  <div className="flex gap-2.5 mt-[30px] items-center">
                    <p className="text-xs font-secondary">Color</p>
                    <ul className="flex gap-4 items-center">
                      <li className="cursor-pointer border border-transparent rounded-full">
                        <span className="rounded-full w-5 h-5 bg-yellow-500 block"></span>
                      </li>
                      <li className="cursor-pointer border border-transparent rounded-full">
                        <span className="rounded-full w-5 h-5 bg-[#FBA66C] block"></span>
                      </li>
                      <li className="cursor-pointer  border border-transparent rounded-full">
                        <span className="rounded-full w-5 h-5 bg-[#62C799] block"></span>
                      </li>
                      <li className="cursor-pointer border border-[#1C92FF] rounded-full">
                        <span className="rounded-full w-5 h-5 bg-[#1C92FF] block m-1 "></span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-12 ">
                    <p className="font-medium">Aa</p>
                    <form action="mt-[5px] ">
                      <div className="relative block top-1">
                        <MagnifyingGlassIcon className="w-4 text-primary absolute top-2.5 left-2" />

                        <input
                          className="input-accent-box-shadow placeholder:font-[#B9B9B9] placeholder:text-sm py-1.5 px-1 rounded-md pl-7 w-full outline-none"
                          type="text"
                          placeholder="Type your favorite fonts"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </>
            </Popover.Panel>
          </TransitionComponent>
        </>
      )}
    </Popover>
  );
};

export default CustomizationMenu;
