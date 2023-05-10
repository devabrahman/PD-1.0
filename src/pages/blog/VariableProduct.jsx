import { PlusIcon } from '@heroicons/react/24/outline';
import Navigation from 'components/common/navigations/Navigation';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import OptionIcon from '../../assets/Images/products/OptionIcon.png';
import SearchEngineIcon from '../../assets/Images/products/SearchEngineIcon.png';
import ShippingIcon from '../../assets/Images/products/ShippingIcon.png';

const VariableProduct = () => {
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
            <RightMarkIcon className="h-3 w-3" />
            <h5 className="font-medium text-xl">Quantity</h5>
          </div>
          <p className="text-[10px] text-[#302323] flex justify-end m-0 -mb-2 p-0">Available</p>
          <input
            type="number"
            name=""
            id=""
            className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5"
            placeholder="100"
          />
        </div>
        <div className="my-5">
          <div className="flex">
            <img src={OptionIcon} alt="Option icon" className="h-6 w-5" />
            <h5 className="font-medium text-xl ml-2">Variations</h5>
          </div>
          <div className="border w-4/6 border-[#D6D6D6]/60 rounded-xl my-2">
            <div className="ml-4 flex items-center">
              <RightMarkIcon className="h-2 w-2" />
              <p>Add variation like Color, Size, etc</p>
            </div>
            <hr className="h-0.5 w-full bg-[#CDCDCD]/20" />
            <div className="w-3/5 mx-10 my-3">
              <p>Variation name</p>
              <div className="flex items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                  placeholder="Color"
                />
                <DeleteIcon className="w-8 h-8" />
              </div>
            </div>
            <div className="w-3/5 mx-14 my-3 mb-16">
              <p>Variation values</p>
              <div className="flex items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  className="border pl-3 border-[#B9B9B9] bg-[#F8F8F8] h-9 mt-3 rounded-xl w-full pr-1.5 mr-6"
                  placeholder="Add value"
                />
                <PlusIcon className="w-7 h-7 bg-[#1C92FF] text-white p-1 rounded-xl" />
              </div>
            </div>
            <hr className="h-0.5 w-11/12 bg-[#CDCDCD]/20 ml-6" />
            <div className="flex justify-between items-center ml-5">
              <p className="text-accent/80">+ Add another option</p>
              <div className="bg-primary text-xl px-8 py-2 rounded-xl text-white mr-5 my-2">
                Done
              </div>
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

export default VariableProduct;
