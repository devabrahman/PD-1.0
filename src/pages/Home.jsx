import { CheckIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { spent } from 'api/spent';
import { Overview } from 'components/dashboard/Overview';
import MostOrderList from 'components/dashboard/MostOrderList';
import Layout from 'components/common/Layout';
import Activity from 'components/dashboard/Activity';
import Payment from 'components/dashboard/Payment';
import TotalProduct from 'components/dashboard/TotalProduct';
import TotalSales from 'components/dashboard/TotalSales';
// icon
import ChartIcon from 'components/SVGIcons/ChartIcon';
import DollarIcon from 'components/SVGIcons/DollarIcon';
import ReportIcon from 'components/SVGIcons/ReportIcon';
import WalletIcon from 'components/SVGIcons/WalletIcon';
import map from 'assets/Images/common/Map.png';
import CalenderIcon from 'components/SVGIcons/CalenderIcon';

const Home = () => {
  // Get Data from demo api
  const data = spent;

  return (
    // TODO
    <Layout title="Products" padding="px-8 py-8">
      <main className="py-5 dark:bg-dark px-3 sm:px-0">
        <section>
          <div className="grid grid-cols-12 gap-x-[18px] gap-y-[18px]">
            <div className="col-span-6 sm:col-span-3">
              <Overview icon={<ReportIcon />} title={'Earnings'} amount={350.4} />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Overview icon={<DollarIcon />} title={'Spend this month'} amount={642.39} />
            </div>
            <div className="col-span-6 sm:col-span-3 h-auto">
              <Overview icon={<WalletIcon />} title={'Earnings'} amount={350.4} />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <div className="flex w-full gap-[18px] py-5 px-6 rounded-2xl bg-white dark:bg-dark input-accent-box-shadow">
                <div className="w-6 h-14  rounded-full flex justify-center items-center"></div>
                <div>
                  <p className="font-medium text-[#97A6D5] text-sm">Sales</p>
                  <p className="font-DMSons font-bold text-lg text-[#2B3674]">$574.34</p>
                  <p className="text-[#A3AED0] text-[12px] font-bold font-DMSons">
                    <span className="text-[#05CD99] font-bold">+23% </span>
                    since last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-12 gap-6 mt-11">
          <div className="col-span-12 sm:col-span-9  mx-7 my-6">
            <div className="flex justify-between mb-7">
              <div className="bg-slate-100 rounded-md flex gap-1.5 items-center px-2.5">
                <CalenderIcon className="stroke-[#A3AED0]" />
                <p className="text-[#A3AED0] text-[14px] font-medium">This month</p>
              </div>
              <div className="p-1.5 rounded-[10px] bg-[#F4F7FE]">
                <ChartIcon />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-36 h-72">
                <p className="font-DMSons font-bold text-2xl mt-5 text-[#2B3674]">$37.5K</p>
                <p className="text-[#A3AED0] font-DMSons flex  text-[14px]">
                  Total Spent
                  <span className="text-[#05CD99]">
                    <ChevronUpIcon className="w-2.5 ml-1.5 mt-0.5 fill-[#05CD99]" />{' '}
                  </span>
                  <span className="text-[#05CD99] font-DMSons text-[11px]">+2.45%</span>
                </p>
                <div className="flex gap-1.5 items-center mt-6">
                  <div className="w-4 h-4 bg-[#05CD99] position-center rounded-full">
                    <CheckIcon className="w-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[#05CD99] font-bold">On track</p>
                </div>
              </div>
              <div width="650" height="730" className="h-[250px] w-[700px] ">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="6 6" vertical={false} />
                    <XAxis dataKey="time" />
                    <Tooltip />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="price"
                      stroke="#5798F6"
                      activeDot={{ r: 8, strokeWidth: 1 }}
                      strokeWidth={3}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="price2"
                      strokeWidth={3}
                      stroke="#FF6734"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex gap-4 md:block md:col-span-3 space-y-5">
            <TotalProduct />
            <TotalSales />
          </div>
          {/* <div className="flex justify-between w-full"></div> */}
          <div className="col-span-12 md:col-span-4 bg-white dark:bg-dark input-accent-box-shadow px-5 py-[30px] rounded-x">
            <p className="font-medium text-lg">Map</p>

            <div className="min-w-[331px]">
              <img className="w-full" src={map} alt="map images" />
            </div>
          </div>
          <Payment className="col-span-12 sm:col-span-5" />
          <Activity className="col-span-12 sm:col-span-3" />
        </section>

        <MostOrderList className="mt-11" />
      </main>
    </Layout>
  );
};

export default Home;
