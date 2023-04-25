import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-7 flex justify-center items-center">
        <div className="w-[800px] h-[800px]">
          <img src="/assets/images/auth/amazing_ecom.gif" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="col-span-5 mt-8 pr-12 flex justify-center items-center">
        <div className="w-[95%]">
          <div className="mb-7">
            <h2 className="text-4xl text-[#2B3674] font-bold mb-2">Forgot password</h2>
            <p className="text-[#A3AED0]">Let&apos;s enter email address to reset password</p>
          </div>

          <from>
            <div className="flex flex-col gap-3 mb-6">
              <label className="text-[#2B3674] font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-[#A3AED0] placeholder:text-sm bg-white"
                type="email"
                name="email"
                id="email"
                placeholder="mail@simmmple.com"
                required
              />
            </div>

            <div className="grid gap-6">
              <button
                className="w-full mx-auto bg-blue-500 text-white py-2.5 rounded-lg transform transition-all duration-500 hover:scale-95"
                type="submit"
                onClick={() => navigate('/reset-mail-sent')}>
                Reset Password
              </button>
              <Link
                to="/login"
                className="w-full mx-auto hover:bg-blue-50 transform transition-all duration-150 py-2.5 rounded-lg text-blue-400 text-center"
                type="submit">
                Go Back
              </Link>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
