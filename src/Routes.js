// import SignIn from 'pages/auth/SignInMain';
// import SignUp from 'pages/auth/SignUpMain';
import Category from 'pages/category/Category';
import EditCategory from 'pages/category/EditCategory';
import NewCategory from 'pages/category/NewCategory';
import OrderDetails from 'pages/orders/OrderDetails';
import Orders from 'pages/orders/Orders';
import EditProducts from 'pages/product/EditProducts';
import NewProducts from 'pages/product/NewProducts';
import Products from 'pages/product/Products';
import SingleProduct from 'pages/product/SingleProduct';
import Tags from 'pages/Tags';
import ProfileEdit from 'pages/userProfile/ProfileEdit';
import VendorProfile from 'pages/userProfile/VendorProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { themeCheck } from 'utils/darkmode';

// importing pages
import Home from './pages/Home';

const AppRoutes = () => {
  themeCheck();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Auth */}
        {/* <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} /> */}

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/new-product" element={<NewProducts />} />
        <Route path="/edit-product" element={<EditProducts />} />

        {/* Category */}
        <Route path="/categories" element={<Category />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/edit-category" element={<EditCategory />} />

        {/* Tags */}
        <Route path="/tags" element={<Tags />} />

        {/* orders */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-details" element={<OrderDetails />} />

        {/* Profile */}
        <Route path="/vendor-profile" element={<VendorProfile />} />
        <Route path="/vendor-profile-edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
