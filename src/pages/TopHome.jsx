import MostOrderList from 'components/dashboard/MostOrderList';
import TopLayout from 'components/common/TopLayout';
import Activity from 'components/dashboard/Activity';
import Payment from 'components/dashboard/Payment';
import TotalProduct from 'components/dashboard/TotalProduct';

// icon
import map from 'assets/Images/common/Map.png';
import DashboardTop from 'components/dashboard/DashboardTop';
import DashboardLineChart from 'components/dashboard/DashboardLineChart';
import TotalSales from 'components/dashboard/TotalSales';

const TopHome = () => {
  return (
    <TopLayout title="Dashboard" padding="px-8 py-8">
      <main className="py-5 px-3 sm:px-0">
        <DashboardTop />

        <section className="grid grid-cols-12 gap-8 mt-8">
          <DashboardLineChart />
          <div className="col-span-12 md:block md:col-span-3 flex gap-4 space-y-5">
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
    </TopLayout>
  );
};

export default TopHome;
