import Navigation from 'components/common/Navigation';
import OptionIcon from '../../assets/Images/products/OptionIcon.png';
import ShippingIcon from '../../assets/Images/products/ShippingIcon.png';
import SearchEngineIcon from '../../assets/Images/products/SearchEngineIcon.png';

const SingleProductsNew = () => {
  return (
    <section className="grid grid-cols-12 h-screen overflow-hidden">
      <section className="col-start-1 col-end-3">
        <div className="bg-blue-50 w-full h-full block">
          <Navigation />
        </div>
      </section>
      <section className="col-start-3 col-end-13 ml-8 mr-16 mt-16">
        <div>
          <h5 className="font-medium text-xl">SKU (Stock Keeping Unit)</h5>
          <input
            type="text"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] h-9 mt-2 rounded-[8px] w-1/2 pr-1.5"
          />
        </div>
        <div className="my-5 w-1/3">
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <h5 className="font-medium text-xl ml-3">Quantity</h5>
          </div>
          <p className="text-[10px] text-[#302323] flex justify-end m-0 -mb-2 p-0">Available</p>
          <input
            type="number"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5"
            placeholder="0"
          />
        </div>
        <div className="my-5">
          <div className="flex">
            <img src={OptionIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Options</h5>
          </div>
          <div className="border w-4/6 border-[#D6D6D6]/60 h-9 rounded-xl my-2">
            <div className="m-1 ml-4 flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <p className="mx-2">Add variation like Color, Size, etc</p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="flex">
            <img src={ShippingIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Shipping</h5>
          </div>
          <div className="border w-4/6 border-[#D6D6D6]/60 rounded-xl my-2">
            <div className="flex my-2 mx-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="ml-3">This is a physical product</p>
            </div>
            <hr className="h-0.5 w-full bg-[#CDCDCD]/20" />
            <p className="px-2 py-3">
              Customers won’t enter their shipping address or choose a shipping method when buying
              this product.
            </p>
          </div>
        </div>
        <div className="my-5">
          <div className="flex">
            <img src={SearchEngineIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Search engine listing</h5>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] h-9 mt-3 rounded-[8px] w-4/6 pr-1.5"
            placeholder="Add a title and description to see how this product might appear in a search engine listing"
          />
        </div>
      </section>
    </section>
  );
};
export default SingleProductsNew;
