import Layout from 'components/common/Layout';
import RecentProduct from 'components/profile/RecentProduct';
// image
import profile from 'assets/Images/common/profile.png';
import check from 'assets/Images/icons/check.png';
import facebook from 'assets/Images/social/facebook.png';
import google from 'assets/Images/social/google.png';
import twitter from 'assets/Images/social/twitter.png';

const CustomerProfile = () => {
  return (
    <Layout title="Customer" padding="p-0 sm:px-10 sm:py-8">
      <div className="w-full h-60">
        <img
          src="/assets/images/profile/profile-bg.jpg"
          alt="profile bg image"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>

      <div className="relative mb-96">
        <div className="absolute -top-24 left-20">
          <div className="flex items-center mb-7">
            <div className="w-32 rounded-full p-1 relative">
              <img className="w-full" src={profile} alt="profile" />
              <div className="w-5 absolute right-3 bottom-3">
                <img src={check} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between ml-6">
              <div>
                <h2 className="text-2xl font-medium text-white dark:text-white/80">Babar Azam</h2>
                <p className="text-sm text-white dark:text-white font-medium">CEO / Co-Founder</p>
              </div>
            </div>
          </div>

          <p className="w-4/5">
            Hi, I&apos;m Alec Thompson, Decisions: If you can&apos;t decide, the answer is no. If
            two equally difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality).
          </p>

          <div className="space-y-3 py-6">
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Full Name:</span>
              <span className="text-[#302323] dark:text-white/80">Alec M. Thompson</span>
            </div>
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Mobile:</span>
              <span className="text-[#302323] dark:text-white/80">(44) 123 1234 123</span>
            </div>
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Email:</span>
              <span className="text-[#302323] dark:text-white/80">alecthompson@mail.com</span>
            </div>
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-lg text-[#3F3D56] dark:text-white">Location:</span>
              <span className="text-[#302323] dark:text-white/80">USA</span>
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
      </div>

      <RecentProduct />
    </Layout>
  );
};

export default CustomerProfile;
