// component imports
import { Overview } from './Overview';

// icon
import DollarIcon from 'components/SVGIcons/DollarIcon';
import ReportIcon from 'components/SVGIcons/ReportIcon';
import WalletIcon from 'components/SVGIcons/WalletIcon';
import { TruckIcon } from '@heroicons/react/24/outline';

const DashboardTop = () => {
  return (
    <section>
      <div className="grid grid-cols-12 gap-x-6 gap-y-[18px]">
        <div className="col-span-6 sm:col-span-3">
          <Overview icon={<ReportIcon className="" />} title={'Earnings'} amount={350.4} />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <Overview icon={<DollarIcon />} title={'Spend this month'} amount={642.39} />
        </div>
        <div className="col-span-6 sm:col-span-3 h-auto">
          <Overview icon={<WalletIcon />} title={'Shipment cost'} amount={350.4} />
        </div>
        <div className="col-span-6 sm:col-span-3 h-auto">
          <Overview
            icon={<TruckIcon className="h-7 w-7 stroke-amber-500" />}
            title={'Deliberies'}
            amount={350.4}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardTop;
