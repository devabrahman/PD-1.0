import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import ProductImage from '../../assets/Images/Categories/ProductImage.png';

const Orders = () => {
  return (
    <Layout title="Orders">
      <Breadcrumbs rootTitle="Orders" subTitle="Orders " />
      <section className="flex gap-16 my-10 shadow-xl shadow-[#87CEEB]/25 rounded-lg">
        <div className="w-full">
          <div className="justify-center m-10 flex gap-6">
            <img
              src={ProductImage}
              alt="macBook"
              className="shadow-xl shadow-[#87CEEB]/25 rounded-lg"
            />
            <div className="">
              <h1 className="text-3xl text-[#7C8798]">Macbook Pro</h1>
              <p className="text-sm mt-2 text-[#8A98AC]">Order was delivered 2 days ago</p>
              <div className="border-[#00FF72] border-2 w-6/12 mt-5 rounded-xl uppercase">
                <p className="text-[#00FF72] px-5 py-2 text-base flex justify-center">Delivered</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex gap-3 justify-end mx-16 my-2">
            <span className="text-[#51D5FF] bg-[#8EDEFF]/20 rounded-md text-sm py-1.5 px-3 font-medium h-min uppercase">
              Invoice
            </span>
          </div>
          <h5 className="text-xl text-right mx-16">Code: KF332</h5>
          <div className="flex gap-1.5 justify-end mx-16">
            <span className="text-xl">Order no. #241342</span>
            <i className="text-[#302323]/30 text-xl block">on 23.02.2021</i>
          </div>
          <p className="font-medium text-base text-[#848484] text-right mx-16 mt-10">
            Do you like the product? Leave us a review here.
          </p>
          <section className="mt-3 mx-16">
            <div className="px-10">
              <p className="mr-14">Order Summary</p>
              <div className="">
                <p>
                  Product Price: <span className="ml-10">$70</span>
                </p>
                <p>
                  Delivery: <span className="ml-10">$10</span>
                </p>
                <p>
                  Taxes: <span className="ml-10">$1.60</span>
                </p>
                <p>
                  Total: <span className="ml-10">$102.60</span>
                </p>
              </div>
            </div>
          </section>
          <div className="mt-8 font-[15px] text-[#536571] mb-10 mx-24">
            <h3 className="text-[20px] font-medium">Billing Information</h3>
            <h4 className="mt-5">Oliver Liam</h4>
            <ul className="mt-4">
              <li>Company Name: Viking Burrito</li>
              <li>Email Address: oliver@burrito.com</li>
              <li>VAT Number: FRB1235476</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
