import ProductDirectoryIcon from 'components/SVGIcons/ProductDirectoryIcon';
import { HiChevronRight } from 'react-icons/hi';

const Breadcrumbs = () => {
  return (
    <div className="flex flex-row px-14">
      <ProductDirectoryIcon className="text-[#4F4F4F] border-red-200" />
      <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
      <p>Producst</p>
      <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
      <p className="text-[#1C92FF]">Product Details</p>
    </div>
  );
};

export default Breadcrumbs;
