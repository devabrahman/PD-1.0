import Breadcrumbs from 'components/common/Breadcrumbs';
// import ImageDropDown from 'components/common/ImageDropDown';
import Layout from 'components/common/LayoutBackup';
import productPic from '../../assets/Images/categories/ProductImage.png';

const EidtCategory = () => {
  return (
    <Layout title="Category">
      <Breadcrumbs rootTitle={{ title: 'Category', url: '/categories' }} subTitle="Edit" />
      <div className="flex mt-5">
        <div className="grid justify-items-center  bg-white w-8/12 ml-5 mr-0">
          <div className="bg-white rounded-lg shadow-xl h-1/2 w-9/12 flex justify-center">
            <img src={productPic} alt="Category Icon" className="w-8/12 h-3/5 mt-20" />
          </div>
        </div>
        <form className="w-full h-auto mx-5">
          <div className="mb-4 mx-0">
            <label htmlFor="" className="text-left font-montserrat text-base mb-1.5 block pb-4">
              Title
            </label>
            <input
              type="text"
              className="rounded-2xl flex justify-center items-center border border-primary bg-opacity-10 p-3 font-montserrat text-sm w-10/12"
              required
              placeholder="Categories Name"
            />
            <input
              type="text"
              className="rounded-3xl flex justify-center items-center border border-primary my-5 bg-opacity-10 p-3 font-montserrat text-sm w-5/12"
              required
              placeholder="/angular"
            />
          </div>
          <div className="mx-0">
            <p htmlFor="" className="text-[#302323] font-montserrat text-xl mb-1.5 block">
              Description
            </p>
            <p className="w-9/12 text-base text-[#161616]/70 py-2">
              Lorem Ipsum is simply dummy text of the popup lokhmmg jnjsannekdmbl,jifsss(optional).
              .
            </p>
          </div>
          <div className="py-5">
            <label htmlFor="" className="text-[#302323] font-montserrat text-xl mb-1.5 block">
              Categories Picture
            </label>
            <div className="p-2 max-w-sm">
              <label className="flex justify-center w-full h-44 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-3xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none items-center">
                <div className="">
                  <div className="flex justify-center py-3">
                    <img src={productPic} alt="Category Icon" className="w-20 h-20" />
                  </div>
                </div>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-5 items-center mb-2 text-lg px-24">
            <button className="px-6 py-1 text-[#DB2955] cursor-pointer">Cancel</button>
            <button className="px-6 py-1 mr-5 bg-[#1C92FF] text-white rounded-3xl cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default EidtCategory;
