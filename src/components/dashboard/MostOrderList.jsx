import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import OrdersTable from 'components/products/OrdersTable';

const MostOrderList = ({ className }) => {
  return (
    <section className={className}>
      <div className="rounded-xl w-full">
        <Tab.Group>
          <Tab.List className="bg-white w-5/12 flex justify-around input-accent-box-shadow rounded-xl px-2.5 py-3">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`font-medium text-base mr-4 outline-none ${
                    selected && 'text-[#1C92FF] bg-[#E4F7FF] rounded-md px-2 uppercase'
                  }`}>
                  Recent
                </button>
              )}
            </Tab>
            <div className="w-0.5 h-8 bg-transparent" />
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`font-medium text-base mr-4 outline-none ${
                    selected && 'text-[#1C92FF] bg-[#E4F7FF] rounded-md px-2 uppercase'
                  }`}>
                  POPULAR
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <OrdersTable />
            </Tab.Panel>
            <Tab.Panel>
              <OrdersTable />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default MostOrderList;
