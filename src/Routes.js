import Category from 'pages/category/Category';
import NewCategory from 'pages/category/NewCategory';
import OrderDetails from 'pages/orders/OrderDetails';
import Orders from 'pages/orders/Orders';
import EditProducts from 'pages/product/EditProducts';
import NewProducts from 'pages/product/NewProducts';
import Products from 'pages/product/Products';
import SingleProduct from 'pages/product/SingleProduct';
import VariableProduct from 'pages/product/VariableProduct';
import Profile from 'pages/Profile';
import Tags from 'pages/Tags';
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
        <Route path="/variable-product" element={<VariableProduct />} />

        {/* Category */}
        <Route path="/categories" element={<Category />} />
        <Route path="/new-category" element={<NewCategory />} />

        {/* Tags */}
        <Route path="/tags" element={<Tags />} />

        {/* orders */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-details" element={<OrderDetails />} />

        {/* Profile */}
        <Route path="/vendor-profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
