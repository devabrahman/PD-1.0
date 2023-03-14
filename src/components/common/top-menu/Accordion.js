import React, { useState } from 'react';

function Collapse() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const items = [
    {
      icon: '',
      title: 'First item',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni repellendus ipsa animi quaerat suscipit soluta eos eaque doloremque!'
    },
    {
      icon: '',
      title: 'Second item',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni repellendus ipsa animi quaerat suscipit soluta eos eaque doloremque!'
    },
    {
      icon: '',
      title: 'Third item',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni repellendus ipsa animi quaerat suscipit soluta eos eaque doloremque!'
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
              onClick={() => toggleItem(index)}>
              <h3 className="text-gray-700 font-semibold text-lg">{item.title}</h3>
              <span
                className={`material-icons ${
                  openItem === index ? 'rotate-90' : ''
                } transition-transform duration-300`}>
                &#10148;
              </span>
            </div>
            <div
              className={`transition-all duration-300 ${
                openItem === index ? 'h-auto' : 'h-0'
              } overflow-hidden`}>
              <p className="px-4 py-3 text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collapse;
