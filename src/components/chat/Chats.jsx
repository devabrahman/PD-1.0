import React from 'react';

const Chats = () => {
  return (
    <section className="w-full h-[415px] overflow-y-scroll scrollbar-thin mt-7">
      {/* left */}
      <div className="mb-2">
        <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">Hey!</span>
      </div>
      <div>
        <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
          How are you doing?
        </span>
        <span className="text-xs text-gray-400 block ml-1 mt-1">12:57 PM</span>
      </div>

      {/* right */}
      <div className="flex justify-end mb-2">
        <div>
          <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">Heyyy!</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
            It&apos;s been long since we met naa?
          </span>
          <span className="text-xs text-gray-400 block ml-1 mt-1 text-right">12:58 PM</span>
        </div>
      </div>

      {/* left */}
      <div className="mb-2">
        <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">Yeah man</span>
      </div>
      <div>
        <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
          Where have you been these days?
        </span>
        <span className="text-xs text-gray-400 block ml-1 mt-1">12:59 PM</span>
      </div>

      {/* right */}
      <div className="flex justify-end mb-2">
        <div>
          <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
            I was on a trip to Bali, Indonesia
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
            Next month going again there. Why don&apos;t you join us?
          </span>
          <span className="text-xs text-gray-400 block ml-1 mt-1 text-right">12:58 PM</span>
        </div>
      </div>

      {/* left */}
      <div>
        <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
          Sounds amazing. When you are leaving?
        </span>
        <span className="text-xs text-gray-400 block ml-1 mt-1">12:59 PM</span>
      </div>

      {/* right */}
      <div className="flex justify-end mb-2">
        <div>
          <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
            I was on a trip to Bali, Indonesia
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <span className="bg-blue-500 inline-block px-2 py-1 rounded-full text-white">
            Next month going again there. Why don&apos;t you join us?
          </span>
          <span className="text-xs text-gray-400 block ml-1 mt-1 text-right">12:58 PM</span>
        </div>
      </div>
    </section>
  );
};

export default Chats;
