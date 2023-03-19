import Layout from 'components/common/LayoutBackup';
import check from '../../assets/Images/common/check.png';
import eye from '../../assets/Images/common/eye.png';
import profile from '../../assets/Images/common/profile.png';

const ProfileEdit = () => {
  return (
    <Layout title="">
      <section>
        <div className="w-[492px] mx-auto mb-20">
          <h3 className="text-xl font-medium text-[#302323]">Edit profile</h3>
          <div className="w-[130px] h-[130px] mx-auto rounded-full shadow-lg shadow-[#87ceeb40] p-1 relative mb-10">
            <img className="w-full" src={profile} alt="Profile" />
            <div className="w-5 h-5 absolute right-2 bottom-3">
              <img className="w-full" src={check} alt="check" />
            </div>
          </div>
          <form className="w-full">
            <div className="flex items-center gap-7 mb-5">
              <div>
                <label
                  className="text-sm text-[#2B3674] font-medium mb-3 block"
                  htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Amantony"
                />
              </div>
              <div>
                <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="lastName">
                  Lastst Name
                </label>
                <input
                  className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Rojario"
                />
              </div>
            </div>
            <div className="mb-5 w-full">
              <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="email">
                Email<sup className="text-[#5798F7]">*</sup>
              </label>
              <input
                className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="mail@simmmple.com"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                className="text-sm text-[#2B3674] font-medium mb-3 block"
                htmlFor="phoneNumber">
                Contact Number
              </label>
              <input
                className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="666-598-8965"
              />
            </div>
            <div className="flex items-center gap-7 mb-5">
              <div>
                <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="city">
                  City
                </label>
                <input
                  className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Mcaliem"
                />
              </div>
              <div>
                <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="state">
                  State
                </label>
                <input
                  className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="state"
                  id="state"
                  placeholder="New York"
                />
              </div>
            </div>
            <div className="flex items-center gap-7 mb-5">
              <div>
                <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="zipCode">
                  Zip code
                </label>
                <input
                  className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="111356"
                />
              </div>
              <div>
                <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="country">
                  Country
                </label>
                <input
                  className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="United States"
                />
              </div>
            </div>
            <div className="mb-8 w-full relative">
              <label className="text-sm text-[#2B3674] font-medium mb-3 block" htmlFor="password">
                Password
              </label>
              <input
                className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                type="password"
                name="password"
                id="password"
                placeholder="Min. 8 characters"
              />
              <button className="absolute right-5 top-1/2 translate-y-1/2">
                <img className="w-6" src={eye} alt="" />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <button className="text-[#5798F7] text-sm font-bold rounded-xl border border-[#5798F7] px-5 py-3">
                Back To Home{' '}
              </button>
              <button className="bg-[#5798F7] text-white text-sm font-bold rounded-xl px-5 py-3">
                Back To Home{' '}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileEdit;
