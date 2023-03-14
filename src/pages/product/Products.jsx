/* eslint-disable  */

import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Layout from 'components/common/Layout';
import AstroIcon from 'components/SVGIcons/AstroIcon';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
// import RectangleIcon from 'components/SVGIcons/RectangleIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import { useEffect, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allChecked, setAllChecked] = useState('');
  const productList = [
    {
      id: '001',
      thumbnail:
        'https://unsplash.com/photos/Im7lZjxeLhg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4NzY1MDI2&force=true&w=640',
      productName: 'Mackbook Pro',
      price: '1149',
      currency: '$',
      sku: '113213',
      quantity: '10',
      status: true
    },
    {
      id: '002',
      thumbnail:
        'https://th.bing.com/th/id/R.ef3958c02c619985049c664c42be4840?rik=6nvbDZQEsUELLA&pid=ImgRaw&r=0',
      productName: 'MacBook Pro 13-inch M1',
      price: '1299',
      currency: '$',
      sku: 'MGN63LL/A',
      quantity: '10',
      status: true
    },
    {
      id: '003',
      thumbnail:
        'https://th.bing.com/th/id/OIP.yqxBuvdCmLGrEup0AoZa7AHaFj?pid=ImgDet&w=1066&h=800&rs=1',
      productName: 'MacBook Pro 16-inch M1 Pro',
      price: '2399',
      currency: '$',
      sku: 'MJLQ3LL/A',
      quantity: '5',
      status: true
    },
    {
      id: '0040',
      thumbnail:
        'https://th.bing.com/th/id/OIP.hmJyvzWmd8XYRmitsfN_QwHaFY?pid=ImgDet&w=1484&h=1080&rs=1',
      productName: 'MacBook Air 13-inch M1',
      price: '999',
      currency: '$',
      sku: 'MGN93LL/A',
      quantity: '15',
      status: true
    },
    {
      id: '0041',
      thumbnail:
        'https://th.bing.com/th/id/OIP.rqEMb2BdN8sZBFXF01JC0gHaE8?pid=ImgDet&w=1020&h=680&rs=1',
      productName: 'MacBook Pro 14-inch M1 Max',
      price: '1999',
      currency: '$',
      sku: 'MLVK3LL/A',
      quantity: '0',
      status: false
    },
    {
      id: '005',
      thumbnail: 'https://i.ytimg.com/vi/Ep0LrZVvkf4/maxresdefault.jpg',
      productName: 'MacBook Air 13-inch M1 with Retina Display',
      price: '999',
      currency: '$',
      sku: 'MGND3LL/A',
      quantity: '8',
      status: true
    },
    {
      id: '006',
      thumbnail:
        'https://www.cnet.com/a/img/mVUZXUQFKYbgCDhwEF7YVUb8gZY=/980x0/2017/06/06/552793fa-911b-44a7-a3fb-44a1307803fd/apple-macbook-pro-touch-bar-15-inch-2017-4201.jpg',
      productName: 'iPad Pro 12.9-inch',
      price: '1099',
      currency: '$',
      sku: 'MHNF3LL/A',
      quantity: '15',
      status: true
    },
    {
      id: '007',
      thumbnail:
        'https://appleinsider.ru/wp-content/uploads/2017/06/MacBook-Pro-with-Touch-Bar-2.jpg',
      productName: 'MacBook Pro 13-inch',
      price: '1299',
      currency: '$',
      sku: 'MYDA2LL/A',
      quantity: '10',
      status: true
    },
    {
      id: '008',
      thumbnail: 'https://i.blogs.es/ccb530/2560_3000/1366_2000.jpg',
      productName: 'iPhone 13 Pro',
      price: '999',
      currency: '$',
      sku: 'MLVJ3LL/A',
      quantity: '0',
      status: false
    },
    {
      id: '009',
      thumbnail: 'https://cdn.wccftech.com/wp-content/uploads/2021/06/M1-MacBook-Air.jpg',
      productName: 'AirPods Max',
      price: '549',
      currency: '$',
      sku: 'MGYH3AM/A',
      quantity: '5',
      status: true
    },
    {
      id: '0010',
      thumbnail: 'https://gearopen.com/wp-content/uploads/2020/11/Untitled-88-768x512.png',
      productName: 'Apple Series 7',
      price: '399',
      currency: '$',
      sku: 'MJ9X3LL/A',
      quantity: '12',
      status: true
    }
  ];

  const [allProducts, setAllProducts] = useState(productList);
  useEffect(() => {
    const tempAll = allProducts.find((product) => !product?.isChecked);
    !tempAll && setAllChecked('all');
  }, [allProducts]);

  const handelChange = (id) => {
    const tempAll = allProducts.map((product) =>
      product.id == id ? { ...product, isChecked: product?.isChecked ? false : true } : product
    );
    setAllProducts(tempAll);
    setAllChecked('');
  };
  const allProductChecked = () => {
    const checkAll = allProducts.find((product) => !product?.isChecked);
    if (allChecked === 'all' && !checkAll) {
      const tempAll = allProducts.map((product) => ({ ...product, isChecked: false }));
      setAllProducts(tempAll);
      setAllChecked('');
      return;
    }
    const tempAll = allProducts.map((product) => {
      return { ...product, isChecked: true };
    });
    setAllProducts(tempAll);
  };

  return (
    <>
      <Layout title="Category">
        <Breadcrumbs rootTitle={{ title: 'Products' }} subTitle="" />
        <table className="w-full table-auto mt-14 border-spacing-y-6 border-separate pb-36">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className="font-medium">
              <th className="w-5">
                <div className="items-start custom-checkbox">
                  <input
                    type="checkbox"
                    checked={allChecked === 'all'}
                    id="input-2"
                    className="check-input"
                  />
                  <label
                    onClick={() => allProductChecked('all')}
                    htmlFor="input-2"
                    className="checkbox">
                    <CheckMarkIcon />
                  </label>
                </div>
              </th>
              <th className=" ml-5  font-medium">THUMBNAIL</th>
              <th className=" font-medium">PRODUCT</th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium"> PRICE</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium">SKU</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium">QUANTITY</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center">
                  <span className=" font-medium"> STATUS</span>
                  <div className="bg-[#87CEEB]/10 mx-5">
                    <BiChevronUp />
                    <BiChevronDown />
                  </div>
                </div>
              </th>
              <th className=""></th>
              <th className=""></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {allProducts.map((product) => (
              <tr
                key={product?.id}
                className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow">
                <td></td>
                <td className="py-3">
                  <div className="flex gap-6 items-center custom-checkbox">
                    <input
                      type="checkbox"
                      id="input-2"
                      checked={product?.isChecked || false}
                      className="check-input cursor-pointer"
                    />
                    <label
                      onClick={() => handelChange(product?.id)}
                      htmlFor="input-2"
                      className="checkbox cursor-pointer">
                      <CheckMarkIcon />
                    </label>

                    <AstroIcon />
                  </div>
                </td>
                <td className="flex items-center flex-col">
                  <div className="py-4">
                    <p>{product?.productName}</p>
                    <p className="text-xs text-[rgb(185,185,185)]">Laptop</p>
                  </div>
                </td>
                <td className="">
                  {product?.currency}
                  {product?.price}
                </td>
                <td className="">{product?.sku}</td>
                <td className="">{product?.quantity}</td>
                <td className="">
                  {product?.status ? (
                    <span className="text-green bg-green/20 rounded-md text-sm py-1.5 px-3 font-medium">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-[#F4316B] bg-[#FF3300]/10 rounded-md text-sm py-1.5 px-3 font-medium h-min">
                      Out of Stock
                    </span>
                  )}
                </td>
                <td className="cursor-pointer">
                  <EditIcon />
                </td>
                <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                  <DeleteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
      <DeletePopup isOpen={isOpen} setIsOpen={(event) => setIsOpen(event)} />
    </>
  );
};

export default Products;
