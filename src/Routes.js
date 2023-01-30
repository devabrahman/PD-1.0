import Category from 'pages/category/Category';
import NewCategory from 'pages/category/NewCategory';
import EditProducts from 'pages/product/EditProducts';
import NewProducts from 'pages/product/NewProducts';
import Products from 'pages/product/Products';
import SingleProduct from 'pages/product/SingleProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// importing pages
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/new-product" element={<NewProducts />} />
        <Route path="/edit-product" element={<EditProducts />} />

        {/* Category */}
        <Route path="/category" element={<Category />} />
        <Route path="/new-category" element={<NewCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
