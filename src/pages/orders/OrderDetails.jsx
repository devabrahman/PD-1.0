import { useState } from 'react';
import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Layout from 'components/common/Layout';
import Pagination from 'components/common/Pagination';
import Bell from 'components/SVGIcons/Bell';
import Cart from 'components/SVGIcons/Cart';
import Check from 'components/SVGIcons/Check';
import HtmlIcon from 'components/SVGIcons/HtmlIcon';

import cardNumber from '../../assets/Images/orders/card-number.png';
import mac from '../../assets/Images/orders/mac.png';
import mastercard from '../../assets/Images/orders/mastercard.png';
import warning from '../../assets/Images/orders/warning.png';

const OrderDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout title="Orders">
        <Breadcrumbs rootTitle={{ title: 'Orders', url: '/orders' }} subTitle="Orders Details " />

        <section className="py-10">
          <div className="shadow-md shadow-[#87ceeb40] rounded-xl px-6 py-7 w-full mx-auto">
            <div className="flex justify-between">
              <div className="flex items-center gap-10">
                <div className="w-52">
                  <img className="w-full" src={mac} alt="" />
                </div>
                <div>
                  <h2 className="text-[#7C8798] text-3xl font-medium">Macbook Pro</h2>
                  <p className="text-[#8A98AC] font-normal">Order was delivered 2 days ago</p>
                  <button className="uppercase border-2 border-[#00FF72] rounded-xl text-[#00FF72] px-3 py-[6px]">
                    Delivered
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button className="uppercase text-[#51D5FF] px-3 py-2 bg-[#8edeff33] rounded-[10px] font-medium mb-4">
                  INVOICE
                </button>
                <p className="text-xl text-[#302323] mb-3">
                  Code: <span className="font-medium">KF332</span>
                </p>
                <p className="text-xl text-[#302323]">
                  Order no. <span className="font-medium">#241342</span>{' '}
                  <em className="text-[#3023234d]">
                    on <time>23.02.2021</time>
                  </em>
                </p>
              </div>
            </div>
            <div className="mb-10">
              <p className="text-right text-[#848484]">
                Do you like the product? Leave us a review here.
              </p>
            </div>
            <div className="flex justify-between">
              {/* track order starts here */}
              <div className="w-[180px]">
                <h3 className="text-[#536571] text-lg font-semibold mb-3">Track order</h3>
                <div className="grid">
                  <div className="flex items-center gap-3">
                    <div className="w-[26px] h-[26px]">
                      <Bell className="w-full" />
                    </div>
                    <div>
                      <h4 className="text-[#536571] text-sm font-medium">Order received</h4>
                      <time className="text-xs font-normal">22 DEC 7:20 AM</time>
                    </div>
                  </div>
                  <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
                  <div className="flex items-center gap-3">
                    <div className="w-[26px] h-[26px]">
                      <HtmlIcon className="w-full" />
                    </div>
                    <div>
                      <h4 className="text-[#536571] text-sm font-medium">Generate order id</h4>
                      <span className="text-xs font-normal block">#1832412</span>
                      <time className="text-xs font-normal">22 DEC 7:21 AM</time>
                    </div>
                  </div>
                  <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
                  <div className="flex items-center gap-3">
                    <div className="w-[26px] h-[26px]">
                      <Cart className="w-full" />
                    </div>
                    <div>
                      <h4 className="text-[#536571] text-sm font-medium">
                        Order transmitted to courier
                      </h4>
                      <time className="text-xs font-normal">22 DEC 8:10 AM</time>
                    </div>
                  </div>
                  <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
                  <div className="flex items-center gap-3">
                    <div className="w-[26px] h-[26px]">
                      <Check className="w-full" />
                    </div>
                    <div>
                      <h4 className="text-[#536571] text-sm font-medium">Order delivered</h4>
                      <time className="text-xs font-normal">22 DEC 4:54PM</time>
                    </div>
                  </div>
                  <span className="w-[1.5px] h-7 rounded-xl bg-[#89abdc54] ml-3"></span>
                </div>
              </div>
              {/* track order ends here */}

              {/* Payment details starts here */}
              <div>
                <h3 className="text-[#536571] text-lg font-semibold mb-4">Payment details</h3>
                <div className="border border-[#b9b9b94f] rounded-xl w-[370px] h-20 flex items-center justify-between px-6 py-7">
                  <div className="w-10 mr-7">
                    <img className="w-full" src={mastercard} alt="mastercard" />
                  </div>
                  <div className="w-56 mr-6">
                    <img className="w-full" src={cardNumber} alt="cardNumber" />
                  </div>
                  <div className="w-5">
                    <img className="w-full" src={warning} alt="warning" />
                  </div>
                </div>
              </div>
              {/* Payment details ends here */}

              {/* Order Summary starts here */}
              <div>
                <h3 className="text-[#536571] text-lg font-semibold mb-3">Order Summary</h3>
                <div className="grid gap-3 mb-9">
                  <p className="text-[#302323] text-xl">
                    <span className="font-normal w-44 inline-block">Product Price: </span>
                    <span className="font-medium">$170</span>
                  </p>
                  <p className="text-[#302323] text-xl">
                    <span className="font-normal w-44 inline-block">Delivery: </span>
                    <span className="font-medium">$10</span>
                  </p>
                  <p className="text-[#302323] text-xl">
                    <span className="font-normal w-44 inline-block">Taxes: </span>
                    <span className="font-medium">$1.60</span>
                  </p>
                  <p className="text-[#302323] text-xl">
                    <span className="font-medium w-44 inline-block">Total: </span>
                    <span className="font-medium text-[#5798F7]">$102.60</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-[#536571] text-lg font-semibold mb-5">Billing Information</h3>
                  <div>
                    <h3 className="text-[#536571] font-medium mb-2">Oliver Liam</h3>
                    <p className="text-[#536571] font-normal mb-2 text-[15px]">
                      Company Name: Viking Burrito
                    </p>
                    <p className="text-[#536571] font-normal mb-2 text-[15px]">
                      Email Address: oliver@burrito.com
                    </p>
                    <p className="text-[#536571] font-normal mb-2 text-[15px]">
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
      <DeletePopup isOpen={isOpen} setIsOpen={(event) => setIsOpen(event)} />
      <Pagination />
    </>
  );
};

export default OrderDetails;
