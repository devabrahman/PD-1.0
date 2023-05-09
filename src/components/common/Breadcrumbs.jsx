import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ title, link }) => {
  return (
    <div className={`flex items-center dark:bg-dark dark:text-white`}>
      <HomeIcon className="bg-white text-gray-400 p-1.5 h-9 w-9 rounded-lg cursor-pointer shadow-lg shadow-blue-50" />
      <ChevronRightIcon className="h-5 w-5 stroke-[2.5] ml-2 text-gray-300" />

      <Link to={link} className="ml-2 text-blue-400">
        {title || 'Page title'}
      </Link>
    </div>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Breadcrumbs;
