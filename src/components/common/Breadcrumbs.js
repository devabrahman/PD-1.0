import ProductDirectoryIcon from 'components/SVGIcons/ProductDirectoryIcon';
import PropTypes from 'prop-types';
import { HiChevronRight } from 'react-icons/hi';

const Breadcrumbs = ({ rootTitle, subTitle }) => {
  return (
    <div className="flex flex-row">
      <ProductDirectoryIcon className="text-[#4F4F4F] border-red-200" />
      <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
      <p>{rootTitle}</p>
      <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
      <p className="text-[#1C92FF]">{subTitle}</p>
    </div>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  rootTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
