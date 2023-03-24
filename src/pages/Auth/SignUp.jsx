import eye from '../../../assets/images/common/eye.png';
import google from '../../../assets/images/common/google.png';
import horizon from '../../../assets/images/common/horizon.png';
import leftAngle from '../../../assets/images/common/left-angle.png';
import moon from '../../../assets/images/common/moon.png';

const SignUp = () => {
  return (
    <section className="relative">
      <div className="flex justify-between">
        <div className="w-full py-5">
          <div className="w-[460px] h-full mx-auto">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-3">
                <img src={leftAngle} alt="leftAngle" />
              </div>
              <span className="text-sm text-[#A3AED0] font-medium">Back to dashboard</span>
            </div>
            <div className="my-auto w-[410px]">
              <div className="mb-7">
                <h2 className="text-4xl text-[#2B3674] font-bold mb-2">Sign In</h2>
                <p className="text-[#A3AED0]">Enter your email and password to sign in!</p>
              </div>
              <div className="grid gap-6 mb-7">
                <button className="w-full flex items-center justify-center gap-2 bg-[#F4F7FE] rounded-2xl py-4">
                  <img className="w-5 h-5" src={google} alt="Google" />
                  <span className="text-sm font-medium text-[#2B3674]">Sign in with Google</span>
                </button>
                <div className="flex items-center gap-4">
                  <span className="bg-[#E0E5F2] h-[1px] block w-full"></span>
                  <span className="text-sm text-[#A3AED0] font-medium">or</span>
                  <span className="bg-[#E0E5F2] h-[1px] block w-full"></span>
                </div>
              </div>
              <from>
                <div className="flex flex-col gap-3 mb-6">
                  <label className="text-[#2B3674] font-medium" htmlFor="email">
                    Email<sup className="text-[#4318FF]">*</sup>
                  </label>
                  <input
                    className="w-full border border-[#E0E5F2] rounded-2xl px-6 py-4 placeholder:text-[#A3AED0] placeholder:text-sm"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="mail@simmmple.com"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-6">
                  <label className="text-[#2B3674] font-medium" htmlFor="password">
                    Password<sup className="text-[#4318FF]">*</sup>
                  </label>
                  <div className="flex items-center justify-between w-full border border-[#E0E5F2] rounded-2xl px-6 py-4">
                    <input
                      className="placeholder:text-[#A3AED0] placeholder:text-sm outline-none"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Min. 8 characters"
                    />
                    <button>
                      <img className="w-5" src={eye} alt="Show" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-3">
                    <input type="checkbox" name="check" id="check" />
                    <label htmlFor="check">Keep me logged in</label>
                  </div>
                  <a className="text-[#4318FF] text-sm font-medium" href="http://">
                    Forget password?
                  </a>
                </div>
                <div className="grid gap-6">
                  <button className="w-full bg-[#4318FF] text-white py-4 rounded-2xl" type="submit">
                    Sign In
                  </button>
                  <p className="text-sm text-[#2B3674]">
                    Not registered yet?{' '}
                    <span className="font-bold text-[#4318FF]">Create an Account</span>
                  </p>
                </div>
              </from>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <img className="w-full" src={horizon} alt="Horizon" />
          <div className="w-[60px] h-[60px] absolute right-8 bottom-8">
            <img className="w-full" src={moon} alt="Moon" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 w-full flex items-center justify-center gap-40">
        <div>
          <p className="text-[#A3AED0] text-sm font-medium min-w-min">
            &copy; 2022 Horizon UI. All Rights Reserved. Made with love by Simple!
          </p>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10">
            <li>
              <a className="text-white text-sm font-medium" href="https://">
                Marketplace
              </a>
            </li>
            <li>
              <a className="text-white text-sm font-medium" href="https://">
                License
              </a>
            </li>
            <li>
              <a className="text-white text-sm font-medium" href="https://">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="text-white text-sm font-medium" href="https://">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
