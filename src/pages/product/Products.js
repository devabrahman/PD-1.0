import Breadcrumbs from 'components/common/Breadcrumbs';
import Layout from 'components/common/Layout';
import AstroIcon from 'components/SVGIcons/AstroIcon';
import RightMarkIcon from 'components/SVGIcons/RightMarkIcon';
import StarIcon from 'components/SVGIcons/StarIcon';

const Products = () => {
  return (
    <Layout title="Category">
      <Breadcrumbs rootTitle="Products" subTitle="Products" />
      <table className="w-full table-auto">
        <caption className="text-left text-xl my-2 py-5">Other Products</caption>
        <thead>
          <tr className="uppercase text-[#5798F6] text-sm">
            <th className=""></th>
            <th className="">THUMBNAIL</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>STATUS</th>
            <th>STATUS </th>
            <th className=""></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="rounded-xl shadow-lg shadow-[#87CEEB]/25">
            <td className=" py-2">
              <div className="flex">
                <RightMarkIcon />
                <span>
                  <AstroIcon />
                </span>
              </div>
            </td>
            <td className="">
              <div className="">
                <span>Mackbook Pro</span>
                <p className="ml-11 -mt-5 text-xs text-[rgb(185,185,185)]">Laptop</p>
              </div>
            </td>
            <td className="px-16">$259</td>
            <td className="px-12">
              <StarIcon />
            </td>
            <td className="px-8">
              <div className="w-full bg-[#c6ecfb] rounded-full h-0.5 dark:bg-[#c6ecfb]">
                <hr className="w-11/12 h-0.5  bg-[#13FF65] border-0 rounded " />
              </div>
            </td>
            <td className="px-12">624548</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
