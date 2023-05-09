import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  PhotoIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';
import Chats from './Chats';

const ChatRight = () => {
  return (
    <div className="col-span-9 ">
      <div className="w-11/12 mx-auto bg-white rounded-xl p-5 relative flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                src="/assets/images/chat-users/File-5.jpg"
                className="h-10 w-10 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="font-medium ">Muhammad Ajmin</h3>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full block"></span>
                  <span className="ml-2">Active</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <PhoneIcon className="h-5 w-5 text-gray-400 ml-5" />
              <VideoCameraIcon className="h-5 w-5 text-gray-400 ml-5" />
              <EllipsisHorizontalIcon className="h-5 w-5 text-gray-400 ml-5" />
            </div>
          </div>
          <Chats />
        </div>
        <div className="flex items-center mt-8">
          <PhotoIcon className="h-7 w-7 text-gray-400 cursor-pointer" />
          <textarea
            cols="30"
            rows="1"
            className="w-11/12 border border-gray-200  rounded-xl mx-4"></textarea>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-xl">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
