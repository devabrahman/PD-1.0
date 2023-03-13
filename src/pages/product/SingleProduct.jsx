import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import OtherProducts from 'components/products/OtherProducts';
import { AiFillStar } from 'react-icons/ai';
import macbook1 from '../../assets/Images/products/macbook1.jpg';
import macbook2 from '../../assets/Images/products/macbook2.jpg';
import macbook3 from '../../assets/Images/products/macbook3.jpg';
import macbook4 from '../../assets/Images/products/macbook4.jpg';
import macbook5 from '../../assets/Images/products/macbook5.jpg';

const SingleProduct = () => {
  return (
    <Layout title="Products">
      <Breadcrumbs
        rootTitle={{ title: 'Products', url: '/products' }}
        subTitle=" Product Details"
      />
      <section className="flex gap-16">
        <div className="w-full">
          <div className="justify-center">
            <span className=""></span>
            <img src={macbook1} alt="macBook" />
            <span className=""></span>
          </div>
          <div className="flex gap-3 justify-center mt-14">
            <img className="object-cover h-14" src={macbook1} alt="macBook" />
            <img className="object-cover h-14" src={macbook2} alt="macBook" />
            <img className="object-cover h-14" src={macbook3} alt="macBook" />
            <img className="object-cover h-14" src={macbook4} alt="macBook" />
            <img className="object-cover h-14" src={macbook5} alt="macBook" />
          </div>
        </div>

        <div className="w-full">
          <div className="flex gap-3 items-center">
            <h1 className="text-[32px] font-medium text-gray-900">Macbook Pro</h1>
            <span className="text-green bg-green/20 rounded-md text-sm py-1.5 px-3 font-medium h-min">
              In Stock
            </span>
          </div>

          <h5 className="text-black/30 text-sm ">
            <i>Laptop</i>
          </h5>

          <div className="flex gap-1.5 items-center">
            <AiFillStar className="text-gold w-[21px] h-[21px]" />
            <span className="text-black/30 text-sm">4.9 Ratings </span>
            <span className="text-black/30 text-sm block">. 2.6k+ Reviews </span>
            <span className="text-black/30 text-sm">. 2.5k+ Sold </span>
          </div>

          <h3 className="font-medium text-[24px]">$399.00</h3>

          <section className="mt-3">
            <p>Gold</p>
            <div className="flex gap-3 group-hover mt-3">
              <span className="cursor-pointer border border-transparent hover:border-black block rounded-full duration-200">
                <span className="bg-black w-[24px] h-[24px] rounded-full m-0.5 block"></span>
              </span>
              <span className="cursor-pointer border border-transparent hover:border-[#E6B49D] block rounded-full duration-200">
                <span className="bg-[#E6B49D] w-[24px] h-[24px] rounded-full m-0.5 block"></span>
              </span>
              <span className="cursor-pointer border border-transparent hover:border-[#CCCCCC] block rounded-full duration-200">
                <span className="bg-[#CCCCCC] w-[24px] h-[24px] rounded-full m-0.5 block"></span>
              </span>
              <span className="cursor-pointer border border-transparent hover:border-[#848484] block rounded-full duration-200">
                <span className="bg-[#848484] w-[24px] h-[24px] rounded-full m-0.5 block"></span>
              </span>
            </div>
            <div className="flex gap-2.5 mt-8">
              <span className="cursor-pointer text-[#002D9E] text-[15px] shadow-md bg-white border-[1px] border-[##D1D1D1] rounded-md px-1.5 py-0.5">
                128 GB
              </span>
              <span className="cursor-pointer text-[#002D9E] text-[15px] shadow-md bg-white border-[1px] border-[##D1D1D1] rounded-md px-1.5 py-0.5">
                64 GB
              </span>
            </div>
          </section>
          <div className="mt-4">
            <h3 className="text-[20px] font-medium">Description</h3>
            <ul className="list-disc ml-5 font-[15px] text-[#302323]">
              <li>16-core Neural Engine</li>
              <li>13.6-inch Liquid Retina display with True Tone</li>
              <li>1080p FaceTime HD camera</li>
              <li>MagSafe 3 charging port</li>
              <li>Two Thunderbolt / USB 4 ports</li>
              <li>Magic Keyboard with Touch ID</li>
              <li>Force Touch trackpad</li>
              <li>30W USB-C Power Adapter</li>
            </ul>
          </div>

          <button
            type="button"
            className="text-primary font-medium text-base mx-[18px] p-2 block border-2 border-primary rounded-[10px] mt-6">
            {' '}
            Add to Cart
          </button>
        </div>
      </section>

      <OtherProducts />
    </Layout>
  );
};

export default SingleProduct;
