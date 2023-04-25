// import SignIn from 'pages/auth/SignInMain';
// import SignUp from 'pages/auth/SignUpMain';
// import Category from 'pages/product/Categories';
// import EditCategory from 'pages/product/EditCategory';
// import NewCategory from 'pages/product/NewCategory';
// import OrderDetails from 'pages/orders/OrderDetails';
// import Orders from 'pages/orders/Orders';
// import EditProducts from 'pages/product/EditProduct';
// import NewProducts from 'pages/product/NewProduct';
// import Products from 'pages/product/Products';
// import SingleProduct from 'pages/product/SingleProduct';
// import Tags from 'pages/product/Tags';
// import ProfileEdit from 'pages/userProfile/ProfileEdit';
// import VendorProfile from 'pages/userProfile/VendorProfile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { themeCheck } from 'utils/darkmode';

// importing auth pages
import Home from './pages/Home';
import SignUp from 'pages/auth/SignUp';
import Login from 'pages/auth/Login';
import ForgotPassword from 'pages/auth/ForgotPassword';
import ChangePassword from 'pages/auth/ChangePassword';
import ResetMailSent from 'pages/auth/ResetMailSent';

// import Error404 from 'pages/Error404';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// all routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create-account',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-mail-sent',
    element: <ResetMailSent />
  },
  {
    path: '/change-password',
    element: <ChangePassword />
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

// const AppRoutes = () => {
//   themeCheck();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Auth */}
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />

//         {/* Products */}
//         <Route path="/products" element={<Products />} />
//         <Route path="/single-product" element={<SingleProduct />} />
//         <Route path="/new-product" element={<NewProducts />} />
//         <Route path="/edit-product" element={<EditProducts />} />

//         {/* Category */}
//         <Route path="/categories" element={<Category />} />
//         <Route path="/new-category" element={<NewCategory />} />
//         <Route path="/edit-category" element={<EditCategory />} />

//         {/* Tags */}
//         <Route path="/tags" element={<Tags />} />

//         {/* orders */}
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/order-details" element={<OrderDetails />} />

//         {/* Profile */}
//         <Route path="/customer-profile" element={<VendorProfile />} />
//         <Route path="/customer-profile-edit" element={<ProfileEdit />} />

//         {/*  404 */}
//         <Route path="*" element={<Error404 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;
