import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/LeftLayout';
import Bell from 'components/SVGIcons/Bell';
import Check from 'components/SVGIcons/Check';

import mac from 'assets/Images/orders/mac.png';
import mastercard from 'assets/Images/orders/mastercard.png';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const OrderDetails = () => {
  return (
    <Layout title="Orders">
      <Breadcrumbs title="Orders" link="/order-details" />

      <section className="py-10 bg-white dark:bg-dark mt-10 rounded-xl px-10 w-full mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-10">
            <div className="w-52">
              <img className="w-full" src={mac} alt="" />
            </div>

            <div>
              <h2 className="text-[#7C8798] dark:text-[#E4E6EA] text-3xl font-medium">
                Macbook Pro
              </h2>
              <p className="text-[#8A98AC]  dark:text-[#E4E6EA]/90 font-normal">
                Order was delivered 2 days ago
              </p>
              <button className="uppercase border font-medium border-[#00FF72] rounded-xl text-sm text-[#00FF72] px-3 py-1.5 mt-5">
                Delivered
              </button>
            </div>
          </div>

          <div className="text-right">
            <button className="uppercase text-[#51D5FF] px-3 py-2 bg-[#8edeff33] rounded-[10px] font-medium mb-4">
              INVOICE
            </button>
            <p className="text-xl text-[#302323] dark:text-[#E4E6EA]/90  mb-3">
              Order - <span className="font-medium">KF332</span>
            </p>

            <p className="text-md text-gray-400 italic dark:text-[#E4E6EA]/90 ">at 5th May, 2023</p>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          {/* track order starts here */}
          <div className="w-[180px]">
            <h3 className="text-[#536571] dark:text-[#E4E6EA] text-lg font-semibold mb-3">
              Track order
            </h3>
            <div className="grid">
              <div className="flex items-center gap-3">
                <div className="w-[26px] h-[26px]">
                  <Bell className="w-full" />
                </div>
                <div>
                  <h4 className="text-[#536571] dark:text-[#E4E6EA] text-sm font-medium">
                    Order received
                  </h4>
                  <time className="text-xs font-normal">22 DEC 7:20 AM</time>
                </div>
              </div>

              <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <img src="/assets/images/products/generate.png" alt="order id" />
                </div>
                <div>
                  <p className="text-[#536571] dark:text-[#E4E6EA] text-sm font-medium">
                    Generate order id
                  </p>
                  <span className="text-xs font-normal block">#1832412</span>
                  <time className="text-xs font-normal">22 DEC 7:21 AM</time>
                </div>
              </div>
              <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
              <div className="flex items-center gap-3">
                <div className="w-9">
                  <img src="/assets/images/products/courier.png" alt="transmitted" />
                </div>
                <div>
                  <p className="text-[#536571] dark:text-[#E4E6EA] text-sm font-medium">
                    To courier
                  </p>
                  <time className="text-xs font-normal">22 DEC 8:10 AM</time>
                </div>
              </div>
              <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
              <div className="flex items-center gap-3">
                <div className="w-[26px] h-[26px]">
                  <Check className="w-full" />
                </div>
                <div>
                  <p className="text-[#536571] dark:text-[#E4E6EA]text-sm font-medium">
                    Order delivered
                  </p>
                  <time className="text-xs font-normal">22 DEC 4:54PM</time>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#536571] dark:text-[#E4E6EA] text-lg font-semibold mb-4">
              Payment details
            </h3>
            <div className="border border-[#b9b9b94f] rounded-xl w-[370px] h-20 flex items-center justify-between px-6 py-7">
              <div className="w-10 mr-7">
                <img className="w-full" src={mastercard} alt="mastercard" />
              </div>
              <div className="mr-6">
                <p className="flex items-center font-medium text-[#536571] dark:text-[#E4E6EA] text-lg">
                  **** **** **** <span className="inline-block pl-2"> 6957</span>
                </p>
              </div>
              <div className="w-5 cursor-pointer">
                <InformationCircleIcon className="w-6 text-[#536571] dark:text-[#E4E6EA]" />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-[#536571] dark:text-[#E4E6EA] text-lg font-semibold mb-5">
                Billing Information
              </h3>
              <div>
                <h3 className="text-[#536571] dark:text-[#E4E6EA] font-medium mb-2">Oliver Liam</h3>
                <p className="text-[#536571] dark:text-[#E4E6EA] font-normal mb-2 text-[15px]">
                  Company Name: Viking Burrito
                </p>
                <p className="text-[#536571] dark:text-[#E4E6EA] font-normal mb-2 text-[15px]">
                  Email Address: oliver@burrito.com
                </p>
                <p className="text-[#536571] dark:text-[#E4E6EA] font-normal mb-2 text-[15px]">
                  VAT Number: FRB1235476
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#536571] dark:text-[#E4E6EA] text-lg font-semibold mb-3">
              Order Summary
            </h3>
            <div className="grid gap-3 mb-9">
              <div className="text-[#302323] dark:text-[#E6E6E6] text-xl flex justify-between">
                <span className="inline-block text-base">Product Price</span>
                <span className="font-medium text-base">$ 170</span>
              </div>
              <div className="text-[#302323] dark:text-[#E6E6E6] text-xl flex justify-between">
                <span className="inline-block text-base">Delivery</span>
                <span className="font-medium text-base">$ 10</span>
              </div>
              <div className="text-[#302323] dark:text-[#E6E6E6] text-xl flex justify-between">
                <span className="inline-block text-base">Taxes</span>
                <span className="font-medium text-base">$ 1.60</span>
              </div>
              <div className="text-[#302323] dark:text-[#E6E6E6] text-xl flex justify-between mt-5">
                <span className="font-medium text-base inline-block">Total</span>
                <span className="font-medium text-base text-[#5798F7]">$ 102.60</span>
              </div>
            </div>
          </div>
          {/* Order Summary ends here */}
        </div>
      </section>
    </Layout>
  );
};

export default OrderDetails;
