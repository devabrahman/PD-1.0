export const Overview = ({ icon, title, amount }) => {
  return (
    <div className="flex w-full gap-4 px-4 py-4 rounded-xl bg-white dark:bg-dark h-[106px] sm:h-auto">
      <div className="w-14 h-14 bg-[#F4F7FE] dark:bg-darkBorder rounded-2xl flex justify-center items-center">
        {icon}
      </div>
      <div>
        <p className="font-medium text-[#97A6D5] text-sm">{title}</p>
        <p className="font-DMSons font-bold text-lg text-[#2B3674]">${amount}</p>

        <p className="text-[#A3AED0] text-xs mt-2">
          <span className="text-[#05CD99] font-medium">+23% </span>
          since last month
        </p>
      </div>
    </div>
  );
};
