// images and icons
import macbook1 from '../../assets/Images/products/macbook1.jpg';
import macbook2 from '../../assets/Images/products/macbook2.jpg';
import macbook3 from '../../assets/Images/products/macbook3.jpg';
import macbook4 from '../../assets/Images/products/macbook4.jpg';
import macbook5 from '../../assets/Images/products/macbook5.jpg';
import productPic from 'assets/Images/products/moc-m2.jpg';

const SingleProductLeft = () => {
  return (
    <div className="col-span-7 w-full">
      <div className="justify-center mb-10 bg-white rounded-xl">
        <div className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full">
          <img
            src={productPic}
            alt="Category Icon"
            className="w-full object-contain dark:bg-lightDark"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 w-full h-14 outline-none">
        <div className="h-14 outline-none mx-4 rounded-md inline-flex conte overflow-hidden ">
          <img
            className="object-cover h-full rounded-md w-full ml-8 cursor-pointer"
            src={macbook1}
            alt="macBook"
          />
        </div>
        <div className="h-14 outline-none mx-4 rounded-md inline-flex conte overflow-hidden ">
          <img
            className="object-cover h-full rounded-md w-full ml-8 cursor-pointer"
            src={macbook2}
            alt="macBook"
          />
        </div>
        <div className="h-14 outline-none mx-4 rounded-md inline-flex conte overflow-hidden ">
          <img
            className="object-cover h-full rounded-md w-full ml-8 cursor-pointer"
            src={macbook3}
            alt="macBook"
          />
        </div>
        <div className="h-14 outline-none mx-4 rounded-md inline-flex conte overflow-hidden ">
          <img
            className="object-cover h-full rounded-md w-full ml-8 cursor-pointer"
            src={macbook4}
            alt="macBook"
          />
        </div>
        <div className="h-14 outline-none mx-4 rounded-md inline-flex conte overflow-hidden ">
          <img
            className="object-cover h-full rounded-md w-full ml-8 cursor-pointer"
            src={macbook5}
            alt="macBook"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductLeft;
