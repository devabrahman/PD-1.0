import { productList } from 'api/products';
import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Layout from 'components/common/Layout';
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import { useEffect, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allChecked, setAllChecked] = useState('');
  const [allProducts, setAllProducts] = useState(productList);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState('');
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

  useEffect(() => {
    console.log(
      '🔐 -> file: Products.jsx:46 -> useEffect -> confirmDelete && deleteIndex:',
      confirmDelete,
      deleteIndex
    );
    if (confirmDelete && deleteIndex !== '') {
      const newProductList = allProducts;
      newProductList.splice(deleteIndex, 1);
      setAllProducts(newProductList);
      setConfirmDelete(false);
      setDeleteIndex('');
    }
  }, [confirmDelete]);

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
              <th className="pl-5 font-medium text-left">THUMBNAIL</th>
              <th className="font-medium text-left block leading-8">PRODUCT</th>
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
            {allProducts.map((product, index) => (
              <tr
                key={product?.id}
                className="rounded-xl border-pdGrey/70 h-12 input-back-box-shadow">
                <td className="w-5">
                  {' '}
                  <input
                    type="checkbox"
                    id="input-2"
                    checked={product?.isChecked || false}
                    className="check-input cursor-pointer"
                    onClick={handelChange}
                  />
                  <label
                    onClick={() => handelChange(product?.id)}
                    htmlFor="input-2"
                    className="checkbox cursor-pointer">
                    <CheckMarkIcon />
                  </label>
                </td>
                <td className="pl-5 py-3">
                  <div className="flex gap-6 w-11 items-center custom-checkbox">
                    <img
                      src={product.thumbnail}
                      className="w-full rounded-md"
                      alt={product?.productName}
                    />
                  </div>
                </td>
                <td className="flex items-start flex-col">
                  <div className="py-4 w-full">
                    <p className="text-ellipsis overflow-hidden cursor-pointer">
                      <Link to="/single-product">{product?.productName}</Link>
                    </p>
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
                <td
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(true);
                    setDeleteIndex(index);
                  }}>
                  <DeleteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
      <DeletePopup
        setIsOpen={(event) => setIsOpen(event)}
        isOpen={isOpen}
        setConfirmDelete={(value) => setConfirmDelete(value)}
      />
    </>
  );
};

export default Products;
