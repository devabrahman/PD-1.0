import { Popover } from '@headlessui/react';
import profile from '../../assets/Images/common/profile.png';
import atTheRate from '../../assets/Images/icons/atTheRate.png';
import coloredit from '../../assets/Images/icons/color-edit.png';
import colorgear from '../../assets/Images/icons/color-gear.png';
import saved from '../../assets/Images/icons/saved.png';
import linkedin from '../../assets/Images/social/linkedin.png';
import twitter from '../../assets/Images/social/twitter.png';

const ProfileDialog = () => {
  //   const [isOpen, setIsOpen] = useState(true);
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
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
                <div>
                  <p className="text-[#302323]">Edit profile</p>
                </div>
              </a>
              <a href="" className="flex items-center gap-4 mb-5">
                <div className="w-6">
                  <img className="w-full" src={saved} alt="Saved" />
                </div>
                <div>
                  <p className="text-[#302323]">Saved</p>
                </div>
              </a>
              <a href="" className="flex items-center gap-4 mb-5">
                <div className="w-6">
                  <img className="w-full" src={colorgear} alt="Setting" />
                </div>
                <div>
                  <p className="text-[#302323]">Settings</p>
                </div>
              </a>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#302323]">Contact details</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6">
                    <a href="">
                      <img className="w-full" src={atTheRate} alt="atTheRate" />
                    </a>
                  </div>
                  <div className="w-6">
                    <a href="">
                      <img className="w-full" src={linkedin} alt="linkedin" />
                    </a>
                  </div>
                  <div className="w-6">
                    <a href="">
                      <img className="w-full" src={twitter} alt="twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-5 px-7">
            <a className="text-[#5798F7] font-medium" href="#">
              View full profile
            </a>
          </div>
        </div>
        ;
      </Popover.Panel>
    </Popover>
  );
};

export default ProfileDialog;
