import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-7"></div>
      <div className="col-span-5 mt-8 pr-12 flex justify-center items-center">
        <div className="w-[95%]">
          <div className="mb-7">
            <h2 className="text-4xl text-[#2B3674] font-bold mb-2">Log In</h2>
            <p className="text-[#A3AED0]">Let&apos;s enter login details to use application</p>
          </div>

          <div className="grid gap-6 mb-7">
            <button className="w-full flex items-center justify-center gap-2 bg-[#F4F7FE] rounded-lg py-3">
              {/* <img className="w-5 h-5" src={google} alt="Google" /> */}
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
                Email
              </label>
              <input
                className="w-full border border-[#E0E5F2] rounded-lg px-3 py-2.5 placeholder:text-[#A3AED0] placeholder:text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="mail@simmmple.com"
              />
            </div>

            <div className="grid gap-6">
              <button
                className="w-full mx-auto bg-blue-500 text-white py-2.5 rounded-lg transform transition-all duration-500 hover:scale-95"
                type="submit">
                Reset
              </button>
              <Link
                to="/signup"
                className="w-full mx-auto bg-blue-50 transform transition-all duration-500 hover:scale-95 py-2.5 rounded-lg text-center"
                type="submit">
                Back to Login
              </Link>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
