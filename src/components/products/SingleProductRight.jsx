// images and icons
import { AiFillStar } from 'react-icons/ai';

const SingleProductRight = () => {
  return (
    <div className="col-span-5 w-full">
      <div className="flex gap-3 items-center">
        <h1 className="text-[32px] font-medium text-gray-900 dark:text-white/90">Macbook Pro</h1>
        <span className="text-green bg-green/20 rounded-md text-sm py-1.5 px-3 font-medium h-min">
          In Stock
        </span>
      </div>

      <h5 className="text-black/30 dark:text-white/70 text-sm ">
        <i>Laptop</i>
      </h5>

      <div className="flex gap-1.5 items-center mt-2.5 mb-1.5 text-black/30 dark:text-white/70">
        <AiFillStar className="text-gold w-[21px] h-[21px] " />
        <span className=" text-sm">4.9 Ratings </span>
        <span className=" text-sm block">. 2.6k+ Reviews </span>
        <span className=" text-sm">. 2.5k+ Sold </span>
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
          <span className="cursor-pointer text-[#002D9E] dark:text-blue-100 text-[15px] input-accent-box-shadow dark:bg-lightDark bg-white  rounded-md px-1.5 py-0.5">
            128 GB
          </span>
          <span className="cursor-pointer text-[#002D9E] dark:text-blue-100 text-[15px] input-accent-box-shadow dark:bg-lightDark bg-white  rounded-md px-1.5 py-0.5">
            64 GB
          </span>
        </div>
      </section>
      <div className="mt-12">
        <h3 className="text-[20px] font-medium">Description</h3>
        <ul className="list-disc ml-5 font-[15px] text-[#302323] dark:text-white/80">
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
  );
};

export default SingleProductRight;
