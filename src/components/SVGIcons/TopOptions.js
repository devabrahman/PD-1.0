import { Popover } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import TransitionComponent from 'components/common/Transition';

const TopOptions = ({ sidebarPosition, setSidebarPosition }) => {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="outline-none">
            <div className="relative bg-white transform-gpu hover:scale-95 transition-all duration-150 border border-gray-50 table-shadow rounded-xl grid place-content-center cursor-pointer h-10 w-12 px-2">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.586 1.586C1.2109 1.96099 1.00011 2.46961 1 3V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V3C7 2.46957 6.78929 1.96086 6.41421 1.58579C6.03914 1.21071 5.53043 1 5 1H3C2.46961 1.00011 1.96099 1.2109 1.586 1.586Z"
                  fill="white"
                  stroke="#FE516D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.586 1.586C12.2109 1.96099 12.0001 2.46961 12 3V5C12 5.53043 12.2107 6.03914 12.5858 6.41421C12.9609 6.78929 13.4696 7 14 7H16C16.5304 7 17.0391 6.78929 17.4142 6.41421C17.7893 6.03914 18 5.53043 18 5V3C18 2.46957 17.7893 1.96086 17.4142 1.58579C17.0391 1.21071 16.5304 1 16 1H14C13.4696 1.00011 12.961 1.2109 12.586 1.586Z"
                  fill="white"
                  stroke="#FFAE6A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.586 12.586C1.2109 12.961 1.00011 13.4696 1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H5C5.53043 18 6.03914 17.7893 6.41421 17.4142C6.78929 17.0391 7 16.5304 7 16V14C7 13.4696 6.78929 12.9609 6.41421 12.5858C6.03914 12.2107 5.53043 12 5 12H3C2.46961 12.0001 1.96099 12.2109 1.586 12.586Z"
                  fill="white"
                  stroke="#45E87E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.586 12.586C12.2109 12.961 12.0001 13.4696 12 14V16C12 16.5304 12.2107 17.0391 12.5858 17.4142C12.9609 17.7893 13.4696 18 14 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12H14C13.4696 12.0001 12.961 12.2109 12.586 12.586Z"
                  fill="white"
                  stroke="#5798F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                      className="w-[34px] h-[34px] relative rounded-lg cursor-pointer shadow-[0_5px_10px_5px_rgba(36,53,80,0.10)] ">
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
                      className="w-[34px] h-[34px] relative rounded-lg cursor-pointer shadow-[0_5px_10px_5px_rgba(36,53,80,0.10)] ">
                      <span
                        className={`w-[25px] h-1 rounded-md ${
                          sidebarPosition === 'top' ? 'bg-primary' : 'bg-gray-300'
                        }  text-center absolute top-2 left-1`}></span>
                    </li>
                    <li
                      onClick={() => {
                        setSidebarPosition('right');
                      }}
                      className="w-[34px] h-[34px] relative rounded-lg cursor-pointer shadow-[0_5px_10px_5px_rgba(36,53,80,0.10)] ">
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

export default TopOptions;
