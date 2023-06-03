import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import OrdersTable from 'components/products/OrdersTable';

const MostOrderList = ({ className }) => {
  return (
    <section className={className}>
      <div className="rounded-xl w-full">
        <Tab.Group>
          <Tab.List className="bg-white dark:bg-black w-72 flex justify-between input-accent-box-shadow rounded-xl px-2.5 py-3">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`font-medium text-base outline-none px-4 rounded-md ${
                    selected
                      ? 'text-[#1C92FF] bg-[#E4F7FF] uppercase'
                      : 'dark:bg-gray-600 dark:text-gray-200'
                  }`}>
                  Recent
                </button>
              )}
            </Tab>
            <div className="w-0.5 h-8 bg-transpaent" />
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`font-medium text-base outline-none px-4 rounded-md ${
                    selected
                      ? 'text-[#1C92FF] bg-[#E4F7FF] uppercase'
                      : 'dark:bg-gray-600 dark:text-gray-200'
                  }`}>
                  Popular
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
