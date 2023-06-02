import Layout from 'components/common/LeftLayout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Help = () => {
  return (
    <Layout title="Help" padding="p-0 sm:px-10 sm:py-8">
      <Breadcrumbs title="Help" link="/help" />

      <div className="w-4/5 mx-auto mt-6">
        <h2 className="text-2xl font-semibold mt-12">Frequently Asked Questions</h2>
        <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing</p>

        <div className="space-y-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-dark dark:bg-dark px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring0">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white dark:bg-dark text-gray-600 dark:text-gray-100 mt-1">
                  If you&apos;re unhappy with your purchase for any reason, email us within 90 days
                  and we&apos;ll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-dark px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring0">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit excepturi?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white dark:bg-dark text-gray-600 dark:text-gray-100 mt-1">
                  If you&apos;re unhappy with your purchase for any reason, email us within 90 days
                  and we&apos;ll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-dark px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring0">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white dark:bg-dark text-gray-600 dark:text-gray-100 mt-1">
                  If you&apos;re unhappy with your purchase for any reason, email us within 90 days
                  and we&apos;ll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-dark px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring0">
                  <span>What is your refund policy?</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white dark:bg-dark text-gray-600 dark:text-gray-100 mt-1">
                  If you&apos;re unhappy with your purchase for any reason, email us within 90 days
                  and we&apos;ll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-dark px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring0">
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit accusamus at iusto?
                  </span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white dark:bg-dark text-gray-600 dark:text-gray-100 mt-1">
                  If you&apos;re unhappy with your purchase for any reason, email us within 90 days
                  and we&apos;ll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-dark px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring0">
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit praesentium at vero?
                  </span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-white dark:bg-dark text-gray-600 dark:text-gray-100 mt-1">
                  If you&apos;re unhappy with your purchase for any reason, email us within 90 days
                  and we&apos;ll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
