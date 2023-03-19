import Breadcrumbs from 'components/common/Breadcrumbs';
import ImageDropDown from 'components/common/ImageDropDown';
import Layout from 'components/common/LayoutBackup';
import categoryPic from '../../assets/Images/common/CategoryPic.png';

const NewCategory = () => {
  return (
    <Layout title="Category">
      <Breadcrumbs rootTitle={{ title: 'Category', url: '/categories' }} subTitle="New" />
      <div className="flex">
        <div className="grid justify-items-center basis-3/5 w-full ml-5 mr-0">
          <img src={categoryPic} alt="Category Icon" className="w-9/12" />
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
              placeholder="Slug"
            />
          </div>
          <div className="mx-0">
            <p htmlFor="" className="text-[#302323] font-montserrat text-xl mb-1.5 block">
              Description
            </p>
            <p className="w-9/12 text-base">
              Lorem Ipsum is simply dummy text of the popup lokhmmg jnjsannekdmbl,jifsss(optional).
              .
            </p>
          </div>
          <div className="py-5">
            <label htmlFor="" className="text-[#302323] font-montserrat text-xl mb-1.5 block">
              Categories Picture
            </label>
            <div className="p-2">
              <ImageDropDown />
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

export default NewCategory;
