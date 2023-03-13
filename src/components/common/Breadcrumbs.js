import ProductDirectoryIcon from 'components/SVGIcons/ProductDirectoryIcon';
import PropTypes from 'prop-types';
import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ rootTitle, subTitle }) => {
  const { title, url } = rootTitle;

  return (
    <div className="flex flex-row items-center">
      <ProductDirectoryIcon className="text-[#4F4F4F] w-6 border-red-200" />
      <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />
      <Link to={url || ''}>
        <p>{title || rootTitle}</p>
      </Link>
      {subTitle && <HiChevronRight className="h-7 w-10 text-[#D9D9D9]" />}
      <p className="text-[#1C92FF]">{subTitle}</p>
    </div>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  rootTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};
