export const Overview = ({ icon, title, amount }) => {
  return (
    <div className="flex w-full gap-[18px] py-5 px-6 rounded-2xl bg-white input-accent-box-shadow">
      <div className="w-14 h-14 bg-[#F4F7FE] rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div className="">
        <p className="font-medium text-[#97A6D5] text-sm">{title}</p>
        <p className="font-DMSons font-bold text-lg text-[#2B3674]">${amount}</p>
      </div>
    </div>
  );
};
