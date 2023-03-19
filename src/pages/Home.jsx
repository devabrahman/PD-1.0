import Layout from 'components/common/Layout';
import { Overview } from 'components/dashboard/Overview';
import CalenderIcon from 'components/SVGIcons/CalenderIcon';
import ChartIcon from 'components/SVGIcons/ChartIcon';
import DollarIcon from 'components/SVGIcons/DollarIcon';
import ReportIcon from 'components/SVGIcons/ReportIcon';
import WalletIcon from 'components/SVGIcons/WalletIcon';

const Home = () => {
  return (
    // TODO
    <Layout title="Products" padding="px-8 py-8">
      <main className="py-5">
        <section className="">
          <div className="flex gap-[18px]  ">
            <Overview icon={<ReportIcon />} title={'Earnings'} amount={350.4} />
            <Overview icon={<DollarIcon />} title={'Spend this month'} amount={642.39} />
            <Overview icon={<WalletIcon />} title={'Earnings'} amount={350.4} />
            <div className="flex w-full gap-[18px] py-5 px-6 rounded-2xl bg-white input-accent-box-shadow">
              <div className="w-6 h-14  rounded-full flex justify-center items-center"></div>
              <div className="">
                <p className="font-medium text-[#97A6D5] text-sm">Sales</p>
                <p className="font-DMSons font-bold text-lg text-[#2B3674]">$574.34</p>
                <p className="text-[#A3AED0] text-[12px] font-bold font-DMSons">
                  <span className="text-[#05CD99] font-bold">+23% </span>
                  since last month
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-12 gap-6 mt-11">
          <div className="col-span-9 mx-7 my-6">
            <div className="flex justify-between">
              <div className="flex gap-1.5 cursor-pointer bg-[#F4F7FE] py-2.5 px-[11px] rounded-md">
                <CalenderIcon />
                <p className="text-sm font-medium font-DMSons">This month</p>
              </div>
              <div className="p-1.5 rounded-[10px] bg-[#F4F7FE]">
                <ChartIcon />
              </div>
            </div>
          </div>
          <div className="col-span-3"></div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
