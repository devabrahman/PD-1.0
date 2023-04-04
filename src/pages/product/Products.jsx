import { useEffect, useState } from 'react';
import { productList } from 'api/products';
import { Link } from 'react-router-dom';
import Layout from 'components/common/Layout';
import Breadcrumbs from 'components/common/Breadcrumbs';
import DeletePopup from 'components/common/DeletePopup';
import Pagination from 'components/common/Pagination';
// icons
import CheckMarkIcon from 'components/SVGIcons/CheckMarkIcon';
import DeleteIcon from 'components/SVGIcons/DeleteIcon';
import EditIcon from 'components/SVGIcons/Editicon';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { MagnifyingGlassIcon as SearchIcon, PlusIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [allChecked, setAllChecked] = useState('');
  const [allProducts, setAllProducts] = useState(productList);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState('');

  // check all product is checked
  useEffect(() => {
    const tempAll = allProducts.find((product) => !product?.isChecked);
    !tempAll && setAllChecked('all');
  }, [allProducts]);

  // handel select a product
  const handelSingleCheckMark = (id) => {
    const tempAll = allProducts.map((product) =>
      product.id == id ? { ...product, isChecked: product?.isChecked ? false : true } : product
    );
    setAllProducts(tempAll);
    setAllChecked('');
  };

  // handel select all products
  const checkedAllProducts = () => {
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

  // handel delete products
  useEffect(() => {
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
        <div className="flex justify-between items-baseline">
          <Breadcrumbs rootTitle={{ title: 'Products' }} subTitle="" />
          <div className="flex gap-2.5 items-center">
            <form action="">
              <div className="border border-[#B9B9B9]/30 rounded-lg flex pl-1.5 ">
                <SearchIcon className="w-6 stroke-2 stroke-primary cursor-pointer" />
                <input
                  type="search"
                  name="search"
                  className="h-full w-48 ml-2 py-2 rounded-lg px-1.5 dark:bg-lightDark"
                />
              </div>
            </form>
            <Link to="/new-product">
              <div className="w-[43px] h-[43px] bg-primary rounded-lg inline-flex justify-center items-center cursor-pointer">
                <PlusIcon className="text-white w-8 " />
              </div>
            </Link>
          </div>
        </div>
        <table className="w-full table-auto mt-14 border-spacing-y-6 border-separate">
          <thead className="uppercase font-medium text-[#5798F6] text-sm">
            <tr className="font-medium">
              <th className="w-5 pl-2">
                <div className="items-start custom-checkbox">
                  <input
                    type="checkbox"
                    checked={allChecked === 'all'}
                    className="check-input"
                    onChange={() => {}}
                  />
                  <label
                    onClick={() => checkedAllProducts('all')}
                    htmlFor="input-2"
                    className={`checkbox dark:fill-dark cursor-pointer w-6 h-6 rounded-[7px] border border-[#635e5e] ${
                      allChecked == 'all' && 'rounded-[9px] bg-[#48f685]'
                    }`}>
                    <CheckMarkIcon className="dark:stroke-dark stroke-white" />
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
              <th className="inline-block mr-[14px]"></th>
              <th className="inline-block mr-[14px]"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={product?.id} className="rounded-xl border-pdGrey/70 h-12 table-shadow">
                <td className="w-5 pl-2">
                  <input
                    type="checkbox"
                    checked={product?.isChecked || false}
                    className="check-input cursor-pointer"
                    onChange={() => {}}
                  />
                  <label
                    onClick={() => handelSingleCheckMark(product?.id)}
                    htmlFor="input-2"
                    className={`checkbox dark:fill-dark cursor-pointer w-6 h-6 rounded-[7px] border border-[#635e5e] ${
                      product?.isChecked && 'rounded-[9px] bg-[#48f685]'
                    }`}>
                    <CheckMarkIcon className="dark:stroke-dark stroke-white" />
                  </label>
                </td>
                <td className="pl-5 py-3">
                  <div className="flex gap-6 w-11 items-center custom-checkbox">
                    <img src={product.thumbnail} className="w-full rounded-md" alt={product?.id} />
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
                <td>
                  {product?.currency}
                  {product?.price}
                </td>
                <td>{product?.sku}</td>
                <td>{product?.quantity}</td>
                <td>
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
                  <Link to="/edit-product">
                    <EditIcon />
                  </Link>
                </td>
                <td
                  className="cursor-pointer"
                  onClick={() => {
                    setIsDeleteOpen(true);
                    setDeleteIndex(index);
                  }}>
                  <DeleteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </Layout>

      <DeletePopup
        setIsOpen={(event) => setIsDeleteOpen(event)}
        isOpen={isDeleteOpen}
        setConfirmDelete={(value) => setConfirmDelete(value)}
      />
    </>
  );
};

export default Products;
