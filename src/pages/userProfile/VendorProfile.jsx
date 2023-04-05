import Layout from 'components/common/Layout';
import ProfileSetting from 'components/profile/ProfileSetting';
import RecentProduct from 'components/profile/RecentProduct';
import HandelMailto from 'components/common/HandelMailto';
// image
import profile from 'assets/Images/common/profile.png';
import bg from 'assets/Images/common/vendor-profile-bg.png';
import check from 'assets/Images/icons/check.png';
import edit from 'assets/Images/icons/edit.png';
import notification from 'assets/Images/icons/notification.png';
import search from 'assets/Images/icons/search.png';
import user from 'assets/Images/icons/user.png';
import envelop from 'assets/Images/social/envelop.png';
import facebook from 'assets/Images/social/facebook.png';
import google from 'assets/Images/social/google.png';
import twitter from 'assets/Images/social/twitter.png';

const VendorProfile = () => {
  return (
    <Layout title="" padding="0">
      <section className="pb-10">
        <div>
          <div
            className="h-[270px] p-8 rounded-xl  shadow-lg shadow-[#87ceeb40]"
            style={{
              background: `url(${bg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
            <div className="flex items-center justify-end gap-6">
              <div className="flex items-center py-3 px-4 border border-[#b9b9b9a6] rounded-2xl">
                <img className="w-5" src={search} alt="Search" />
                <input
                  className="border-none outline-none bg-transparent"
                  type="text"
                  name="search"
                  id="search"
                />
              </div>
              <div className="flex items-center gap-2 ">
                <div className="w-10 h-10 rounded-xl shadow-md shadow-[#87ceeb40] bg-[#ffffff33] flex items-center justify-center">
                  <img className="w-[18px]" src={user} alt="" />
                </div>
                <span className="text-xl text-[#5798F7] font-medium">Log out</span>
              </div>
              <div className="relative block mt-2.5">
                <ProfileSetting />
              </div>
              <div className="w-10 h-10 rounded-xl shadow-md shadow-[#87ceeb40] bg-[#ffffff33] flex items-center justify-center">
                <img className="w-[18px]" src={notification} alt="" />
              </div>
            </div>
          </div>
          <div className="px-10 flex items-center gap-4 mb-7">
            <div className="w-32 rounded-full p-1 shadow-md shadow-[#87ceeb40] relative mt-[-50px]">
              <img className="w-full" src={profile} alt="profile" />
              <div className="w-5 absolute right-3 bottom-3">
                <img src={check} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between flex-grow">
              <div>
                <h2 className="text-xl font-medium text-[#302323]">Amantony Rojario</h2>
                <p className="text-sm text-[#848484]dark:text-white font-medium">
                  CEO / Co-Founder
                </p>
              </div>
              <HandelMailto mailto="no-reply@example.com">
                <div className="w-7 cursor-pointer">
                  <img className="w-full" src={envelop} alt="envelop" />
                </div>
              </HandelMailto>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl text-[#5798F7] font-medium">Profile Information</span>
            <div className="w-[18px]">
              <img className="w-full" src={edit} alt="edit" />
            </div>
          </div>
          <div className="max-w-[790px] text-lg text-[#302323] dark:text-white mb-3">
            <p>
              Hi, I&apos;m Alec Thompson, Decisions: If you can&apos;t decide, the answer is no. If
              two equally difficult paths, choose the one more painful in the short term (pain
              avoidance is creating an illusion of equality).
            </p>
          </div>
          <div className="space-y-3 py-6">
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Full Name:</span>
              <span className="text-[#302323]">Alec M. Thompson</span>
            </div>
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Mobile:</span>
              <span className="text-[#302323]">(44) 123 1234 123</span>
            </div>
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Email:</span>
              <span className="text-[#302323]">alecthompson@mail.com</span>
            </div>
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Location:</span>
              <span className="text-[#302323]">USA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Social:</span>
              <div className="flex items-center gap-4">
                <div className="w-6">
                  <img className="w-full" src={google} alt="google" />
                </div>
                <div className="w-6">
                  <img className="w-full" src={twitter} alt="twitter" />
                </div>
                <div className="w-6">
                  <img className="w-full" src={facebook} alt="facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <RecentProduct />
      </section>
    </Layout>
  );
};

export default VendorProfile;
