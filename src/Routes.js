import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { themeCheck } from 'utils/darkmode';

// importing auth pages
import Home from './pages/Home';
import SignUp from 'pages/auth/SignUp';
import Login from 'pages/auth/Login';
import ForgotPassword from 'pages/auth/ForgotPassword';
import ChangePassword from 'pages/auth/ChangePassword';
import ResetMailSent from 'pages/auth/ResetMailSent';

// importing products pages
import Products from 'pages/product/Products';
import SingleProduct from 'pages/product/SingleProduct';
import NewProducts from 'pages/product/NewProduct';
import EditProduct from 'pages/product/EditProduct';

// importing category pages
import Categories from 'pages/product/Categories';
import NewCategory from 'pages/product/NewCategory';
import EidtCategory from 'pages/product/EditCategory';

// importing tag page
import Tags from 'pages/product/Tags';

// importing orders page
import Orders from 'pages/orders/Orders';
import OrderDetails from 'pages/orders/OrderDetails';

// chat pages
import Chat from 'pages/Chat';

// importing customer profile page
import CustomerProfile from 'pages/userProfile/CustomerProfile';
import ProfileEdit from 'pages/userProfile/ProfileEdit';

// error page
import Error404 from 'pages/Error404';
import Customers from 'pages/Customers';

// all routing
const router = createBrowserRouter([
  // auth pages
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
  },

  // product CRUD pages
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/single-product',
    element: <SingleProduct />
  },
  {
    path: '/new-product',
    element: <NewProducts />
  },
  {
    path: '/edit-product',
    element: <EditProduct />
  },

  // category CRUD pages
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/category/create',
    element: <NewCategory />
  },
  {
    path: '/edit-product',
    element: <EidtCategory />
  },

  // tags page
  {
    path: '/tags',
    element: <Tags />
  },

  // oders pages
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/order-details',
    element: <OrderDetails />
  },
  // chat page
  {
    path: '/chat',
    element: <Chat />
  },

  // customers pages
  {
    path: '/customers',
    element: <Customers />
  },
  {
    path: '/customer',
    element: <CustomerProfile />
  },
  {
    path: '/customer-profile-edit',
    element: <ProfileEdit />
  },

  // if no route march (fallback)
  {
    path: '/*',
    element: <Error404 />
  }
]);

const Routes = () => {
  //   themeCheck();
  return <RouterProvider router={router} />;
};

export default Routes;
