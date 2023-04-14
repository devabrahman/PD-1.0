import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import Bell from 'components/SVGIcons/Bell';
import Check from 'components/SVGIcons/Check';

import mac from 'assets/Images/orders/mac.png';
import mastercard from 'assets/Images/orders/mastercard.png';
import htmlIcon from 'assets/Images/icons/html.png';
import cartIcon from 'assets/Images/icons/cart.png';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const OrderDetails = () => {
  return (
    <Layout title="Orders">
      <Breadcrumbs rootTitle={{ title: 'Orders', url: '/orders' }} subTitle="Orders Details " />

      <section className="py-10">
        <div className="shadow-md drop-shadow-[0_4px_10px_rgba(135, 206, 235, 0.25)] rounded-xl px-6 py-7 w-full mx-auto">
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
                <button className="uppercase border font-medium border-[#00FF72] rounded-xl text-[#00FF72] px-3 py-1.5 mt-5">
                  Delivered
                </button>
              </div>
            </div>

            <div className="text-right">
              <button className="uppercase text-[#51D5FF] px-3 py-2 bg-[#8edeff33] rounded-[10px] font-medium mb-4">
                INVOICE
              </button>
              <p className="text-xl text-[#302323] dark:text-[#E4E6EA]/90  mb-3">
                Code: <span className="font-medium">KF332</span>
              </p>

              <p className="text-xl text-[#302323] dark:text-[#E4E6EA]/90 ">
                Order no. <span className="font-medium">#241342</span>{' '}
                <em className="  text-[#302323]/30 dark:text-[#E4E6EA]/50">
                  on <time>23.02.2021</time>
                </em>
              </p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-right text-[#848484] dark:text-[#E4E6EA]/90">
              Do you like the product? Leave us a review here.
            </p>
          </div>

          <div className="flex justify-between">
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
                  <div className="w-[26px] h-[26px]">
                    <img src={htmlIcon} alt="order id" />
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
                    <img src={cartIcon} alt="transmitted" />
                  </div>
                  <div>
                    <p className="text-[#536571] dark:text-[#E4E6EA] text-sm font-medium">
                      Order transmitted to courier
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
                <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
              </div>
            </div>
            {/* track order ends here */}

            {/* Payment details starts here */}
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
                  {/* <img className="w-full" src={warning} alt="warning" /> */}
                </div>
              </div>
            </div>
            {/* Payment details ends here */}

            {/* Order Summary starts here */}
            <div>
              <h3 className="text-[#536571] dark:text-[#E4E6EA] text-lg font-semibold mb-3">
                Order Summary
              </h3>
              <div className="grid gap-3 mb-9">
                <p className="text-[#302323] dark:text-[#E6E6E6] text-xl">
                  <span className="font-normal w-44 inline-block">Product Price: </span>
                  <span className="font-medium">$170</span>
                </p>
                <p className="text-[#302323] dark:text-[#E6E6E6] text-xl">
                  <span className="font-normal w-44 inline-block">Delivery: </span>
                  <span className="font-medium">$10</span>
                </p>
                <p className="text-[#302323] dark:text-[#E6E6E6] text-xl">
                  <span className="font-normal w-44 inline-block">Taxes: </span>
                  <span className="font-medium">$1.60</span>
                </p>
                <p className="text-[#302323] dark:text-[#E6E6E6] text-xl">
                  <span className="font-medium w-44 inline-block">Total: </span>
                  <span className="font-medium text-[#5798F7]">$102.60</span>
                </p>
              </div>
              <div>
                <h3 className="text-[#536571] dark:text-[#E4E6EA] text-lg font-semibold mb-5">
                  Billing Information
                </h3>
                <div>
                  <h3 className="text-[#536571] dark:text-[#E4E6EA] font-medium mb-2">
                    Oliver Liam
                  </h3>
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
            {/* Order Summary ends here */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderDetails;
