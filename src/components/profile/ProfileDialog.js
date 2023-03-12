import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import TransitionComponent from 'components/common/Transition';

import avatarIcon from '../../assets/Images/common/avatar.png';
import profile from '../../assets/Images/common/profile.png';
import atTheRate from '../../assets/Images/icons/atTheRate.png';
import coloredit from '../../assets/Images/icons/color-edit.png';
import colorgear from '../../assets/Images/icons/color-gear.png';
import saved from '../../assets/Images/icons/saved.png';
import linkedin from '../../assets/Images/social/linkedin.png';
import twitter from '../../assets/Images/social/twitter.png';

const ProfileDialog = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="outline-none">
            <div
              className={`h-14 w-14 border-4 rounded-full                       
                ${open ? 'border-blue-700' : 'border-transparent'}`}>
              <img src={avatarIcon} className={`rounded-full w-full h-full`} />
            </div>
          </Popover.Button>
          <TransitionComponent>
            <Popover.Panel className="absolute z-10 right-0">
              <div className="w-[320px] mx-auto rounded-3xl shadow-md shadow-[#87ceeb33] bg-white">
                <div className="p-6">
                  <h2 className="text-[#302323] font-medium">Profile</h2>
                  <div className="p-2">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-9 h-9 rounded-full">
                        <img className="w-full" src={profile} alt="Profile" />
                      </div>
                      <div>
                        <h2 className="text-[#302323] font-medium">Amantony Rojario</h2>
                        <p className="text-xs text-[#9F9FA2] font-medium">aman564@gmail.com</p>
                      </div>
                    </div>
                    <a href="" className="flex items-center gap-4 mb-5">
                      <div className="w-6">
                        <img className="w-full" src={coloredit} alt="Edit" />
                      </div>
                      <Link to="/vendor-profile-edit">
                        <p className="text-[#302323]">Edit profile</p>
                      </Link>
                    </a>
                    <Link to="" className="flex items-center gap-4 mb-5">
                      <div className="w-6">
                        <img className="w-full" src={saved} alt="Saved" />
                      </div>
                      <div>
                        <p className="text-[#302323]">Saved</p>
                      </div>
                    </Link>
                    <Link to="" className="flex items-center gap-4 mb-5">
                      <div className="w-6">
                        <img className="w-full" src={colorgear} alt="Setting" />
                      </div>
                      <div>
                        <p className="text-[#302323]">Settings</p>
                      </div>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#302323]">Contact details</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6">
                          <Link to="">
                            <img className="w-full" src={atTheRate} alt="atTheRate" />
                          </Link>
                        </div>
                        <div className="w-6">
                          <Link to="">
                            <img className="w-full" src={linkedin} alt="linkedin" />
                          </Link>
                        </div>
                        <div className="w-6">
                          <Link to="">
                            <img className="w-full" src={twitter} alt="twitter" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="py-5 px-7">
                  <Link to="/vendor-profile" className="text-[#5798F7] font-medium">
                    View full profile
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </TransitionComponent>
        </>
      )}
    </Popover>
  );
};

export default ProfileDialog;
