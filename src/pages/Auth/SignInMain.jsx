import BgShadow from 'components/SVGIcons/BgShadow';
import { Link } from 'react-router-dom';
import eye from '../../assets/Images/auth/eye.png';
import facebook from '../../assets/Images/auth/facebook.png';
import google from '../../assets/Images/auth/google.png';
import image1 from '../../assets/Images/auth/image1.png';
import image2 from '../../assets/Images/auth/image2.png';
import twitter from '../../assets/Images/auth/twitter.png';

const SignIn = () => {
  return (
    <section className="relative bg-[#F3F5F9] min-h-screen py-10">
      <div className="flex items-center gap-28 max-w-[1400px] mx-auto">
        {/* left side starts */}
        <div className="relative w-full">
          <div className="w-[440px] mt-11">
            <img src={image1} alt="Image" />
          </div>
          <div className="w-[350px] absolute top-[155px] right-0">
            <img src={image2} alt="Image" />
          </div>
        </div>
        {/* left side ends */}
        {/* right side start */}
        <div className="relative w-full overflow-hidden">
          {/* width might be changed */}
          <div className="grid gap-20 w-[400px] mx-auto relative z-50">
            <div className="grid gap-5">
              <h2 className="text-4xl font-semibold text-[#190f77e6]">Sign Up</h2>
              <div className="flex items-center gap-2">
                <span className="w-11 h-[1px] bg-black block"></span>
                <h4 className="font-medium text-[#F4316B]">Sign up with</h4>
              </div>
            </div>
            <div>
              <div className="grid gap-5">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter user name"
                    className="w-full px-7 py-3 border border-[#F0F0F0] rounded-2xl outline-none bg-white"
                  />
                </div>
                <div className="w-full relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-7 py-3 border border-[#F0F0F0] rounded-2xl outline-none bg-white"
                  />
                  <div className="w-4 absolute top-1/2 right-7 -translate-y-1/2 cursor-pointer z-50">
                    <img className="w-full" src={eye} alt="" />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" id="check" className="w-8 h-8" />
                  <label htmlFor="check" className="text-[#3f3d56d9]">
                    I have read and agree with Terms of Service and our Privacy Policy
                  </label>
                </div>
                <div>
                  <button className="text-white bg-[#5798F6] w-full py-3 rounded-2xl text-[22px] font-medium">
                    Sign in
                  </button>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-16 h-[2px] bg-white shadow block"></span>
                    <span className="text-sm text-[#848484]">Or continue with</span>
                    <span className="w-16 h-[2px] bg-white shadow block"></span>
                  </div>
                  <div className="flex justify-center gap-10">
                    <a href="" className="block w-16 h-16 border border-white rounded-2xl p-3">
                      <img src={google} alt="Google" />
                    </a>
                    <a href="" className="block w-16 h-16 border border-white rounded-2xl p-3">
                      <img src={twitter} alt="twitter" />
                    </a>
                    <a href="" className="block w-16 h-16 border border-white rounded-2xl p-3">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <p className="flex gap-3 items-center font-medium text-sm">
                      <span className="text-[#535353]">Already have an account?</span>
                      <Link to="/signup">
                        <span className="text-[#F4316B]">Sign Up</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-20 w-full h-[350px] -rotate-12"
            style={{
              backgroundImage: `url(${(<BgShadow />)})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}></div>
        </div>
        {/* right side ends */}
      </div>
    </section>
  );
};

export default SignIn;
