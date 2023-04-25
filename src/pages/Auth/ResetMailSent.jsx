import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ResetMailSent = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-7 flex justify-center items-center">
        <div className="w-[800px] h-[800px]">
          <img src="/assets/images/auth/amazing_ecom.gif" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="col-span-5 mt-8 pr-12 flex justify-center items-center">
        <div className="w-[95%] text-center">
          <PaperAirplaneIcon className="h-20 w-20 text-amber-400 -rotate-45 mx-auto" />
          <h2 className="text-4xl text-[#2B3674] font-bold mt-4 mb-2">Mail sent successfully</h2>
          <p className="text-xl">
            Please click on the verification link we sent to your mail to reset password
          </p>

          <div className="grid gap-6">
            <Link
              to="/"
              className="w-full mx-auto bg-blue-500 text-white py-2.5 rounded-lg transform transition-all duration-500 hover:scale-95 mt-10">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetMailSent;
