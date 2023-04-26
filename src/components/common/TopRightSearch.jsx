import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const TopRightSearch = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center bg-white px-4 rounded-lg mr-4 shadow-md shadow-blue-50 w-54">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          className="pl-2 py-2 w-full ring-0 border-none outline-none focus:outline-none focus:ring-0 bg-transparent"
          placeholder="Search..."
        />
      </div>

      <Link to="/new-product">
        <div className="bg-blue-500 text-white pl-2 pr-3 py-2 rounded-lg flex justify-center items-center cursor-pointer">
          <PlusIcon className="text-white w-6 h-6" />
          <p className="ml-1">Product</p>
        </div>
      </Link>
    </div>
  );
};

export default TopRightSearch;
