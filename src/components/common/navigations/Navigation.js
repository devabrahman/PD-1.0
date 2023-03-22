import React, { useLayoutEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import logo from 'assets/Images/common/logo.png';
import productIcon from 'assets/Images/icons/product-nav-icon.png';
import categoryIcon from 'assets/Images/icons/categoryIcon.png';
import tagIcon from 'assets/Images/icons/tag-nav-icon.png';
import orderIcon from 'assets/Images/icons/order-nav-icon.png';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const [openItem, setOpenItem] = useState(null);
  const [activeNave, setActiveNave] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const navList = [
    {
      icon: '',
      menu: { title: 'Dashboard', url: '/' },
      submenu: []
    },
    {
      icon: productIcon,
      menu: { title: 'Products', url: '' },
      submenu: [
        { title: 'Products', url: '/products' },
        { title: 'New', url: '/new-product' },
        { title: 'Edit', url: '/edit-product' },
        { title: 'Single Product', url: '/single-product' }
      ]
    },
    {
      icon: categoryIcon,
      menu: { title: 'Categories', url: '' },
      submenu: [
        { title: 'Categories', url: '/categories' },
        { title: 'New', url: '/new-category' },
        { title: 'Edit', url: '/edit-category' }
      ]
    },
    {
      icon: tagIcon,
      menu: { title: 'Tags', url: '/tags' },
      submenu: []
    },
    {
      icon: orderIcon,
      menu: { title: 'Orders', url: '' },
      submenu: [
        { title: 'Orders', url: '/orders' },
        { title: 'Orders Details', url: '/order-details' }
      ]
    }
  ];

  useLayoutEffect(() => {
    if (activeNave) {
      setOpenItem(activeNave);
    }
  }, [activeNave]);

  const setActiveNav = (index) => {
    setActiveNave(index);
    return 'text-black';
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto mt-10">
        <Link to="/" className="block mb-10 ml-14">
          <button className="bg-[#b7d9d6]/40 input-accent-box-shadow py-1.5 px-8 rounded-2xl text-xs font-bold ">
            <img src={logo} alt="Logo" className="w-10" />
          </button>
        </Link>

        <div className="px-3 py-6 w-full flex flex-col relative justify-between">
          {navList.map((navItem, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
                onClick={() => toggleItem(index)}>
                <div className="flex">
                  {navItem?.icon !== '' ? (
                    <img src={navItem?.icon} alt="nav icon" className="w-6" />
                  ) : (
                    <span className="inline-block w-6"></span>
                  )}
                  <h5 className="px-2 text-[#302323] font-medium text-[19px]">
                    {navItem.menu.url !== '' ? (
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? '' : isActive ? setActiveNav(index) : ''
                        }
                        to={navItem.menu.url}>
                        {navItem.menu.title}
                      </NavLink>
                    ) : (
                      navItem?.menu?.title
                    )}
                  </h5>
                </div>

                {navItem?.submenu?.length > 0 && (
                  <IoIosArrowDown
                    className={`${
                      openItem === index ? 'rotate-180 text-[#5798F7]' : ''
                    } transition-transform duration-300`}>
                    &#10148;
                  </IoIosArrowDown>
                )}
              </div>

              <div
                className={`transition-all duration-300 ${
                  openItem === index ? 'h-auto' : 'h-0'
                } overflow-hidden ml-12 `}>
                <ul className="text-base text-[#878787] space-y-1.5">
                  {navItem?.submenu?.length > 0 &&
                    navItem?.submenu?.map((submenu, i) => (
                      <li
                        key={i}
                        className={`text-[19px] ${navItem?.submenu?.length - 1 === i && 'pb-6'}`}>
                        <NavLink
                          className={({ isActive, isPending }) =>
                            isPending ? '' : isActive ? setActiveNav(index) : ''
                          }
                          to={submenu?.url}>
                          {submenu?.title}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
